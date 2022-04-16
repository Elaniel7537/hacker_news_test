import axios from "../../src/services/axios";
import { getHackerNewsRoute } from "./routes";

// obtener lista hacker news server
export const getHackerNews = async (params: any) => {
  let data = {} as {};
  try {
    const response = await axios.get(getHackerNewsRoute(params));
    data = response?.data;
  } catch (err: any) {
    data = err.message ? err.message : err;
  }

  return data;
};
