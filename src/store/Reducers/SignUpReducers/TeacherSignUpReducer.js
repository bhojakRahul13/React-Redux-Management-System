import {
  TEACHER_SIGNUP,
  PASSWORD_UPDATE_SUCCESS,
  UPDATE_DATA_SUCCESS,
  DELETE_SUCCESS,
} from "../../constants";
import _filter from "lodash/filter";

const initialState = {
  TeacherData: [],
  loading: false,
};

const TeacherSignupDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TEACHER_SIGNUP:
      return {
        ...state,
        TeacherData: [...state.TeacherData, payload],
      };

    case PASSWORD_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,

        TeacherData: state.TeacherData.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              id: payload.id,
              password: payload.password,
            };
          }
          return item;
        }),
      };

    case DELETE_SUCCESS:
      let filterdData = _filter(state.TeacherData, (item) => {
        return item.id !== payload;
      });

      return {
        ...state,
        loading: false,
        TeacherData: filterdData,
      };

    case UPDATE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        TeacherData: state.TeacherData.map((item) => {
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

export default TeacherSignupDataReducer;
