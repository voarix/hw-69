import axios from "axios";
import { BASE_ID_URL, BASE_URL } from "./globalConstants.ts";

export const axiosApiBase = axios.create({
  baseURL: BASE_URL,
});

export const axiosApiId = axios.create({
  baseURL: BASE_ID_URL,
});
