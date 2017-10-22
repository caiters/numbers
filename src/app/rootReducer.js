import {
  combineReducers
} from 'redux'
import {
  commonReducer
} from './modules/common/commonReducer'

import gameBoardReducer from './modules/gameboard/gameBoardReducer'

const rootReducer = combineReducers({
  gameBoard: gameBoardReducer,
  common: commonReducer,
})

export default function root(state, action) {
  return rootReducer(state, action)
}
