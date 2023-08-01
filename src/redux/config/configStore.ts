import { combineReducers, createStore } from "redux";
import todos from "../modules/todos";

const rootReducer = combineReducers({
  todos,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
