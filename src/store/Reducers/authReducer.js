import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT ,UPDATE_ERROR} from "../constants";

const initialState = {
  loginUser: [],
  loggedIn: null,
  isAuthenticated: false,
  loggedUser: null,
  error: "",
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginUser: payload,
        loggedIn: true,
        loggedUser: payload.email,
        isAuthenticated: true,
        error: false,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        loggedUser: [],
        loggedIn: false,
        isAuthenticated: false,
        error: payload,
      };

    case UPDATE_ERROR:
      return {
        ...state,
        loading: false,
        loggedUser: [],
        loggedIn: false,
        isAuthenticated: false,
        error: false,
      };


    case LOGOUT:
      return {
        ...state,
        loginUser: [],
        loggedIn: false,
        loggedUser: false,
        isAuthenticated: false,
        error: false,
      };  

    default:
      return state;
  }
};
export default authReducer;
