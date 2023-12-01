import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createContext } from "react";

export const TiresContext = createContext();

const RootComponent = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootComponent />);
