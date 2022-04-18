import axios from "axios";
import { stringify } from "qs";

const BASE_URL = process.env.NEXT_PUBLIC_ENDPOINT;

const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/json',
    "Content-type": "application/json",
  },
});

Axios.defaults.paramsSerializer = (params) => stringify(params);

export default Axios;
