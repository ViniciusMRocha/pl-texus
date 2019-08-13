import React from "react";

//components
import LoginCard from "../../components/LoginCard";
import Sidebar from "../../components/Sidebar";

class Login extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Sidebar />
        <LoginCard />
      </div>
    );
  }
}

export default Login;
