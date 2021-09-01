import { DELETE_SUCCESS  } from "../constants";

export const deleteData = (data) => {
  return {
    type: DELETE_SUCCESS,
    payload: data,
  };
};

