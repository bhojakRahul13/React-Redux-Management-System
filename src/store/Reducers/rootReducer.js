import { combineReducers } from "redux";
import AdminSignUpReducer from "./SignUpReducers/AdminSignUpReducer";
import TeacherSignUpReducer from "./SignUpReducers/TeacherSignUpReducer";
import StudentSignUpReducer from "./SignUpReducers/StudentSignUpReducer";
import LoginReducer from "./authReducer";
const rootReducer = combineReducers({
  login: LoginReducer,
  admin: AdminSignUpReducer,
  student: StudentSignUpReducer,
  teacher: TeacherSignUpReducer,
});

export default rootReducer;
