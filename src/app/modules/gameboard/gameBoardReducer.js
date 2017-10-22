import { NEW_GAME, SELECT_NUMBER, END_GAME } from "./gameBoardActions";
import { create, selectNumber } from "./gameBoard";

export default (gameBoard = {}, action) => {
  switch (action.type) {
    case NEW_GAME:
      return Object.assign({}, gameBoard, create());
    case SELECT_NUMBER:
      return Object.assign(
        {},
        gameBoard,
        selectNumber(action.index, gameBoard)
      );
    case END_GAME:
      console.log("end game");
    default:
      return gameBoard;
  }
};
