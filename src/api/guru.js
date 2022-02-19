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

export function updateGuru(values) {
  let formData = new URLSearchParams
  formData.append("nama_guru" , values.nama_guru);
  formData.append("npsn" , values.npsn);
  formData.append("tanggal_lahir" , values.tanggal_lahir);
  formData.append("tempat_lahir" , values.tempat_lahir);
  formData.append("alamat" , values.alamat);
  formData.append("foto" , values.foto);
  formData.append("sekolah" , values.sekolah);
  formData.append("_method" , "put")

  axios.put(`/guru/update`, formData,{
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}


