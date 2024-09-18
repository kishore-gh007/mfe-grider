import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./container/MarketingApp";
import Header from "./container/Header";

export default () => {
  return (
    <BrowserRouter>
      <h1>Container App - {process.env.NODE_ENV}</h1>
      <hr />
      <Header />
      <MarketingApp />
    </BrowserRouter>
  );
};
