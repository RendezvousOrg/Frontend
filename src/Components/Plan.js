import React, { Component } from "react";

// Grommet
import {
  Main,
  Box,
  Grid,
  FormField,
  TextInput,
  TextArea,
  Button,
  List,
  Heading,
  Text,
  Paragraph
} from "grommet";

// Axios
import axios from "axios";

class Plan extends Component {
  state = {
    creator: "",
    location: "",
    datetime: "",
    activity: ""
  };
  render() {
    const columns = ["auto"];
    const rows = ["auto", "auto", "auto", "auto", "auto"];
    const areas = [
      { name: "people", start: [0, 0], end: [0, 0] },
      { name: "datetime", start: [0, 1], end: [0, 1] },
      { name: "activity", start: [0, 2], end: [0, 2] },
      { name: "location", start: [0, 3], end: [0, 3] },
      { name: "comments", start: [0, 4], end: [0, 4] }
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
          <Box gridArea="people">
            <Heading level={2}>People</Heading>
            <List
              primaryKey="name"
              border={true}
              background={["light-1", "light-4"]}
              data={[
                { name: "Alan" },
                { name: "Bryan" },
                { name: "Chris" },
                { name: "Eric" }
              ]}
            />
          </Box>
          <Box gridArea="datetime">
            <Heading level={3}>Saturday, 3pm</Heading>
          </Box>
          <Box gridArea="activity">
            <Paragraph>
              Coffee date. Maybe some work. Plus I guess review the coffee place
              for the blog.
            </Paragraph>
          </Box>
          <Box gridArea="location">
            <Heading level={3}>Starbucks, Salmiya</Heading>
          </Box>
          <Box gridArea="comments">...</Box>
        </Grid>
      </Main>
    );
  }
}

export default Plan;
