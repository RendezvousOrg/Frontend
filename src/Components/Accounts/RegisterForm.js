import React, { Component } from "react";

// Grommet
import {
  Main,
  Box,
  Grid,
  FormField,
  TextInput,
  Heading,
  Button,
  Form
} from "grommet";

import authStore from "../../stores/authStore";

class RegisterForm extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    authStore.register(this.state);
  };
  render() {
    const columns = ["auto"];
    const rows = ["auto", "auto", "auto", "auto"];
    const areas = [
      { name: "heading", start: [0, 0], end: [0, 0] },
      { name: "username", start: [0, 1], end: [0, 1] },
      { name: "password", start: [0, 2], end: [0, 2] },
      { name: "button", start: [0, 3], end: [0, 3] }
    ];
    return (
      <Main pad="large" align="center">
        <Form onSubmit={this.handleSubmit}>
          <Grid
            rows={rows}
            columns={columns}
            gap="small"
            areas={areas}
            margin="medium"
          >
            <Box gridArea="heading">
              <Heading level={1}>Register here</Heading>
            </Box>
            <Box gridArea="username">
              <FormField label="Username">
                <TextInput
                  placeholder="type here"
                  onChange={this.handleChange}
                  name="username"
                  value={this.state.username}
                />
              </FormField>
            </Box>
            <Box gridArea="password">
              <FormField label="Password">
                <TextInput
                  placeholder="type here"
                  onChange={this.handleChange}
                  name="password"
                  value={this.state.password}
                  type="password"
                />
              </FormField>
            </Box>
            <Box gridArea="button">
              <Button label="Register" color="neutral-2" type="submit" />
            </Box>
          </Grid>
        </Form>
      </Main>
    );
  }
}

export default RegisterForm;
