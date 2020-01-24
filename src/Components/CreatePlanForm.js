import React, { Component } from "react";

// Grommet
import {
  Main,
  Box,
  Grid,
  FormField,
  TextInput,
  TextArea,
  Button
} from "grommet";

// Axios
import axios from "axios";

class CreatePlanForm extends Component {
  state = {
    location: "",
    datetime: "",
    activity: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  create = async () => {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/plans/",
        this.state
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    // columns, rows and areas are for Grid with a known number of contents / boxes.

    // If the size is small, we only see 1 column
    // If the size is medium, we only see 2 columns
    // If the size is either large or xlarge, we see 4 columns
    const columns = {
      small: ["auto"],
      medium: ["auto", "auto"],
      large: ["auto", "auto", "auto", "auto"],
      xlarge: ["auto", "auto", "auto", "auto"]
    };

    // If the size is small, we have 5 rows
    // If the size is medium, large, or xlarge we have 4 rows
    const rows = {
      small: ["xsmall", "xsmall", "xsmall", "xsmall"],
      medium: ["xsmall", "xsmall", "xsmall"],
      large: ["xsmall", "xsmall", "xsmall"],
      xlarge: ["xsmall", "xsmall", "xsmall"]
    };
    // Set the different areas you need for every size
    const fixedGridAreas = {
      small: [
        { name: "location", start: [0, 0], end: [0, 0] },
        { name: "datetime", start: [0, 1], end: [0, 1] },
        { name: "activity", start: [0, 2], end: [0, 2] },
        { name: "createButton", start: [0, 3], end: [0, 3] }
      ],
      medium: [
        { name: "location", start: [0, 0], end: [0, 0] },
        { name: "datetime", start: [1, 0], end: [1, 0] },
        { name: "activity", start: [0, 1], end: [1, 1] },
        { name: "createButton", start: [0, 2], end: [1, 2] }
      ],
      large: [
        { name: "location", start: [0, 0], end: [1, 0] },
        { name: "datetime", start: [2, 0], end: [3, 0] },
        { name: "activity", start: [0, 1], end: [3, 1] },
        { name: "createButton", start: [1, 2], end: [2, 2] }
      ],
      xlarge: [
        { name: "location", start: [0, 0], end: [1, 0] },
        { name: "datetime", start: [2, 0], end: [3, 0] },
        { name: "activity", start: [0, 1], end: [3, 1] },
        { name: "createButton", start: [1, 2], end: [2, 2] }
      ]
    };
    return (
      <Main pad="large" align="center">
        <Grid
          rows={rows[this.props.size]}
          columns={columns[this.props.size]}
          gap="small"
          areas={fixedGridAreas[this.props.size]}
          margin="medium"
        >
          <Box gridArea="location">
            <FormField label="Location">
              <TextInput
                placeholder="type here"
                onChange={this.handleChange}
                name="location"
                value={this.state.location}
              />
            </FormField>
          </Box>
          <Box gridArea="datetime">
            <FormField label="Date & Time">
              <TextInput
                placeholder="type here"
                onChange={this.handleChange}
                name="datetime"
                value={this.state.datetime}
              />
            </FormField>
          </Box>
          <Box gridArea="activity">
            <FormField label="Activity">
              <TextArea
                placeholder="type here"
                onChange={this.handleChange}
                name="activity"
                value={this.state.activity}
              />
            </FormField>
          </Box>
          <Box gridArea="createButton">
            <Button label="Create" onClick={this.create} color="neutral-2" />
          </Box>
        </Grid>
      </Main>
    );
  }
}

export default CreatePlanForm;
