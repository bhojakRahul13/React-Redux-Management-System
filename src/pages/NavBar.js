import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

const NavBar = () => {
  const auth = useSelector((state) => state.login);
  const isAuthenticated = auth.isAuthenticated;
  const current = auth.loggedUser;

  return (
    <div> 
      <Navbar
        bg="primary"
        variant="dark"
        className="d-flex justify-content-between"
      >
        <Navbar.Brand href="/">Student Managemet System</Navbar.Brand>
        <Nav className="d-flex align-items-center">
          <span style={{ color: "white" }}>
            <i className="fa fa-user mr-2" aria-hidden="true" />

            <span>{isAuthenticated === true ? current : "No user Login"}</span>
          </span>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
