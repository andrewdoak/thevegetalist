import React from "react";
import ReactDOM from "react-dom/client";
// Had to update import after moving App.jsx into /pages/App
import App from "./pages/App/App.jsx";
import "./index.css";
// Router is an alias for BrowerRouter
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

/* 
ROUTER, IMPORTANT
Wrap App in Router (alias) component
If you go to your page and inspect, you'll see the Router wrapping the App in React Dev Inspector
*/
