import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://api.local.nikash/api/v1', // Updated to match the Traefik router rule
  headers: {
    'Content-Type': 'application/json',
  },
});
export default apiClient;