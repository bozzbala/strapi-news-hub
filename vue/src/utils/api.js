import axios from "axios";

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "http://localhost:1337/api",
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_STRAPI_TOKEN || ""}`,
  },
});

export const getCollection = async (collection, params = {}) => {
  try {
    const { data } = await api.get(`/${collection}`, { params });
    return data;
  } catch (error) {
    console.error("Ошибка при запросе коллекции:", error);
    throw error;
  }
};

export const getSingle = async (collection, id, params = {}) => {
  try {
    const { data } = await api.get(`/${collection}/${id}`, { params });
    return data;
  } catch (error) {
    console.error("Ошибка при запросе записи:", error);
    throw error;
  }
};

export default api;
