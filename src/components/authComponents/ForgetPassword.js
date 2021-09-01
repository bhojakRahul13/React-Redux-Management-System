import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const ForgetPassword = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [allData, setAllData] = useState([]);

  const displayReducer = useSelector((state) => state);
  

  useEffect(() => {
    const studentData = displayReducer.student.StudentsData;
    const teacherData = displayReducer.teacher.TeacherData;

    setAllData([...studentData, ...teacherData]);
  }, [displayReducer]);



  
  const [formError, setFormError] = useState({ email: "", password: "" });

  const onChange = async (e) => {
    if (e.target.value !== "") {
      setFormError({ ...formError, [e.target.name]: "" });
    } else {
      setFormError({
        ...formError,
        [e.target.name]: `${e.target.name} is required`,
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormError({ email: "" });

    if (email === "") {
      setFormError((previousState) => ({
        ...previousState,
        email: "Email is required *",
      }));
      return;
    }

    const filteredData = allData.filter((emp) => {
      return emp.email === email;
    });

    if (filteredData.length) {
      history.push({
        pathname: "/new-password",
        search: `${filteredData[0].id}`,
      });
      return;
    } else {
      setFormError((previousState) => ({
        ...previousState,
        email: "Email address not found",
      }));
      return;
    }
  };
  return (
    <div className="container" style={{ marginTop: 65 }}>
      <div className="w-50 mx-auto shadow  p-5">
        <h2 className="forget-password text-center mb-4 ">
          Forget Password &nbsp;
        </h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div>
            <span className="valid">{formError.email}</span>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </span>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your correct email address  to change password"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                onChange(e);
              }}
            />
          </div>{" "}
          <div>
            <button type="submit" className="button btn btn-primary btn-block">
              <i className="fa fa-sign-in" aria-hidden="true"></i>&nbsp;Submit
            </button>
          </div>{" "}
          <br />
          <div className="sign-up text-right">
            <p>
              Create a new account ? <a href="/dashboard">sign up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;