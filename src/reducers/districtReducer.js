const initialState = {
  featured_district: {},
  add_district: {}
};

export function reducerDistrict(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case "GET_DISTRICT_NAME":
      return newState;
    case "GET_DISTRICT_SUCCESS":
      newState.featured_district = { ...action.data };
      return newState;
    case "ADD_NAME_DISTRICT":
      return newState;
    case "ADD_DISTRICT_SUCCESS":
      newState.add_district = { ...action.data };
      return newState;
    default:
      return newState;
  }
}
