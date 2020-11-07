import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle, theme, ThemeProvider } from "shared/theme";
import App from "./App";

ReactDOM.render(
  <BrowserRouter basename="/">
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <GlobalStyle />
        <App />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);
