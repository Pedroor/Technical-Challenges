import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./src/styles/theme";

function App() {
  return <ThemeProvider theme={theme} />;
}

export default App;
