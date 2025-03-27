
from fastapi import FastAPI, File, UploadFile, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
import torch
import torch.nn as nn
from PIL import Image
import torchvision.transforms as transforms
import io
from typing import Type, TypeVar, List, Optional, Dict, Literal
import numpy as np
from resnet import ResNet, BasicBlock

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize model variables
current_model = None
current_model_name = None

# Define model configurations
MODEL_CONFIGS = {
    "resnet34": {
        "num_layers": 34,
        "weights_path": "resnet_30.pth",  # File is named resnet_30.pth but it's ResNet34
        "block": BasicBlock,
        "num_classes": 2
    },
    "resnet50": {
        "num_layers": 50,
        "weights_path": "not-pretrained-1 ResNet 50.pth",
        "block": BasicBlock,
        "num_classes": 2
    }
}

@app.get("/load-model")
async def load_model(model_name: Literal["resnet34", "resnet50"] = Query(..., description="Model to load (resnet34 or resnet50)")):
    global current_model, current_model_name
    
    if model_name not in MODEL_CONFIGS:
        raise HTTPException(status_code=400, detail=f"Invalid model name. Choose from: {', '.join(MODEL_CONFIGS.keys())}")
    
    try:
        config = MODEL_CONFIGS[model_name]
        
        # Initialize the model with the correct architecture
        model = ResNet(
            img_channels=3, 
            num_layers=config["num_layers"], 
            block=config["block"], 
            num_classes=config["num_classes"]
        )
        
        # Load the pre-trained weights
        model.load_state_dict(torch.load(config["weights_path"], map_location=torch.device('cpu')))
        model.eval()  # Set to evaluation mode
        
        # Update global model references
        current_model = model
        current_model_name = model_name
        
        return {
            "status": "success",
            "message": f"Model {model_name} loaded successfully",
            "details": {
                "architecture": f"ResNet-{config['num_layers']}",
                "num_classes": config["num_classes"],
                "weights_file": config["weights_path"]
            }
        }
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail=f"Model weights file not found for {model_name}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to load model: {str(e)}")

@app.get("/model-status")
async def model_status():
    if current_model is None:
        return {"status": "no_model", "message": "No model currently loaded"}
    
    return {
        "status": "loaded",
        "model_name": current_model_name,
        "details": MODEL_CONFIGS[current_model_name]
    }

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    global current_model
    
    if current_model is None:
        raise HTTPException(
            status_code=400, 
            detail="No model loaded. Please load a model first using the /load-model endpoint."
        )
    
    try:
        # Read and preprocess the image
        image_data = await file.read()
        image = Image.open(io.BytesIO(image_data)).convert('RGB')
        
        # Define image transformations
        transform = transforms.Compose([
            transforms.Resize((256, 256)),  # ResNet expects 224x224 images
            transforms.ToTensor(),
            transforms.Normalize(
                mean=[0.485, 0.456, 0.406],
                std=[0.229, 0.224, 0.225]
            )
        ])
        
        # Transform and add batch dimension
        image_tensor = transform(image).unsqueeze(0)
        
        # Make prediction
        with torch.no_grad():
            outputs = current_model(image_tensor)
            probabilities = torch.softmax(outputs, dim=1)
            predicted_class = torch.argmax(probabilities, dim=1).item()
            confidence = probabilities[0][predicted_class].item()
            
        return {
            "prediction": str(predicted_class),
            "confidence": float(confidence),
            "model_used": current_model_name
        }
    except Exception as e:
        print(f"Error during prediction: {str(e)}")  # Add server-side logging
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.0", port=5000)
