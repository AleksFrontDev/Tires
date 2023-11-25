import "./card.sass";
import img from "../../resources/img/m55-right.jpg";

const Card = () => {
  return (
    <>
      <main>
        <div className="container">
          <div className="text-center">
            <div className="row row-cols-4">
              <div className="col">
                <div className="card">
                  <img src={img} className="card-img-top" alt="tires" />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">title</li>
                    <li className="list-group-item">price</li>
                    <li className="list-group-item">seezon</li>
                  </ul>
                  <div className="card-body">
                    <a href="#" className="card-link">
                      Card link
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={img} className="card-img-top" alt="tires" />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">title</li>
                    <li className="list-group-item">price</li>
                    <li className="list-group-item">seezon</li>
                  </ul>
                  <div className="card-body">
                    <a href="#" className="card-link">
                      Card link
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={img} className="card-img-top" alt="tires" />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">title</li>
                    <li className="list-group-item">price</li>
                    <li className="list-group-item">seezon</li>
                  </ul>
                  <div className="card-body">
                    <a href="#" className="card-link">
                      Card link
                    </a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src={img} class="card-img-top" alt="tires" />
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">title</li>
                    <li class="list-group-item">price</li>
                    <li class="list-group-item">seezon</li>
                  </ul>
                  <div class="card-body">
                    <a href="#" className="card-link">
                      Card link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Card;
