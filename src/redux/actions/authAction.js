import { register, loginEmail , loginWa } from "../../api/auth";
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
export function authLoginEmail(payload) {
  return async (dispatch) => {
    dispatch(isloadingStart());
    try {
      const response = await loginEmail(payload);
      const data = response.data;

      dispatch(loginEmailHandle(data));
      localStorage.setItem("token", data.token);
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

      dispatch(loginWaHandle(data));
      localStorage.setItem("token", data.token);
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

const loginEmailHandle = (data) => {
  return {
    type: "Login",
    nama: data?.user?.name,
    email: data?.user?.email,
    token: data?.token,
  };
};

const loginWaHandle = (data) => {
  return {
    type: "Login",
    nama: data?.user?.name,
    nomor: data?.user?.nomor,
    token: data?.token,
  };
};