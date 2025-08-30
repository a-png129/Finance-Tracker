import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="p-2 mb-8 bg-blue-500 hover:bg-blue-600 text-white flex justify-center rounded"
    >
      {props.label}
    </button>
  );
};

export default Button;
