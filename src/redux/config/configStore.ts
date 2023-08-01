import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todosSlice";

const store = configureStore({
  reducer: {
    todos,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
