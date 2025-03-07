
import axios from 'axios';

// Get the API URL from environment or fallback to localhost
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export interface ResNetModelConfig {
  numClasses: number;
  imgChannels: number;
  numLayers: number;
}

export type ModelName = 'resnet34' | 'resnet50';

export const loadModel = async (modelName: ModelName = 'resnet50') => {
  try {
    console.log(`Attempting to load ${modelName} model from:`, API_URL);
    const response = await axios.get(`${API_URL}/load-model`, {
      params: { model_name: modelName },
      timeout: 10000, // 10 second timeout
      headers: {
        'Accept': 'application/json',
      }
    });
    console.log('Model load response:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error loading model:", error);
    if (axios.isAxiosError(error)) {
      if (error.code === 'ERR_NETWORK') {
        throw new Error('Cannot connect to the server. Please ensure the backend server is running at ' + API_URL);
      }
      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timed out. The server took too long to respond.');
      }
      if (error.response) {
        throw new Error(`Server error: ${error.response.data.detail || error.message}`);
      }
    }
    throw error;
  }
};

export const getModelStatus = async () => {
  try {
    const response = await axios.get(`${API_URL}/model-status`, {
      timeout: 5000,
      headers: {
        'Accept': 'application/json',
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error checking model status:", error);
    if (axios.isAxiosError(error) && error.code === 'ERR_NETWORK') {
      throw new Error('Cannot connect to the server. Please ensure the backend server is running at ' + API_URL);
    }
    throw error;
  }
};

export const predictImage = async (imageData: FormData) => {
  try {
    console.log('Sending prediction request to:', API_URL);
    const response = await axios.post(`${API_URL}/predict`, imageData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 30000, // 30 second timeout for prediction
    });
    console.log('Prediction response:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error making prediction:", error);
    if (axios.isAxiosError(error)) {
      if (error.code === 'ERR_NETWORK') {
        throw new Error('Cannot connect to the server. Please ensure the backend server is running at ' + API_URL);
      }
      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timed out. The model prediction took too long.');
      }
      if (error.response) {
        throw new Error(`Server error: ${error.response?.data?.detail || error.message}`);
      }
    }
    throw error;
  }
};
