import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { passwordReset } from "../../store/Actions/SingUpDataActions";

const NewPassword = () => {
  const location = useLocation();
  let history = useHistory();
  const dispatch = useDispatch();

  const id = location.search.substring(1);
  const [password, setPassword] = useState("");

  const [formError, setFormError] = useState({
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
    setFormError({ password: "" });

    if (password === "") {
      setFormError((previousState) => ({
        ...previousState,
        password: "Password is required",
      }));
      return;
    }

    const data = { password, id };
    dispatch(passwordReset(data));
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-50 mx-auto shadow p-5">
        <h2 className="login text-center mb-4 " style={{ color: "#42c5f5" }}>
          New Password &nbsp;
          <span className="icon">
            <i className="fa fa-key  fa-1x" aria-hidden="true"></i>
          </span>
        </h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div>
            <span className="valid">{formError.password}</span>
          </div>
          <div>
            <span className="valid">{formError.confirmPassword}</span>
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
              autoComplete="off"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                onChange(e);
              }}
            />
          </div>
          <div>
            <button type="submit" className="button btn btn-primary btn-block">
              <i className="fa fa-sign-in" aria-hidden="true"></i>&nbsp; Reset
              Password
            </button>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
};

export default NewPassword;