import React from "react";
import "./error.sass"

const Error = () => {
  return (
    <div className="container">
    <div className = "error" >
      <title>Произошла ошибка, попробуйте позже</title>
      <img
        src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg"
        alt="error"
      ></img>
    </div>
    </div>
  );
};

export default Error;