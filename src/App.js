import React from "react";

// Router
import { Router } from "@reach/router";

//Style
import "./scss/main.scss";

//components
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

class App extends React.Component {
  state = {};
  render() {
    return (
      <Router>
        <NotFound path="/404" default />
        <Home path="/login" />
        <Login path="/" />
      </Router>
    );
  }
}

export default App;
