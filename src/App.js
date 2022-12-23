import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';

import Panel from "./panel";
require('./translate');

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
const theme = createTheme({
  direction: 'rtl',
});

function App() {

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Panel />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
