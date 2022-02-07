import React from "react";
import "./App.css";
import Doc from "./components/documentbody"
import Switchmode from "./components/mode";
import Bulb from "./components/switchbulb"

const App = () => {
 return(
   <>
<Bulb/>
<Switchmode/>
<Doc/>
</>
  );
};
export default App;