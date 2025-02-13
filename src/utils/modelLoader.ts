import axios from 'axios';

const API_URL = 'http://localhost:8080';

export interface ResNetModelConfig {
  numClasses: number;
  imgChannels: number;
  numLayers: number;
}

export const loadModel = async () => {
  try {
    const response = await axios.get(`${API_URL}/load-model`);
    return response.data;
  } catch (error) {
    console.error("Error loading model:", error);
    throw error;
  }
};

export const predictImage = async (imageData: FormData) => {
  try {
    const response = await axios.post(`${API_URL}/predict`, imageData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error making prediction:", error);
    throw error;
  }
};