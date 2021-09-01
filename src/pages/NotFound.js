import React from "react";
import image from "../image/banner_error_404.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container-fluid">
      <div className="mt-5 d-flex justify-content-center"> 
      <Link to="/"> <img src={image} alt="404 error page" /></Link>   
      </div>
    </div>
  );
};

export default NotFound;
