// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<App />);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { AppProvider } from "./components/Context";
// Use the correct method name and import from react-dom/client
const root = createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
