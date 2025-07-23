import api from "../../lib/axios";

const API_URL = "/api/users";

// Register user
const register = async (userData) => {
  const response = await api.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const authService = {
  register,
};

export default authService;
