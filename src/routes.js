import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import VerifyOrder from "./pages/VerifyOrder";

function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={() => <Landing {...props} />} />
        <Route path="/verify-order" render={() => <VerifyOrder {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
