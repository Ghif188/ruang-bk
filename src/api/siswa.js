import axios from "./axiosClient";
import {syncToken} from "./axiosClient"

export function getProfileSiswa() {
  console.log(localStorage.getItem("token"))
  return axios.get("/profile");
}
export function getDetailProfile({id}) {
  return axios.get(`/detail-profile/${id}`);
}

export function changePass(values) {
  return axios.post("/change-password", values);
}

export function getAngket() {
  return axios.get("/getAkses");
}
export function getSoalAngket({id}) {
  return axios.get(`/angket/${id}`);
}
export function postJawaban({id}) {
  return axios.post(`/${id}/jawaban`);
}
export function cekAkses(kode) {
  console.log(kode)
  return axios.get(`/check-jawaban/${kode}`);
}
