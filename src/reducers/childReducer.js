const initialState = {
    featured_child: {}
  };
  
  export function reducerChild(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
      case "GET_CHILD_NAME":
        return newState;
      case "GET_CHILD_SUCCESS":
        newState.featured_child = { ...action.data };
        return newState;
        default:
            return newState;
    
    }
  }
  