import { useParams } from "react-router";
import axios from "./axiosClient";

export function getProfile() {
    let id = localStorage.getItem("id")
    return axios.get(`/users/${id}`);
}

export function getAllUser({ page, perPage, keyword }) {
    console.log(perPage);
    console.log(keyword);
    console.log(page);
    return axios.get(`/users?keywords=${keyword}&page=${page}&perpage=${perPage}`);
}

export function getAngket({ page, perPage, keyword }) {
    return axios.get(`/angket?page=${page}&perpage=${perPage}`);
}

export function tambahAngket(values) {
    return axios.post("/angket", values);
}
export function deleteAngket(id) {
    return axios.delete(`/angket/${id}`);
}

export function getSoalAngket(id) {
    return axios.get(`/angket/${id.id}`);
}

export function tambahSoal(values) {
    return axios.post("/soal", values);
}
export function deleteSoal(id) {
    return axios.delete(`/soal/${id}`);
}
export function showSoal(id) {
    console.log(id)
    return axios.get(`/soal/${id}`);
}
export function getJumlah() {
    return axios.get(`/jumlah`);
}
export function updateSoal(values) {
    console.log(values)
    let formData = new URLSearchParams
    formData.append("soal", values.soal);
    formData.append("nomor_soal", values.nomor_soal);
    formData.append("angket_id", values.angket_id);

    for (let pair of formData.entries()) {
        console.log(pair[0] + ',' + pair[1])
    }
    axios.put(`/soal/${values.id}`, formData, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
}

// export function importSoal(values) {
//     console.log(values)
//     e.prevent
//     let formData = new FormData();
//     formData.append("soal", values);
//     axios.post(`/import-soal`, formData, {
//         headers: {
//             "Content-Type": "multipart/form-data",
//         },
//     });
// }
