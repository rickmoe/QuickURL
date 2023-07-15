import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alerts",
  initialState: [],
  reducers: {
    /******** Reducers ********/
    // Redux now allows state to appear mutable in state, but is changed
    // to an immutable version when implemented
    createAlert: (state, { payload }) => {
      state.push(payload);
    },
    deleteAlert: (state, { payload: id }) =>
      state.filter((alert) => alert.id !== id),
    /**************************/
  },
});

export const { createAlert, deleteAlert } = alertSlice.actions;
export default alertSlice.reducer;
