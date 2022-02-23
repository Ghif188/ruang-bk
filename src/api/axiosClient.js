import axios from "axios";
import qs from "qs";

const headers = {
  Accept: "application/json",
  Authorization: "Bearer " + localStorage.getItem("token"),
  "Content-Type": "application/json",
};
const axiosClient = axios.create({
  baseURL: "https://sensus-cors.herokuapp.com/https://ruang-bk-be.herokuapp.com/api/",
  paramsSerializer: function (params) {
    return qs.stringify(params, { encode: false, skipNulls: true })
  },
  headers,
});

export const syncToken = () => {
  axiosClient.defaults.headers[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;
};
export default axiosClient;
