import {
  combineReducers
} from 'redux'
import {
  commonReducer
} from './modules/common/commonReducer'

const rootReducer = combineReducers({
  common: commonReducer,
})

export default function root(state, action) {
  return rootReducer(state, action)
}
