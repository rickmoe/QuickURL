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
    deleteAlert: (state, { payload: id }) => {
      return state.filter((alert) => alert.id !== id);
    },
    updateAlert: (state, { payload: { id, toChange } }) => {
      state.map((alert) => {
        if (alert.id !== id) return alert;
        for (const attribute in toChange) {
          alert[attribute] = toChange[attribute];
        }
        return alert;
      });
    },
    /**************************/
  },
});

export const { createAlert, deleteAlert, updateAlert } = alertSlice.actions;
export default alertSlice.reducer;
