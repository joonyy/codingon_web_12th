//reducer도 관리하는 상태만큼 여러개일 수 있다!

import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import isVisibleReducer from "./isVisibleReducer";
import MybankReducer from "./MybankReducer"; //내가 한 거
import bankReducer from "./bankReducer";

//combineReducer
const rootReducer = combineReducers({
  //key: value
  counter : counterReducer,
  isVisible : isVisibleReducer,
  bank : bankReducer
});

export default rootReducer;