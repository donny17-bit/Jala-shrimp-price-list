import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://app.jala.tech/api/shrimp_prices",
});

export default axiosInstance;
