
from fastapi import FastAPI, File, UploadFile, Query
from fastapi.middleware.cors import CORSMiddleware
import torch
import torch.nn as nn
from PIL import Image
import torchvision.transforms as transforms
import io
from typing import Type, TypeVar, List, Optional, Literal
import numpy as np
from resnet import ResNet, BasicBlock

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],  # Replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize model globally
model = None
current_model_type = None

@app.get("/load-model")
async def load_model(model_type: Literal["ResNet-34", "ResNet-50"] = "ResNet-50"):
    global model, current_model_type
    try:
        # Determine model architecture based on the selected model type
        if model_type == "ResNet-34":
            num_layers = 34
            model_file = "resnet_30.pth"  # File is named resnet_30.pth but is a ResNet-34 model
            block = BasicBlock
        elif model_type == "ResNet-50":
            num_layers = 50
            model_file = "not-pretrained-1 ResNet 50.pth"
            block = BasicBlock
        else:
            return {"error": f"Unsupported model type: {model_type}. Supported types are 'ResNet-34' and 'ResNet-50'."}
        
        # Initialize the model with the correct architecture
        model = ResNet(img_channels=3, num_layers=num_layers, block=block, num_classes=2)
        
        # Load the pre-trained weights
        model.load_state_dict(torch.load(model_file, map_location=torch.device('cpu')))
        model.eval()  # Set to evaluation mode
        
        # Update current model type
        current_model_type = model_type
        
        return {
            "message": f"{model_type} model loaded successfully",
            "model_type": model_type
        }
    except FileNotFoundError as e:
        return {"error": f"Model file not found: {str(e)}"}
    except Exception as e:
        return {"error": f"Failed to load model: {str(e)}"}

@app.get("/model-status")
async def model_status():
    global model, current_model_type
    if model is None:
        return {"status": "No model loaded"}
    return {
        "status": "Model loaded",
        "model_type": current_model_type
    }

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    global model, current_model_type
    if model is None:
        return {"error": "No model loaded. Please load a model first using the /load-model endpoint."}
    
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
            outputs = model(image_tensor)
            probabilities = torch.softmax(outputs, dim=1)
            predicted_class = torch.argmax(probabilities, dim=1).item()
            confidence = probabilities[0][predicted_class].item()
            
        return {
            "prediction": str(predicted_class),
            "confidence": float(confidence),
            "model_used": current_model_type
        }
    except Exception as e:
        print(f"Error during prediction: {str(e)}")  # Add server-side logging
        return {"error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.0", port=5000)
