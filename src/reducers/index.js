import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { reducerState } from "./stateReducer";
import { reducerDistrict } from "./districtReducer";
import { reducerChild } from "./childReducer";
import { reducerAddchild } from "./addchlidReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  states: reducerState,
  district: reducerDistrict,
  childs: reducerChild,
  addchilds: reducerAddchild
});

export default rootReducer;
