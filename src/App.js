import React from "react";

// Router
import { Router } from "@reach/router";

//Style
import "./scss/main.scss";

//components
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

import Navbar from "../src/components/Navbar";
// import Sidebar from "./components/Sidebar";

class App extends React.Component {
  state = {};
  render() {
    return (
      <div className="main">
        <Navbar />
        <Router>
          <NotFound path="/404" default />
          <Home path="/" />
          <Login path="/login" />
        </Router>
      </div>
    );
  }
}

export default App;
