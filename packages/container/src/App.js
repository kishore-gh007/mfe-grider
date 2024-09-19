import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./container/MarketingApp";
import Header from "./container/Header";
import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";

export default () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <h1>Container App - {process.env.NODE_ENV}</h1>
        <hr />
        <Header />
        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>
  );
};
