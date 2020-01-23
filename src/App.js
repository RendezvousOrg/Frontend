import React from "react";

// Grommet
import { Grommet, ResponsiveContext } from "grommet";

// Components
import Accounts from "./Components/Accounts";
function App() {
  return (
    <Grommet full>
      <ResponsiveContext.Consumer>
        {size => <Accounts size={size} />}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
  // return (
  //   <Grommet full>
  //     <ResponsiveContext.Consumer>
  //       {size => <CreatePlanForm size={size} />}
  //     </ResponsiveContext.Consumer>
  //   </Grommet>
  // );
}

export default App;
