import { START_TIMER, STOP_TIMER, RESET_TIMER } from "./timerActions";
import { END_GAME } from "../gameboard/gameBoardActions";
import { create, selectNumber } from "./gameBoard";

export default (timer = {}, action) => {
  switch (action.type) {
    case START_TIMER:
      return Object.assign({}, timer, start());
    case END_GAME:
    case STOP_TIMER:
      return Object.assign({}, timer, stop());
    case RESET_TIMER:
      return Object.assign({}, timer, reset());
    default:
      return timer;
  }
};
