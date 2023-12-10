import { useEffect, useState } from "react";
import "./cardItem.sass";
import Header from "../Header/Header";
import data from "../../tiresArray"; 
import { useParams } from "react-router-dom";
import Error from "../pages/Error/Error";
import { Tires } from "../../tiresArray";

interface ParamTypes {
  id: string;
}

const CardItem = () => {
  const { id } = useParams<ParamTypes>();
  const [selectedCard, setSelectedCard] = useState<Tires | null>(null);

  useEffect(() => {
    if (data) {
      const card = data.find((card) => card.id === parseInt(id));
      setSelectedCard(card || null);
    }
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
              id={selectedCard.id.toString()}
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