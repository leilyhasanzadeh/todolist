import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import AddTask from "./views/task";
import TaskList from "./views/taskList";
import Toolbar from "./components/toolbar";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
require("./translate");

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const theme = createTheme({
  direction: "rtl",
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Toolbar />
          <div className="flex h-[calc(100vh-4rem)]">
            <Sidebar />
            <Main>
              <Routes>
                <Route path="/add" element={<AddTask />} />
                <Route path="/edit/:index" element={<AddTask />} />
                <Route path="/inbox" element={<TaskList />} />
              </Routes>
            </Main>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
