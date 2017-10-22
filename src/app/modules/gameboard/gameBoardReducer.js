import { NEW_GAME, SELECT_NUMBER } from './gameBoardActions'
import { create, selectNumber } from './gameBoard'

export default (state = create(), action) => {
  switch (action.type) {
  case NEW_GAME:
    return Object.assign({}, state, create())
  case SELECT_NUMBER:
    return Object.assign({}, state, selectNumber(action.index, state.gameBoard))
  default: return state
  }
}
