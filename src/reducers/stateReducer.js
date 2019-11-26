const initialState = {
  featured_state: {},
  add_state: {}
};

export function reducerState(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case "GET_NAME":
      return newState;
    case "GET_STATE_SUCCESS":
      newState.featured_state = { ...action.data };
      return newState;
    case "ADD_NAME":
      return newState;
    case "ADD_STATE_SUCCESS":
      newState.add_state = { ...action.data };
      return newState;
    default:
      return newState;
  }
}
