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

export function getAngket() {
    return axios.get(`/angket`);
}

export function tambahAngket(values) {
    return axios.post("/angket", values);
}
export function deleteAngket(id) {
    return axios.delete(`/angket/${id}`);
}

export function getSoalAngket(id) {
    console.log(id)
    return axios.get(`/angket/${id.id}`);
}

export function tambahSoal(values) {
    return axios.post("/soal", values);
}
