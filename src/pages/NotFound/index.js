import React from "react";

// media
import img404 from "./media/img404.svg";

class NotFound extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <h1>404 Page</h1>
        <img className="img-fluid p-5" src={img404} alt="404 Page" />
      </div>
    );
  }
}

export default NotFound;
