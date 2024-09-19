import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./container/Header";
import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";

const AuthLazy = lazy(() => import("./container/AuthApp"));
const MarketingLazy = lazy(() => import("./container/MarketingApp"));

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
        <Suspense fallback={<div>Loading . . .</div>}>
          <Switch>
            <Route path="/auth" component={AuthLazy} />
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};
