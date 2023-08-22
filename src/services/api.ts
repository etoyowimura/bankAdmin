import axios from "axios";
import { clear_local_storage } from "../utils/data";

const instance = axios.create({
  baseURL: "https://bank.payzap.io/",
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.data.error.statusCode === 401) {
        clear_local_storage();
      }
    }
    return Promise.reject(error);
  }
);

const token: string | null = localStorage.getItem("token");
if (token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default instance;
