import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Panel from "./panel";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Panel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
