import axios from "./axiosClient";
import {syncToken} from "./axiosClient"

export function getProfileSiswa() {
  console.log(localStorage.getItem("token"))
  return axios.get("/profile");
}

export function changePass(values) {
  return axios.post("/change-password", values);
}

export function getAngket() {
  return axios.get("/angket");
}
export function getSoalAngket({id}) {
  return axios.get(`/angket/${id}`);
}
export function postJawaban({id}) {
  return axios.post(`/${id}/jawaban`);
}