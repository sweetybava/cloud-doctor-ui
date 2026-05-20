import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getDashboard = async () => {
  const res = await axios.get(`${API}/dashboard`);
  return res.data;
};

export const runScan = async () => {
  const res = await axios.post(`${API}/scan`);
  return res.data;
};

export const getHistory = async () => {
  const res = await axios.get(`${API}/history`);
  return res.data;
};