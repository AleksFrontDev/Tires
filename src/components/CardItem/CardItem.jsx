import React, { useEffect, useState } from "react";
import "./cardItem.sass";
import Header from "../Header/Header";
import data from "../../tiresArray"; // Поправьте путь к вашим данным
import { useParams } from "react-router-dom";
import Error from "../pages/404/404";

const CardItem = () => {
  const { id } = useParams();
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const card = data.find((card) => card.id === parseInt(id));
    setSelectedCard(card);
  }, [id]);

  if (!selectedCard) {
    return (
      <div>
        <Error />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="card card-item">
          <div className="card-body">
            <img
              id={selectedCard.id}
              src={selectedCard.img}
              alt="tire"
              style={{ width: 300, height: 300 }}
            />
            <h5 className="card-title">{selectedCard.title}</h5>
            <p className="card-text">{selectedCard.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
