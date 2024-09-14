import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

//todo можем рендер убрать чтоб отдавать микрофронт на хост без лишнего рендера
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
