import React, { useState } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globlystyle";
import { lightTheme, darkTheme } from "./theme"

const Switchmode = () => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <div className="App">
          <button onClick={themeToggler}>Switch Theme</button>
        </div>
      </>
    </ThemeProvider>
  );
};
export default Switchmode;
    