import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    /******** Reducers ********/
    // Redux now allows state to appear mutable in state, but is changed
    // to an immutable version when implemented
    setSearch: (state, { payload: text }) => text,
    /**************************/
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
