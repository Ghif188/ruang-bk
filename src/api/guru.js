import axios from "./axiosClient";

export function formNpsn(values) {
  return axios.post("/guru/npsn", values);
}

export function registerSiswa(values) {
  return axios.post("/register-user", values);
}

export function getSiswa() {
  return axios.get("/siswa");
}

