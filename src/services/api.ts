import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.18.8:8000/v1",
});

export { api };
