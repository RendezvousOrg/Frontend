import React from "react";
import { Switch, Route } from "react-router-dom";

// Grommet
import { Grommet, ResponsiveContext } from "grommet";

// Components
import Accounts from "./components/accounts";
import CreatePlanForm from "./components/CreatePlanForm";

function App() {
  return (
    <Grommet full>
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <ResponsiveContext.Consumer>
              {size => <Accounts {...props} size={size} />}
            </ResponsiveContext.Consumer>
          )}
        />
        <Route
          path="/plans/create"
          render={props => (
            <ResponsiveContext.Consumer>
              {size => <CreatePlanForm {...props} size={size} />}
            </ResponsiveContext.Consumer>
          )}
        />
      </Switch>
    </Grommet>
  );
}

export default App;
