import React, { Component } from "react";

// Grommet
import {
  Main,
  Box,
  Grid,
  FormField,
  TextInput,
  Heading,
  Button
} from "grommet";

// Axios
import axios from "axios";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  login = async () => {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/login/",
        this.state
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
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
        <Grid
          rows={rows}
          columns={columns}
          gap="small"
          areas={areas}
          margin="medium"
        >
          <Box gridArea="heading">
            <Heading level={1}>Login here</Heading>
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
            <Button label="Login" onClick={this.login} color="neutral-2" />
          </Box>
        </Grid>
      </Main>
    );
  }
}

export default LoginForm;
