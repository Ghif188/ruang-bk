import axios from "./axiosClient";
import { syncToken } from "./axiosClient"
export function formNpsn(values) {
  return axios.post("/guru/npsn", values);
}

export function getProfile() {
  return axios.get("/profile");
}

export function registerSiswa(values) {
  return axios.post("/register-user", values);
}

export function getSiswa() {
  syncToken();
  return axios.get(`/getSiswa`);
}

export function getJumlah() {
  return axios.get(`/jumlah`);
}

export function showSiswa(id) {
  return axios.get(`/users/${id}`);
}

export function deleteSiswa(id) {
  return axios.delete(`/siswa/${id}`);
}

export function updateGuru(values) {
  let formData = new URLSearchParams()
  formData.append("nama_guru", values.nama_guru);
  formData.append("npsn", values.npsn);
  formData.append("tanggal_lahir", values.tanggal_lahir);
  formData.append("tempat_lahir", values.tempat_lahir);
  formData.append("alamat", values.alamat);
  formData.append("foto", values.foto);
  formData.append("sekolah", values.sekolah);
  formData.append("_method", "put")

  axios.post(`/guru/update`, formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}

export function getAngket() {
    return axios.get(`/angket`);
}

export function changePass(values) {
  return axios.post("/change-password", values);
}

export function aktivasiAngket(values) {
  return axios.post("/akses", values)
}

export function getAktifasi() {
  return axios.get("/akses")
}

export function getUserAktifasi(id) {
  return axios.get(`/beri-akses/${id.id}`)
}

export function getSudahAktif(id) {
  return axios.get(`/user-akses/${id.id}`)
}

export function importJawaban(id) {
  return axios.get(`/jawaban/export/xlsx/${id}`)
}
