import "./card.sass";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Error from "../pages/404/404";

const Card = ({ currentItems }) => {
  return (
    <main>
      <div className="container">
        <div className="row">
          {currentItems ? (
            currentItems.map((card, i) => (
              <div className="col" key={i}>
                <div className="card">
                  <img src={card.img} className="card-img-top" alt="tires" />
                  <ul className="list-group">
                    <li className="list-group-item">
                      <b> {card.title}</b> | <b>Цена:</b> <em>{card.price}</em>$
                    </li>
                    <li className="list-group-item">{card.seezon}</li>

                    <li className="list-group-item">{card.description}</li>
                  </ul>
                  <div className="card-body">
                    <Link to={`/comics/${card.id}`} className="card-link">
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
