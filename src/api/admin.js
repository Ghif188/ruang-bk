import axios from "./axiosClient";

export async function getProfile() {
    let id = localStorage.getItem("id")
    let token = localStorage.getItem("token")
    axios.get(`/users/${id}`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });
    console.log(token)
}
