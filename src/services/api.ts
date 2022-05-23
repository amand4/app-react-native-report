import axios from "axios";

const api = axios.create({
  baseURL: "http://api.tcc.1hp.racing/v1",
  // baseURL: "http://192.168.0.105:8000/v1",
});

export { api };
