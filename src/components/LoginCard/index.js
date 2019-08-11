import React from "react";

//components
import Button from "../Button";

const LoginCard = props => {
  return (
    <div className="container text-center py-2 border">
      <div className="txt_heading-xlarge mb-5">Hello World</div>
      <Button buttonText="Log In" />
      <a href="/404" className="txt_body-xsmall">
        Sign up
      </a>
      <span> | </span>
      <a href="/404" className="txt_body-xsmall">
        Forgot Password
      </a>
    </div>
  );
};

export default LoginCard;
