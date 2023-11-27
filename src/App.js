import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import CardItem from "./components/CardItem/CardItem";
import Pagination from "./components/Pagination/Pagination";
import { createContext, useState } from "react";

export const TiresContext = createContext();

function App() {
  const [filteredCards, setFilteredCards] = useState([]);

  return (
    <div className="App">
      <TiresContext.Provider value={{ filteredCards, setFilteredCards }}>
        <Header />
        <Card />
        <Pagination />
        {/* <CardItem /> */}
      </TiresContext.Provider>
    </div>
  );
}

export default App;
