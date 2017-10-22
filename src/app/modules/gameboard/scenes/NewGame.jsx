import React from "react";

const NewGame = props => {
  var newGameProps = {
    type: "button",
    className: "newgame",
    onClick: props.onClick
  };
  return (
    <button {...newGameProps}>
      New Game
    </button>
  );
};

export default NewGame
