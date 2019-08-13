import React from "react";

//components
import UserInfoCard from "../UserInfoCard";
import Card from "../Card";

class Dashboard extends React.Component {
  state = {};
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <UserInfoCard
              title="Title"
              subtitle="Subtitle"
              content={"Content goes here"}
            />
          </div>
          <div className="col">
            <div className="row">
              <Card />
            </div>
            <div className="row">
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
