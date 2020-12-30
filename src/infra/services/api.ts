import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:44308/v1'
});

export default api;
