import shuffle from "shuffle-array";
import { SELECT_NUMBER, endGame } from "./gameBoardActions";
const NUMBER_OF_BOXES = 10;

const create = () => {
  const shuffled = shuffle(
    Array.from(new Array(NUMBER_OF_BOXES), (val, index) => index + 1)
  );
  const numbers = shuffled.map(n => ({
    number: n,
    selected: null
  }));

  const encoded = Buffer.from(shuffled).toString("base64");

  return {
    encoded,
    lastSelected: 0,
    numbers
  };
};

const startTimer = gameBoard => {
  const Timer = timer(0)(timerComponent);
  return Timer;
};

const initNada = () => {
  return {};
};

const selectNumber = (index, gameBoard) => {
  let lastSelected = gameBoard.lastSelected;

  const numbers = gameBoard.numbers.map((n, i) => {
    if (i === index) {
      // This is the number we are selecting!
      lastSelected = n.number;
      return {
        number: n.number,
        selected: true
      };
    }
    return Object.assign({}, n);
  });

  return Object.assign({}, gameBoard, {
    lastSelected,
    numbers
  });
};

const endGameCheck = ({ dispatch, getState }) => {
  return next => action => {
    const result = next(action);
    if (action.type === SELECT_NUMBER) {
      let state = getState();
      if (state.gameBoard.numbers.every(e => e.selected)) {
        dispatch(endGame());
      }
    }
    return result;
  };
};

export { create, selectNumber, endGameCheck };
