import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Start from "./pages/Start/Start";
import App from "./App";
import NotFound from "./pages/NotFound/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Start} />
      <Route exact path="/play/:numberOfCards" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
