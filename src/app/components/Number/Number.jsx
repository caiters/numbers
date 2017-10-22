import React from "react";
import { connect } from "react-redux";
import { selectNumber } from "../../modules/gameboard/gameBoardActions";

const mapStateToProps = (state, props) => state.gameBoard.numbers[props.index];
const mapDispatchToProps = (dispatch, props) => ({
  click: function() {
    console.log(this);
    console.log(props);
    dispatch(selectNumber(props.index));
  }
});

const Number = props => {
  var numProps = {
    type: "button",
    className: "number",
    onClick: props.click,
    disabled: props.selected
  };
  return (
    <button {...numProps}>
      {props.number}
    </button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Number);
