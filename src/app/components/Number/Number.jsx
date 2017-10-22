import React from "react";

const Number = props => {
  var numProps = {
    type: "button",
    className: "number",
    //onClick: clicky(props.number.index),
    disabled: props.number.selected
  };
  return (
    <button {...numProps}>
      {props.number.number}
    </button>
  );
};

export default Number;
