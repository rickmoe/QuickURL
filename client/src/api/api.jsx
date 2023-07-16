import axios from "axios";

// Define api ("baseURL" references the backend)
const api = axios.create({ baseURL: "http://localhost:5000" });

/******** API Methods ********/
/*** Get ***/
export const getMappings = async (search = "") => {
  const response = await api.get("/");
  return response.data;
};

export const getURL = async (id) => {
  const response = await api.get(`/${id}`);
  return response.data.url;
};
/*** Post ***/
export const postMapping = async (params) => {
  const response = await api.post("/", params);
  return response.data;
};
/*** Put ***/
// Unused
/*** Delete ***/
export const deleteMapping = async ({ id, password = null }) => {
  const response = await api.delete(`/${id}`, { data: { password } });
  return response.data;
};
/*****************************/
