import React from "react";
import MarketingApp from "./container/MarketingApp";

export default () => {
  return (
    <div>
      <h1>Container App - {process.env.NODE_ENV}</h1> <hr /> <MarketingApp />
    </div>
  );
};
