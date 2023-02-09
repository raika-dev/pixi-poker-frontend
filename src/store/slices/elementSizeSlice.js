import { createSlice } from "@reduxjs/toolkit";

export const elementSizeSlice = createSlice({
  name: "elementSizeSlice",
  initialState: {
    value: {
      deck: {
        width: 0,
        height: 0,
      },
    },
  },
  reducers: {
    setDeckSize: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDeckSize } = elementSizeSlice.actions;

export default elementSizeSlice.reducer;
