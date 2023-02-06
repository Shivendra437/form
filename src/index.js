import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import {contextApi} from './Context'
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement)
// const mydata=useContext(contextApi);
root.render(
  
  <StrictMode>
    <App />
  </StrictMode>
);
