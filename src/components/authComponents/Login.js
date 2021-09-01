import React, { useState, useEffect } from "react";
import CommonLogin from "../../common/CommonForm";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginSuccess,
  loginError,
  UpdateError,
} from "../../store/Actions/LoginActions";

const template = {
  title: "login",
  fields: [
    {
      type: "email",
      name: "email",
      className: "form-control",
      placeholder: "Enter email",
      icon: "fa fa-user",
    },
    {
      type: "password",
      name: "password",
      className: "form-control",
      placeholder: "Enter password",
      icon: "fa fa-key",
    },
  ],
};
const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const displayReducer = useSelector((state) => state);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState({ email: "", password: "" });
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const studentData = displayReducer.student.StudentsData;
    const teacherData = displayReducer.teacher.TeacherData;

    setAllData([...studentData, ...teacherData]);
  }, [displayReducer]);

  const displayError = useSelector((state) => state.login.error);

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormError({ email: "", password: "" });
    if (email === "" || password === "") {
      if (password === "") {
        setFormError((previousState) => ({
          ...previousState,
          password: "Password is required",
        }));
      }
      if (email === "") {
        setFormError((previousState) => ({
          ...previousState,
          email: "Email is required",
        }));
      }
      return;
    }
    // dispatch(loginSuccess(data));
    debugger
    const filteredData = allData.filter((emp) => {
      return emp.email === email && emp.password === password;
    });

  
    const type  = filteredData[0]?.type
    const data = { email, password,type};


    console.log("data",data);
    if (filteredData.length) {
      dispatch(loginSuccess(data));
      history.push("/dashboard");
      alert("okay");
      return;
    } else {
      dispatch(loginError("Wrong credentials"));
    }
  };

  const onChange = (e) => {
    if (e.target.value !== "") {
      setFormError({ ...formError, [e.target.name]: "" });
      dispatch(UpdateError());
    } else {
      setFormError({
        ...formError,
        [e.target.name]: `${e.target.name} is required`,
      });
    }
  };

  return (
    <div>
      <CommonLogin
        template={template}
        onSubmit={onSubmit}
        email={email}
        password={password}
        formError={formError}
        onChange={onChange}
        setEmail={setEmail}
        setPassword={setPassword}
        displayError={displayError}
      />
    </div>
  );
};

export default Login;
