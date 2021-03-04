import { combineReducers } from "redux";

import { taskReducers } from "./taskReducers";
import { counterReducers } from "./counterReducers";
import { movieReducers } from "./movieReducers";

export default rootReducers = combineReducers({
  taskReducers,
  counterReducers,
  movieReducers,
});
