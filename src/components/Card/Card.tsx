import React from "react";
import { Link } from "react-router-dom";
import Error from "../pages/Error/Error";
import "./card.sass"

export type CardItem = {
  img: string;
  title: string;
  price: number;
  season: string;
  description: string;
  id: number;
};

interface CardProps {
  currentItems: CardItem[];
}

const Card: React.FC<CardProps> = ({ currentItems }) => {
  return (
    <main>
      <div className="container">
        <div className="row">
          {currentItems.length ? (
            currentItems.map((card: CardItem, i: number) => (
              <div className="col" key={i}>
                <div className="card">
                  <img src={card.img} className="card-img-top" alt="tires" />
                  <ul className="list-group">
                    <li className="list-group-item">
                      <b>{card.title}</b> | <b>Цена:</b> <em>{card.price}</em>$
                    </li>
                    <li className="list-group-item">{card.season}</li>
                    <li className="list-group-item">{card.description}</li>
                  </ul>
                  <div className="card-body">
                    <Link to={`/tire/${card.id}`} className="card-link">
                      {card.title}
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Error />
          )}
        </div>
      </div>
    </main>
  );
};

export default Card;