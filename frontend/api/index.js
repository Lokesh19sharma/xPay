import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://xpay-syrw.onrender.com",
});

instance.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token && token.length > 0) {
    config.headers.Authorization = `Bearer ${token}`;
    config.withCredentials = true;
  }
  return config;
});

export default instance;
