import { combineReducers } from "redux";
import { addFormReducer } from "./formreducer";

export default combineReducers({
  form: addFormReducer,
});
