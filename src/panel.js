import React, { useState } from "react";

import Toolbar from "./components/toolbar";
import Sidebar from "./components/sidebar";
import Main from "./components/main";

const Panel = (props) => {
  return (
    <div>
      <Toolbar />
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar />
        <Main />
      </div>      
    </div>
  );
}

export default Panel;