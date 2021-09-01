import React from "react";

const Form = ({
  template,
  onChange,
  setPassword,
  setEmail,
  email,
  password,
  formError,
  onSubmit,
  displayError,
}) => {
  const { title, fields } = template;
  const renderFileds = (fields) => {
    return fields.map((field) => {
      let { className, icon, name, placeholder, type } = field;

      switch (type) {
        case "text":
          return (
            <div key={name}>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className={icon} aria-hidden="true"></i>
                </span>
                <input
                  type="text"
                  name={name}
                  className={className}
                  placeholder={placeholder}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    onChange(e);
                  }}
                />
              </div>
            </div>
          );

        case "email":
          return (
            <div key={name}>
              <div>
                <span className="valid">{formError.email}</span>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className={icon} aria-hidden="true"></i>
                </span>
                <input
                  type="email"
                  name={name}
                  className={className}
                  placeholder={placeholder}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    onChange(e);
                  }}
                />
              </div>
            </div>
          );

        case "password":
          return (
            <div key={name}>
              <div>
                <span className="valid">{formError.password}</span>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className={icon} aria-hidden="true"></i>
                </span>
                <input
                  type="password"
                  name={name}
                  className={className}
                  placeholder={placeholder}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    onChange(e);
                  }}
                />
              </div>
            </div>
          );

        default:
          return (
            <div>
              <span className="red-text">Invalid fields</span>
            </div>
          );
      }
    });
  };

  return (
    <div className="container">
      <div className="w-50 mx-auto shadow p-5">
        <h2 className="login text-center mb-4 " style={{ color: "#42c5f5" }}>
          {title}&nbsp;
          <span className="icon">
            <i className="fa fa-user  fa-1x" aria-hidden="true"></i>
          </span>
        </h2> 
        <form onSubmit={(e) => onSubmit(e)}>
          {renderFileds(fields)}
         { displayError && <div>
            <h4 className="valid">{displayError}</h4>
          </div>}
          <div className="forgot-password text-right">
            <p>
              <a href="/forget-password"> Forget password </a>
            </p>
          </div>
          <div>
            <button type="submit" className="button btn btn-primary btn-block">
              <i className="fa fa-sign-in" aria-hidden="true"></i>&nbsp; Sign-In
            </button>
          </div>
          <br />
          <div className="sign-up text-right">
            <p>
              Create a new account ? <a href="/student-sign-up"> sign up? </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
