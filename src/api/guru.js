import axios from "./axiosClient";

export function formNpsn(values) {
  return axios.post("/guru/npsn", values);
}
