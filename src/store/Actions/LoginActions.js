import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT,UPDATE_ERROR } from "../constants";

export const loginSuccess = (data) => {
  console.log("loginActions====",data);
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginError = (data) => {
  return {
    type: LOGIN_ERROR,
    payload: data,
  };
};

export const UpdateError = (data) => {
  return {
    type: UPDATE_ERROR,
    payload: data,
  };
};


export const logout = (data) => {
  return {
    type: LOGOUT,
    payload: data,
  };
};


