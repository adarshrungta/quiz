import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import quiz from "./quiz";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  quiz: quiz,

});
