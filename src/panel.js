import React, { useState } from "react";

import Toolbar from "./components/toolbar";
import Main from "./components/main";

const Panel = (props) => {
  return (
    <div>
      <Toolbar />
      <Main />
    </div>
  );
}

export default Panel;