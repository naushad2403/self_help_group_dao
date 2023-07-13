import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/group";
import { toastReducer } from "./slices/toast";
export const store = configureStore({
  reducer: {
    group: reducer,
    toast: toastReducer,
  },
});
