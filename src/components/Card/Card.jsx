import { useContext } from "react";
import "./card.sass";
import { TiresContext } from "../../App";

const Card = () => {
  const { filteredCards } = useContext(TiresContext);

  return (
    <main>
      <div className="container">
        <div className="row">
          {filteredCards.map((card, i) => (
            <div className="col" key={i}>
              <div className="card">
                <img src={card.img} className="card-img-top" alt="tires" />
                <ul className="list-group">
                  <li className="list-group-item">
                    <b> {card.title}</b> | <b>Цена:</b> <em>{card.price}</em>$
                  </li>
                  <li className="list-group-item">{card.description}</li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    {card.title}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Card;
