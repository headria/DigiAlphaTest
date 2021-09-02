import axios from "axios";
import { baseApi } from "./config";
axios.defaults.baseURL = baseApi;
axios.defaults.headers.get["Accept"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

export default axios;
