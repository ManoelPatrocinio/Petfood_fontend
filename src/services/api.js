import axios from 'axios'
import { getToken } from "./auth";
require("dotenv").config(); //para poder ler as variaveis do .env

const api_url = process.env.REACT_APP_API;


const api = axios.create({
  baseURL: api_url,
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
