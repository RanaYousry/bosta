import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./fonts/Cairo/Cairo-Black.ttf";
import "./fonts/Cairo/Cairo-Bold.ttf";
import "./fonts/Cairo/Cairo-Regular.ttf";
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./store/data-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataContextProvider>
);
