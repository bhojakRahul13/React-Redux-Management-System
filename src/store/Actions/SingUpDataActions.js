import {
  TEACHER_SIGNUP,
  STUDENT_SIGNUP,
  ADMIN_SIGNUP,
  
  PASSWORD_UPDATE_SUCCESS,
} from "../constants";

export const addSignUpStudents = (data) => {
  return {
    type: STUDENT_SIGNUP,
    payload: data,
  };
};

export const addSignUpTeacher = (data) => {
  return {
    type: TEACHER_SIGNUP,
    payload: data,
  };
};

export const addSignUpAdmin = (data) => {
  return {
    type: ADMIN_SIGNUP,
    payload: data,
  };
};

export const passwordReset = (data) => {
  return {
    type: PASSWORD_UPDATE_SUCCESS,
    payload: data,
  };
};
