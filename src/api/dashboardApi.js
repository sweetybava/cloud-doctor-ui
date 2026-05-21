import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getDashboard = async () => {

  const res = await axios.get(`${API}/dashboard`);

  // Handle Lambda proxy response
  if (res.data.body) {
    return JSON.parse(res.data.body);
  }

  return res.data;
};

export const runScan = async () => {

  const res = await axios.post(`${API}/scan`);

  if (res.data.body) {
    return JSON.parse(res.data.body);
  }

  return res.data;
};

export const getHistory = async () => {

  const res = await axios.get(`${API}/history`);

  if (res.data.body) {
    return JSON.parse(res.data.body);
  }

  return res.data;
};
