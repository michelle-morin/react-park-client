import * as c from '../actions/ActionTypes.js'

const initialState = {
  isLoading: false,
  parks: [],
  error: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case c.REQUEST_PARKS:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_PARKS_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        parks: action.parks
      });
    default:
      return state
  }
};