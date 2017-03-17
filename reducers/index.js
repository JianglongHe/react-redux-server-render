import { combineReducers } from 'redux'

const selectedReddit = (state = 'reactjs', action) => {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedReddit
})

export default rootReducer
