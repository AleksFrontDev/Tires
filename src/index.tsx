import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createContext, Context } from 'react';


interface Cards {
  id:number;
  title:string;
  rise:boolean;
  seezon:string;
  img:string;
  price:number;
  description:string
}



export interface TiresContextData {
  value:string
  filteredCards:Cards[],
}

const TiresContext: Context<TiresContextData> = createContext<TiresContextData>({
  value: 'defaultValue',
  filteredCards: []
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
