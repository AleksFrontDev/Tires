import React from "react";
import "./contacts.sass";

const Contacts = () => {
  return (
    <div className="container">
      <div className="contacts">
        <img
          src="https://cdn11.bigcommerce.com/s-22e4x1yotr/images/stencil/1280x1280/uploaded_images/pt-blog-radial-tires-480x297.jpg?t=1687871463"
          alt="tires"
          style={{ width: "650px", height: "450px" }}
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
