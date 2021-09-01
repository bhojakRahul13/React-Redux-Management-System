import { ADMIN_SIGNUP } from "../../constants";

const initialState = {
  AdminData: [
    {
      id: 1,
      name: "Admin",
      email: "admin@gmail.com",
      password: "admin",
      type: "Admin",
    },
  ],
};

const AdminSignupDataReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case ADMIN_SIGNUP:
      return {
        ...state,
        AdminData: [...state.AdminData, payload],
      };

    default:
      return state;
  }
};


export default AdminSignupDataReducer;
