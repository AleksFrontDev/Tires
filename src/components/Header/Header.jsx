import Search from "../Search/Search";
import "./header.sass";

const Header = () => {
  const navStyle = {
    backgroundColor: "#e3f2fd",
  };
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg" style={navStyle}>
          <div className="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <h1>Tires</h1>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Main
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Store
                  </a>
                </li>
              </ul>
              <Search />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
