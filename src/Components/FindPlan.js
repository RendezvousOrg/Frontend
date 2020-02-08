import React, { Component } from "react";
import { observer } from "mobx-react";

// Grommet
import { FormField, TextInput, Form, Button } from "grommet";

// Stores
import planStore from "../stores/planStore";

class PlanList extends Component {
  state = {
    planID: ""
  };
  handleChange = event => {
    this.setState({ planID: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    planStore.findPlan(this.state.planID);
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormField label="Find Plan">
          <TextInput
            placeholder="Enter ID"
            onChange={this.handleChange}
            name="planID"
            value={this.state.planID}
          />
        </FormField>
        <Button label="Find" type="submit" color="neutral-2" />
      </Form>
    );
  }
}

export default observer(PlanList);
