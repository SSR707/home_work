import axios from "axios";

const request = axios.create({ baseURL: import.meta.env.VITE_URL });

request.interceptors.request.use((req) => {
  return req;
});

export { request };
