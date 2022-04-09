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
  return axios.get("/getAkses");
}
export function getSoalAngket({id, page, perPage}) {
  return axios.get(`/angket/${id}?&page=${page}&perpage=${perPage}`);
}