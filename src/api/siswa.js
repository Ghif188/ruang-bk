import axios from "./axiosClient";
import {syncToken} from "./axiosClient"

export function getProfile() {
    return axios.get("/profile");
  }