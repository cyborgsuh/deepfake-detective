
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import torch
import torch.nn as nn
from PIL import Image
import torchvision.transforms as transforms
import io
from typing import Type, TypeVar, List
import numpy as np
from resnet import ResNet, BasicBlock

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize model globally
model = None

@app.get("/load-model")
async def load_model():
    global model
    try:
        # Initialize the model with the correct architecture
        model = ResNet(img_channels=3, num_layers=50, block=BasicBlock, num_classes=2)
        # Load the pre-trained weights
        model.load_state_dict(torch.load("not-pretrained-1 ResNet 50.pth", map_location=torch.device('cpu')))
        model.eval()  # Set to evaluation mode
        return {"message": "Model loaded successfully"}
    except Exception as e:
        return {"error": str(e)}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    global model
    if model is None:
        return {"error": "Model not loaded. Please load the model first."}
    
    try:
        # Read and preprocess the image
        image_data = await file.read()
        image = Image.open(io.BytesIO(image_data)).convert('RGB')
        
        # Define image transformations
        transform = transforms.Compose([
            transforms.Resize((224, 224)),  # ResNet expects 224x224 images
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
            "confidence": float(confidence)
        }
    except Exception as e:
        print(f"Error during prediction: {str(e)}")  # Add server-side logging
        return {"error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
