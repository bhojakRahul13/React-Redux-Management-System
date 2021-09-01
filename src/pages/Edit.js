import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../store/Actions/updataActions";

const Edit = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [allData, setAllData] = useState([]);

  const displayReducer = useSelector((state) => state);

  useEffect(() => {
    const studentData = displayReducer.student.StudentsData;
    const teacherData = displayReducer.teacher.TeacherData;

    setAllData([...studentData, ...teacherData]);
  }, [displayReducer]);

  const obj = allData.find((o) => o.id === id);

  useEffect(() => {
    if (obj && obj.id === id) {
      setName(obj.name);
      setEmail(obj.email);
      setPassword(obj.password);
      setType(obj.type);
    }
  }, [obj, id]);

  const [formError, setFormError] = useState({
    name: "",
    email: "",
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
    setFormError({ name: "", email: "" });
    if (name === "" || email === "") {
      if (name === "") {
        setFormError((previousState) => ({
          ...previousState,
          name: "Name is required",
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

    const data =  { id, name, email, password, type } ;
    dispatch(updateData(data));
    history.push("/dashboard"); 
  };

  return (
    <div className="container">
      <div className="w-50 mx-auto shadow p-5">
        <h2 className="reg-color text-center mb-4">Update Data &nbsp;</h2>

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

          <div>
            <span className="valid">{formError.type}</span>
          </div>

          <div>
            <button type="submit" className="btn btn-primary btn-block">
              <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp; Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
