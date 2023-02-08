import { createSlice } from "@reduxjs/toolkit";

export const preLoadingSlice = createSlice({
  name: "preLoadingSlice",
  initialState: {
    value: true,
  },
  reducers: {
    finishLoading: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { finishLoading } = preLoadingSlice.actions;

export default preLoadingSlice.reducer;
