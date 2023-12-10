import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import { TiresContext } from ".";
import { useState } from "react";
import ContactsPage from "./components/pages/ContactsPage";
import SinglePage from "./components/pages/SinglePage";

function App() {
  const [filteredCards, setFilteredCards] = useState([]);

  return (
    <TiresContext.Provider value={{ filteredCards, setFilteredCards }}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/contacts" component={ContactsPage} />
            <Route path="/tire/:id" component={SinglePage} />
          </Switch>
        </div>
      </Router>
    </TiresContext.Provider>
  );
}

export default App;
