import React from "react";
import "./NewGame.scss";
import { connect } from "react-redux";
import { newGame } from "../gameBoardActions";

const mapDispatchToProps = {
  newGame
};

const NewGame = props => {
  var newGameProps = {
    type: "button",
    className: "button",
    onClick: props.newGame
  };
  return <button {...newGameProps}>New Game</button>;
};

export default connect(() => ({}), mapDispatchToProps)(NewGame);
