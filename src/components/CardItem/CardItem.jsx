import React from "react";
import "./cardItem.sass";
import Header from "../Header/Header";
import img from "../../resources/img/pile-of-tires-on-white-background-royalty-free-image-672151801-1561751929.jpg";

const CardItem = () => {
  return (
    <div>
      <Header />;
      <div className="container">
        <div className="card">
          <div className="card-body">
            <img src={img} alt="tires" style={{ width: 200, height: 200 }} />

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
