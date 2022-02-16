import axios from "./axiosClient";

export function formNpsn(values) {
  return axios.post("/guru/npsn", values);
}

export function getProfile() {
  return axios.get("/profile");
}

export function registerSiswa(values) {
  return axios.post("/register-user", values);
}

export function getSiswa({perpage, page}) {
  return axios.get(`/siswa?perpage=${perpage}&page=${page}`);
}

export function showSiswa(id) {
  return axios.get(`/users/${id}`);
}

export function deleteSiswa(id) {
  return axios.delete(`/siswa/${id}`);
}


