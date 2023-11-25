import "./card.sass";
import "../../sass/variables.sass";
import img from "../../resources/img/m55-right.jpg";
import data from "../../tiresArray";
import { useEffect, useState } from "react";

const Card = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
  }, []);

  return (
    <>
      {cards.map((card, i) => (
        <main key={i}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card">
                  <img src={img} className="card-img-top" alt="tires" />
                  <ul className="list-group">
                    <li className="list-group-item">{card.title}</li>
                    <li className="list-group-item">{card.price}</li>
                    <li className="list-group-item">{card.description}</li>
                  </ul>
                  <div className="card-body">
                    <a href="#" className="card-link">
                      {card.title}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      ))}
    </>
  );
};

export default Card;
