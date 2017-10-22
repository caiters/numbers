const NEW_GAME = "NEW_GAME";
const END_GAME = "END_GAME";
const SELECT_NUMBER = "SELECT_NUMBER";

const newGame = () => ({
  type: NEW_GAME
});

const endGame = () => ({
  type: END_GAME
});

const selectNumber = index => ({
  type: SELECT_NUMBER,
  index
});
export { NEW_GAME, END_GAME, SELECT_NUMBER, newGame, endGame, selectNumber };
