import axios from "axios";

const api = axios.create({
  baseURL: "https://wetj9jofcg.execute-api.us-east-1.amazonaws.com/prod",
  timeout: 30000,
});

export default api;