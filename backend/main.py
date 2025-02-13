
from fastapi import FastAPI, File, UploadFile, HTTPException
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
    allow_origins=["http://localhost:5173"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize model globally
model = None

@app.on_event("startup")
async def startup_event():
    global model
    try:
        # Initialize the model with the correct architecture
        model = ResNet(img_channels=3, num_layers=50, block=BasicBlock, num_classes=2)
        # Load the pre-trained weights
        model.load_state_dict(torch.load("not-pretrained-1 ResNet 50.pth", map_location=torch.device('cpu')))
        model.eval()  # Set to evaluation mode
        print("Model loaded successfully on startup")
    except Exception as e:
        print(f"Error loading model on startup: {str(e)}")

@app.get("/load-model")
async def load_model():
    global model
    if model is not None:
        return {"message": "Model already loaded"}
    
    try:
        # Initialize the model with the correct architecture
        model = ResNet(img_channels=3, num_layers=50, block=BasicBlock, num_classes=2)
        # Load the pre-trained weights
        model.load_state_dict(torch.load("not-pretrained-1 ResNet 50.pth", map_location=torch.device('cpu')))
        model.eval()  # Set to evaluation mode
        return {"message": "Model loaded successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    print("Received prediction request")  # Debug log
    
    if not file:
        raise HTTPException(status_code=400, detail="No file provided")
    
    global model
    if model is None:
        try:
            await load_model()
        except Exception as e:
            raise HTTPException(status_code=500, detail="Could not load model")
    
    try:
        # Read and preprocess the image
        contents = await file.read()
        if not contents:
            raise HTTPException(status_code=400, detail="Empty file")
            
        print(f"File size: {len(contents)} bytes")  # Debug log
        
        image = Image.open(io.BytesIO(contents))
        if image.mode != 'RGB':
            image = image.convert('RGB')
        
        # Define image transformations
        transform = transforms.Compose([
            transforms.Resize((224, 224)),
            transforms.ToTensor(),
            transforms.Normalize(
                mean=[0.485, 0.456, 0.406],
                std=[0.229, 0.224, 0.225]
            )
        ])
        
        # Transform and add batch dimension
        try:
            image_tensor = transform(image).unsqueeze(0)
            print("Image transformed successfully")  # Debug log
        except Exception as e:
            print(f"Transform error: {str(e)}")  # Debug log
            raise HTTPException(status_code=400, detail="Could not process image")
        
        # Make prediction
        with torch.no_grad():
            outputs = model(image_tensor)
            probabilities = torch.softmax(outputs, dim=1)
            predicted_class = torch.argmax(probabilities, dim=1).item()
            confidence = probabilities[0][predicted_class].item()
            
            print(f"Prediction made: Class {predicted_class}, Confidence {confidence}")  # Debug log
            
            return {
                "prediction": str(predicted_class),
                "confidence": float(confidence)
            }
            
    except Exception as e:
        print(f"Error during prediction: {str(e)}")  # Server-side logging
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
