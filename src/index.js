import React from "react";
import ReactDOM from "react-dom/client";
// react-router library installed
import { BrowserRouter } from "react-router-dom";
// react-redux library installed - that connects react library with redux library

import { Provider } from "react-redux";

import App from "./App";

import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
