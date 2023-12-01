import React from "react";
import "./cardItem.sass";
import Header from "../Header/Header";
// import img from "../../resources/img/m55-right.jpg";

const CardItem = () => {
  return (
    <div>
      <Header />;
      <div className="container">
        <div className="card">
          <img className="card-img-top" src={"img"} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
