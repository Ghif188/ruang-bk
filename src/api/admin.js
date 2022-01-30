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
