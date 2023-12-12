import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createContext, Context } from 'react';

type MyStateType = {
  value: string;
};

export interface TiresContextData {
  value: string;
  filteredCards: MyStateType[]; // Add the property to the context data
  setFilteredCards: React.Dispatch<React.SetStateAction<MyStateType[]>>;
}

const TiresContext: Context<TiresContextData> = createContext<TiresContextData>({
  value: 'defaultValue',
  filteredCards: [], // Set an initial empty array
  setFilteredCards: () => {}, // Provide an empty setter function
});


const RootComponent = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootComponent />);


export default TiresContext
