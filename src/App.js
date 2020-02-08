import React from "react";
import { Switch, Route } from "react-router-dom";

// Grommet
import { Grommet, ResponsiveContext } from "grommet";

// Components
import Accounts from "./components/accounts";
import CreatePlanForm from "./components/CreatePlanForm";
import PlanList from "./components/PlanList";
import Plan from "./components/Plan";
import JoinPlan from "./components/JoinPlan";

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
        <Route exact path="/plans" component={PlanList} />
        <Route exact path="/plans/join" component={JoinPlan} />
        <Route path="/plans/:planID" component={Plan} />
      </Switch>
    </Grommet>
  );
}

export default App;
