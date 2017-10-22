import React from "react";
import "./NewGame.scss";

const NewGame = props => {
  var newGameProps = {
    type: "button",
    className: "button",
    onClick: props.onClick
  };
  return <button {...newGameProps}>New Game</button>;
};

export default NewGame;
