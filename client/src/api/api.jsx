import axios from "axios";

// Define api ("baseURL" references the backend)
export const api = axios.create({ baseURL: "http://localhost:5000" });

// Get Helpers
export const getMappings = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getURL = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data.url;
  } catch (error) {
    return null;
  }
};
