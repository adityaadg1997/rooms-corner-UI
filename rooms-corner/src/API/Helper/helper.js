import axios from "axios";

export const API_URL = "http://localhost:9096/api";

export const userApi = axios.create({
  baseURL: API_URL,
});

export const restrictedApi = axios.create({
  baseURL: API_URL,
});

// Helper Function to Get Cookies
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};

// Axios Interceptor
restrictedApi.interceptors.request.use(
  (config) => {
    const token = getCookie("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

userApi.defaults.withCredentials = true;
restrictedApi.defaults.withCredentials = true;
