const NEW_GAME = "NEW_GAME"
const SELECT_NUMBER = "SELECT_NUMBER"

const newGame = () => ({
  type: NEW_GAME,
})

const selectNumber = index => ({
  type: SELECT_NUMBER,
  index,
})
