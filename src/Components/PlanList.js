import React, { Component } from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

// Grommet
import { Main, Heading } from "grommet";

import planStore from "../stores/planStore";

class PlanList extends Component {
  render() {
    const plans = planStore.plans.map(plan => (
      <Link to={`/plans/${plan.id}`} key={plan.id}>
        <Heading level={3}>
          {plan.datetime} at {plan.location}
        </Heading>
      </Link>
    ));

    return (
      <Main pad="large" align="center">
        {plans}
      </Main>
    );
  }
}

export default observer(PlanList);
