import React from "react";
import { connect } from "react-redux";
import "./LastClicked.scss";
const mapStateToProps = (state, props) => ({
  lastSelected: state.gameBoard.lastSelected
});

const LastClicked = props => {
  return (
    <p className="last-clicked">
      Last number clicked:{" "}
      <strong className="last-clicked__item">{props.lastSelected}</strong>
    </p>
  );
};

export default connect(mapStateToProps)(LastClicked);
