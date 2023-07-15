import axios from "axios";

// Define api ("baseURL" references the backend)
const api = axios.create({ baseURL: "http://localhost:5000" });

/******** API Methods ********/
/*** Get ***/
export const getMappings = async () => {
  const response = await api.get("/");
  return response.data;
};

export const getURL = async (id) => {
  const response = await api.get(`/${id}`);
  return response.data.url;
};
/*** Post ***/
export const postMapping = async (url) => {
  const response = await api.post("/", { url: url });
  return response.data;
};
/*** Put ***/
// Unused
/*** Delete ***/
export const deleteMapping = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};
/*****************************/
