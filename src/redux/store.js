import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./yourList/ListSlice";
import loadingReducer from "./search/loadingSlice";

export const store = configureStore({
  reducer: { loading: loadingReducer, list: listReducer },
});
