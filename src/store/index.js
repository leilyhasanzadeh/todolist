import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import { taskReducer, taskListAction, taskSelectedAction } from "./reducers";

const store = configureStore(
  {
    reducer: {
      task: taskReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  },
  thunk
);

export { store, taskListAction, taskSelectedAction };
