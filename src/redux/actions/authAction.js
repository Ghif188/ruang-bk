import { register, login, loginWa  } from "../../api/auth";
import { syncToken } from "../../api/axiosClient";
export function authRegister(payload) {
  return async (dispatch) => {
    try {
      const response = await register(payload);
      const data = response.data;

      dispatch(registerHandle(data));
      localStorage.setItem("token", data.token);

      return data;
    } catch (err) {
      console.log(err);
    }
  };
}
export function authLogin(payload) {
  return async (dispatch) => {
    dispatch(isloadingStart());
    try {
      const response = await login(payload);
      const data = response.data;

      dispatch(loginHandle(data));
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.user.nama_user);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("nomor wa", data.user.nomor_telp);
      localStorage.setItem("role", data.user.role);
      localStorage.setItem("status", data.user.status);
      dispatch({
        type: "loadingEnd",
      });

      return data;
    } catch (err) {
      dispatch({
        type: "loadingEnd",
      });

     
      let data = err.response.data
      return data
   
    }
  };
}
export function authLoginWa(payload) {
  return async (dispatch) => {
    dispatch(isloadingStart());
    try {
      const response = await loginWa(payload);
      const data = response.data;

      dispatch(loginHandle(data));
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.user.nama_user);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("nomor wa", data.user.nomor_telp);
      localStorage.setItem("role", data.user.role);
      localStorage.setItem("status", data.user.status);
      dispatch({
        type: "loadingEnd",
      });

      return data;
    } catch (err) {
      dispatch({
        type: "loadingEnd",
      });

     
      let data = err.response.data
      return data
   
    }
  };
}
const isloadingStart = () => {
  return {
    type: "loadingStart",
  };
};

const registerHandle = (data) => {
  return {
    type: "Login",
    nama: data?.user?.name,
    email: data?.user?.email,
    token: data?.token,
  };
};

const loginHandle = (data) => {
  return {
    type: "Login",
    nama: data?.user?.name,
    email: data?.user?.email,

    token: data?.token,
  };
};
