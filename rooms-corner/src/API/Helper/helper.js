import axios from "axios";

export const API_URL = "http://localhost:9096/api";

export const userApi = axios.create({
  baseURL: API_URL,
});

export const restrictedApi = axios.create({
  baseURL: API_URL,
});

{
  /* Retrieve the token from the cookie */
}
const cookies = document.cookie.split(";");
let jwtToken = null;
cookies.forEach((cookie) => {
  const [name, value] = cookie.trim().split("=");
  if (name === "token") {
    jwtToken = value;
  }
});

restrictedApi.interceptors.request.use(
  (config) => {
    const token = jwtToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
