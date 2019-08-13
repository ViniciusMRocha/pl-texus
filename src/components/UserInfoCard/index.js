import React from "react";

class UserInfoCard extends React.Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="card h-100">
          <div class="card-body py-4">
            <div class="card-title">{this.props.title}</div>
            <div class="card-subtitle mb-2 text-muted">
              {this.props.subtitle}
            </div>
            <div class="card-text">{this.props.content}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfoCard;
