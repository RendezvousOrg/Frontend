import React, { Component } from "react";

import { useParams } from "react-router-dom";

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

// Stores
import planStore from "../stores/planStore";

export default function Plan() {
  const { planID } = useParams();
  const plan = planStore.plans.find(plan => plan.id == planID);
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
          <Heading level={3}>{plan.datetime}</Heading>
        </Box>
        <Box gridArea="activity">
          <Paragraph>{plan.activity}</Paragraph>
        </Box>
        <Box gridArea="location">
          <Heading level={3}>{plan.location}</Heading>
        </Box>
        <Box gridArea="comments">...</Box>
      </Grid>
    </Main>
  );
}
