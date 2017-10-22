import React from "react";
import { connect } from "react-redux";
import { selectNumber } from "../gameBoardActions";
const mapStateToProps = (state, props) => state.gameBoard.numbers[props.index];

const Number = props => {
  var numProps = {
    type: "button",
    className: "number",
    onClick: props.onClick,
    disabled: props.selected
  };
  return (
    <button {...numProps}>
      {props.number}
    </button>
  );
};

export default connect(mapStateToProps)(Number);
