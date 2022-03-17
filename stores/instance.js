import axios from "axios";

export const baseURL = "http://192.168.8.102:3000/";

export const instance = axios.create({
  baseURL: `${baseURL}api`,
});
