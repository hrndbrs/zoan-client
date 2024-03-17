import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    // Authorization: `Bearer ${process.env.NEXT_APP_API_TOKEN}`,
  },
});

export default api;
