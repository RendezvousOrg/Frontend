import React, { Component } from "react";

// Grommet
import { Main, Box, Grid } from "grommet";

// Components
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

class Accounts extends Component {
  render() {
    const columns = {
      small: ["medium"],
      large: ["auto", "auto"]
    };
    const rows = {
      small: ["auto", "auto"],
      large: ["auto"]
    };
    const areas = {
      small: [
        { name: "registerform", start: [0, 0], end: [0, 0] },
        { name: "loginform", start: [0, 1], end: [0, 1] }
      ],
      large: [
        { name: "registerform", start: [0, 0], end: [0, 0] },
        { name: "loginform", start: [1, 0], end: [1, 0] }
      ]
    };
    return (
      <Main pad="large" align="center">
        <Grid
          rows={rows[this.props.size]}
          columns={columns[this.props.size]}
          gap="small"
          areas={areas[this.props.size]}
          margin="medium"
        >
          <Box gridArea="registerform">
            <RegisterForm />
          </Box>
          <Box gridArea="loginform">
            <LoginForm />
          </Box>
        </Grid>
      </Main>
    );
  }
}

export default Accounts;
