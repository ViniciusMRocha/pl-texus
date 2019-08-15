import React from "react";

//components
import Sidebar from "../../components/Sidebar";
import Dashboard from "../../components/Dashboard";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Sidebar />
        <Dashboard />
      </div>
    );
  }
}

export default Home;
