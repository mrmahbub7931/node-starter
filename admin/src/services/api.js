import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://api.local.nikash/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config => {
  // You can add authorization headers or other custom headers here
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
}));

export default apiClient;
// Example function to get data from an endpoint
// export const getData = async (endpoint) => {
//   try {
//     const response = await apiClient.get(endpoint);
//     return response.data;
//   } catch (error) {
//     console.error('API GET Error:', error);
//     throw error;
//   }
// }