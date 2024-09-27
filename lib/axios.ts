import axios from "axios";

// const backendURL = process.env.BACKEND_URL;
const backendURL = process.env.BACKEND_URL || "http://localhost:3001";

export const BackendClient = axios.create({
  baseURL: backendURL,
});
