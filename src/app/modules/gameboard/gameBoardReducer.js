import { NEW_GAME, SELECT_NUMBER } from './gameBoardActions'
import { create, selectNumber } from './gameBoard'

export default (state = {}, action) => {
  switch (action.type) {
  case NEW_GAME:
    return Object.assign({}, state, {
      gameBoard: create(),
    })
  case SELECT_NUMBER:
    return Object.assign({}, state, {
      gameBoard: selectNumber(action.index, state.gameBoard),
    })
  default: return state
  }
}
