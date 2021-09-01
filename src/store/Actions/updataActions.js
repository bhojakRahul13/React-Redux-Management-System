import { UPDATE_DATA_SUCCESS } from "../constants";


export const updateData = (data) => {
    return {
      type: UPDATE_DATA_SUCCESS,
      payload: data,
    };
  };