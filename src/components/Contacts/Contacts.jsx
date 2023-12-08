import React from "react";
import "./contacts.sass";
import img from "../../resources/img/pile-of-tires-on-white-background-royalty-free-image-672151801-1561751929.jpg";

const Contacts = () => {
  return (
    <div className="container">
      <div className="contacts">
        <img
          src={img}
          alt="tires"
          style={{ width: "500px", height: "500px" }}
        />
        <p>
          Email:{" "}
          <span>
            <em>tires+rus@example.com</em>
          </span>
        </p>
        <p>
          Phone:{" "}
          <span>
            <em>+1234567890</em>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contacts;
