import React, { Component } from "react";
import { observer } from "mobx-react";

import planStore from "../stores/planStore";

class PlanList extends Component {
  render() {
    const plans = planStore.plans.map(plan => (
      <>
        {plan.datetime} at {plan.location}
      </>
    ));

    return <div>{plans}</div>;
  }
}

export default observer(PlanList);
