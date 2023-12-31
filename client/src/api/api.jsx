import axios from "axios";

// Define api ("baseURL" references the backend)
const api = axios.create({ baseURL: "https://clumsy-pink-tam.cyclic.app" });

/******** API Methods ********/
/*** Get ***/
export const getMappings = async ({ queryKey, pageParam = 1 }) => {
  const { pageSize, search = "" } = queryKey[1];
  const uri = `/?page=${pageParam}&page-size=${pageSize}&search=${search}`;
  const response = await api.get(uri);
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
