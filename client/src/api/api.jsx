import axios from "axios";

// Define api ("baseURL" references the backend)
const api = axios.create({ baseURL: "http://localhost:5000" });

/******** API Methods ********/
/*** Get ***/
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
/*** Post ***/
export const postURL = async (url) => {
  try {
    const response = await api.post("/", { url: url });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
/*** Put ***/
// Unused
/*** Delete ***/
export const deleteMapping = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
/*****************************/
