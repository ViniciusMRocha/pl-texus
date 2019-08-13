import React from "react";

//components
import Sidebar from "../../components/Sidebar";
import UserInfoCard from "../../components/UserInfoCard";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Sidebar />
        <div className="txt_heading-xlarge text-center mt-3">Texus</div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <UserInfoCard
                title="Title"
                subtitle="Subtitle"
                content={"Content goes here"}
              />
            </div>
            <div className="col-4">col 2</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
