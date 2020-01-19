import React from "react";

// Grommet
import { Grommet } from "grommet";

// Components
import { ResponsiveContext } from "grommet";
import CreatePlanForm from "./Components/CreatePlanForm";

function App() {
  return (
    <Grommet full>
      <ResponsiveContext.Consumer>
        {size => <CreatePlanForm size={size} />}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
