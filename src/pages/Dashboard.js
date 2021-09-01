import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./dashboard.css";
import { logout } from "../store/Actions/LoginActions";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import CommonTable from "../common/CommonTable";
import { Modal } from "react-bootstrap";
import { addSignUpTeacher } from "../store/Actions/SingUpDataActions";
const { v4: uuid } = require("uuid");

const tabletemplate = {
  titleStudent: "Student Details",
  titleTeacher: "Teacher Details",
  headerData: [
    { title: "Name" },
    { title: "Email" },
    { title: "Password" },
    { title: "Actions" },
  ],
};

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const id = uuid();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loginState = useSelector((state) => state.login); //Login data
  const currentLogin = loginState.loginUser; //get current login user Data
  const studentData = useSelector((state) => state.student.StudentsData); //all Student Data
  const TeacherData = useSelector((state) => state.teacher.TeacherData); //all Teacher Data
  const AdminData = useSelector((state) => state.admin.AdminData); //all Teacher Data

  console.log("currentLogin", currentLogin);
  console.log("studentData", studentData);
  console.log("TeacherData", TeacherData);
  console.log("AdminData", AdminData);

  const getStudentById = studentData.filter((data)=>{
      return data.email === currentLogin.email;
  }) 

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
    dispatch(addSignUpTeacher(data));
    setShow(false);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container-fluid p-0">
      <div className="navigation">
        <ul>
          <li>
            <Link to="/dashboard">
              <span className="icon">
                <i className="fa fa-home" aria-hidden="true"></i>
              </span>
              <span className="title">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="#" onClick={handleShow}>
              <span className="icon">
                <i className="fa fa-users" aria-hidden="true"></i>
              </span>
              <span className="title">Add Teachers</span>
            </Link>
          </li>

          <li>
            <Link to="/student-sign-up">
              <span className="icon">
                <i className="fa fa-cog" aria-hidden="true"></i>
              </span>
              <span className="title">Add Student</span>
            </Link>
          </li>
          <li>
            <Link to="#">
              <span className="icon">
                <i className="fa fa-server" aria-hidden="true"></i>
              </span>
              <span className="title">Add Classes</span>
            </Link>
          </li>

      <li>
            <Link to="#">
              <span className="icon">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
              <span className="title">Password</span>
            </Link>
          </li>

          <li>
            <Link to="">
              <span className="icon">
                <i className="fa fa-sign-out" aria-hidden="true"></i>
              </span>
              <span
                onClick={() => {
                  dispatch(logout({}));
                  history.push("/");
                }}
                className="title"
              >
                Sign Out
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="main">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Teachers</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                  Add Teacher
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>

        <h3> {currentLogin.type ? currentLogin.type : ""}</h3>

        {currentLogin.type === "Admin" ? (
          <Container className="ml-5">
            <CommonTable
              tabletemplate={tabletemplate}
              title="student"
              Data={studentData}
              Admin
            />
            <br />
            <CommonTable
              tabletemplate={tabletemplate}
              title="teacher"
              Data={TeacherData}
              Admin
            />
          </Container>
        ) : (
          ""
        )}
        {currentLogin.type === "Student" ? (
          <Container className="ml-5">
            <CommonTable
              tabletemplate={tabletemplate}
              title="student"
              Data={getStudentById}
              Student
            />
          </Container>
        ) : (
          ""
        )}

        {currentLogin.type === "Teacher" ?  <Container className="ml-5">
            <CommonTable
              tabletemplate={tabletemplate}
              title="student"
              Data={studentData}
              checkBox
              Teacher
            />
          </Container>  : ""}
      </div>
    </div>
  );
};

export default Dashboard;
