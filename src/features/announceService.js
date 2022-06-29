import axios from "axios";

const API_URL = "http://localhost:5000/admin/announcement ";

const addAnnounce = async (announceData) => {
  const response = await axios.post(API_URL, announceData);
  return response.data;
};

const getAnnounce = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const deleteAnnounce = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

const announceService = {
  addAnnounce,
  getAnnounce,
  deleteAnnounce,
};

export default announceService;
