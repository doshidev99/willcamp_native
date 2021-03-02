import { combineReducers } from "redux";

import { taskReducers } from "./taskReducers";
import { counterReducers } from "./counterReducers";

export const rootReducers = combineReducers({
  taskReducers,
  counterReducers,
});
