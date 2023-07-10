import { createSlice } from "@reduxjs/toolkit";
const groupSlice = createSlice({
  name: "group",
  initialState: { list: [], info: {} },
  reducers: {
    fetchGroup(state, action) {
      state?.list.push(action.payload);

      return state;
    },
    updateGroup(state, action) {
      let oldInfo = state.info[action.payload.address] || {};
      let newInfo = action?.payload?.info;
      state.info[action.payload.address] = { ...oldInfo, ...newInfo };
      return state;
    },
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = groupSlice;
// Extract and export each action creator by name
export const { fetchGroup, updateGroup } = actions;
// Export the reducer, either as a default or named export
export default reducer;
