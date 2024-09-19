import axios from "axios";

export const API_BASE_URL = "http://localhost:3000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});
const ApiService = {
  auth: async (endpoint, data = {}, token = null) => {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    try {
      const response = await api.post(`/${endpoint}`, data, { headers });
      return response.data;
    } catch (error) {
      // Log the full error object for better debugging
      console.log('Full API Error:', error);
      console.log('API Error Response:', error.response); // if there's a response
      return { success: false, message: error.response?.data?.message || 'Something went wrong!' };
    }
  },
}
  export default ApiService