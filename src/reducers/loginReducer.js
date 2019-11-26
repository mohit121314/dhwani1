const initialState = {
  login: {}
};

export function loginReducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case "GET_INFO":
      return newState;
    case "GET_INFO_SUCCESS":
      newState.login = { ...action.data };
      return newState;
    default:
      return newState;
  }
}
