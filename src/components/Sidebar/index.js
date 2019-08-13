import React from "react";

import "./styles.scss";

class Sidebar extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div className="sidenav">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
