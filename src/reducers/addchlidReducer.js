const initialState = {
    
    add_child: {}
  };
  
  export function reducerAddchild(state = initialState, action) {
    let newState = { ...state };
    switch (action.type) {
     
      case "ADD_NAME_CHILD":
        return newState;
      case "ADD_CHILD_SUCCESS":
        newState.add_district = { ...action.data };
        return newState;
      default:
        return newState;
    }
  }
  
