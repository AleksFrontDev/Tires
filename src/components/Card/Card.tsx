import "./card.sass";
import { Link } from "react-router-dom";
import Error from "../pages/Error/Error";

type Cards ={
  img:string
  title:string
  price:number
  seezon:string
  description:string
  id:number
}

type CardItems = {
  img:string
  title:string
  price:number
  seezon:string
  description:string
  id:number
}


const Card = ({ currentItems}: {currentItems:Array<CardItems>}) => {
  return (
    <main>
      <div className="container">
        <div className="row">
          {currentItems ? (
            currentItems.map((card:Cards, i:number)=> (
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
