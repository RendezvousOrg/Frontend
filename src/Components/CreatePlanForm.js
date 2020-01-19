import React, { Component } from "react";

class CreatePlanForm extends Component {
  state = {};
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  create = () => {
    console.log(this.state);
  };
  render() {
    return (
      <>
        <label>
          Name:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <label>
          Location:
          <input type="text" name="location" onChange={this.handleChange} />
        </label>
        <label>
          Date & Time:
          <input type="text" name="datetime" onChange={this.handleChange} />
        </label>
        <label>
          Activity:
          <textarea type="text" name="activity" onChange={this.handleChange} />
        </label>
        <button onClick={this.create}>Create</button>
      </>
    );
  }
}

export default CreatePlanForm;
