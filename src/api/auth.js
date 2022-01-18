import axios from "./axiosClient";

export function register(values) {
  return axios.post("/register", values);
}

export function loginEmail(values) {
  return axios.post("/login-email", values);
}

export function loginWa(values) {
  return axios.post("/login-nomor", values);
}