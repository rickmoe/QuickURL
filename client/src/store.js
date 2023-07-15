import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "./features/alertSlice";
import searchReducer from "./features/searchSlice";

export const store = configureStore({
  reducer: {
    alerts: alertReducer,
    search: searchReducer,
  },
});
