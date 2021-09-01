import {
  STUDENT_SIGNUP,
  PASSWORD_UPDATE_SUCCESS,
  DELETE_SUCCESS,
  UPDATE_DATA_SUCCESS,
} from "../../constants";
import _filter from "lodash/filter";

const initialState = {
  StudentsData: [],
  loading: false,
};

const StudentSignupDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STUDENT_SIGNUP:
      return {
        ...state,
        loading: false,
        StudentsData: [...state.StudentsData, payload],
      };

    case PASSWORD_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,

        StudentsData: state.StudentsData.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              id: payload.id,
              password: payload.password,
            };
          }
          return item;
        }),
        error: "",
      };

    case DELETE_SUCCESS:
      let filterdData = _filter(state.StudentsData, (item) => {
        return item.id !== payload;
      });

      return {
        ...state,
        loading: false,
        StudentsData: filterdData,
      };

    case UPDATE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        StudentsData: state.StudentsData.map((item) => {
          if (item.id === payload.id) {
            return {
              id: payload.id,
              name: payload.name,
              email: payload.email,
              password:payload.password,
              type:payload.type,
            };
          }
          return item;
        }),
        error: "",
      };

    default:
      return state;
  }
};

export default StudentSignupDataReducer;
