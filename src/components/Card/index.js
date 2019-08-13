import React from "react";

class Card extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <div className="card h-100">
          <div className="card-body py-4">
            <div className="card-title">Card Title</div>
            <div className="card-text">Card Text</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
