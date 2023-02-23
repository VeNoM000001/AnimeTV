import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listArray: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    listReducer: (state, action) => {
      state.listArray = [...state.listArray, action.payload];
    },
  },
});

export const { listReducer } = listSlice.actions;
export default listSlice.reducer;
