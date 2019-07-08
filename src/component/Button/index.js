import React from "react";
import "./index.css";

const Button = props => {
  return (
    <div className={props.className}>
      <button className="my-btn" type="button">
        <img
          src={props.src}
          width={props.width}
          height={props.height}
          alt={props.alt}
        />
      </button>
    </div>
  );
};

export default Button;
