import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/group";
export const store = configureStore({
  reducer: {
    group: reducer,
  },
});
