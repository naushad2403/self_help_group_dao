import { createSlice } from "@reduxjs/toolkit";
let id = 0;
const initialState = {
  toasts: [],
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    addToast: (state, action) => {
      const toasts = state.toasts;
      state.toasts = [...toasts, { ...action.payload, id: id++ }];

      return state;
    },
    removeToast: (state, action) => {
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== action.payload
      );
      return state;
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;
export const toastReducer = toastSlice.reducer;
