import React from "react";

//styles
import "./styles.scss";

const Button = props => {
  return (
    <div>
      <button
        className={`btn btn-primary btn-block txt_pillshape nxt_body-small px-4 py-2 ${
          props.buttonType
        }`}
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default Button;
