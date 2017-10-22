import React from "react";
import { connect } from "react-redux";
import { newGame } from "../gameBoardActions";;

const mapDispatchToProps = {
  newGame
};

const NewGame = props => {
  var newGameProps = {
    type: "button",
    className: "newgame",
    onClick: props.newGame
  };
  return (
    <button {...newGameProps}>
      New Game
    </button>
  );
};

export default connect(() => ({}), mapDispatchToProps)(NewGame);
