import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSignUpTeacher } from "../../store/Actions/SingUpDataActions";
import { useHistory } from "react-router-dom";
const { v4: uuid } = require("uuid");

const TeacherSignUp = () => {
  const id = uuid();
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    password: "",
  });

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
    setFormError({ name: "", email: "", password: "" });
    if (name === "" || email === "" || password === "") {
      if (name === "") {
        setFormError((previousState) => ({
          ...previousState,
          name: "Name is required",
        }));
      }
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

    const data = { name, email, password, id, type: "Teacher" };
    console.log("data",data);
    dispatch(addSignUpTeacher(data));
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-50 mx-auto shadow p-5">
        <h2 className="reg-color text-center mb-4">
          Teacher Registration &nbsp;
          <span className="icon">
            <i className="fa fa-user  fa-1x" aria-hidden="true"></i>
          </span>
        </h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div>
            <span className="valid">{formError.name}</span>
          </div>
          <div className="input-group mb-3">
            <span
              className="input-group-text"
              id="basic-addon1"
              style={{ width: 42 }}
            >
              <i className="fa fa-user " aria-hidden="true"></i>{" "}
            </span>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                onChange(e);
              }}
            />
          </div>
          <div>
            {" "}
            <span className="valid">{formError.email}</span>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-envelope  " aria-hidden="true"></i>
            </span>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                onChange(e);
              }}
            />
          </div>
          <div>
            <span className="valid">{formError.password}</span>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-key" aria-hidden="true"></i>
            </span>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                onChange(e);
              }}
            />
          </div>
          <div>
            <span className="valid">{formError.type}</span>
          </div>

          <div>
            <button type="submit" className="btn btn-primary btn-block">
              <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;
              Sign-Up
            </button>
          </div>
          <br />
          <div>
            <p className="forgot-password text-right">
              Already have an account ? <a href="/"> sign in? </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherSignUp;
