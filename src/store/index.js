import { configureStore } from "@reduxjs/toolkit";
import preLoadingSlice from "./slices/loadingSlice";
import elementSizeSlice from "./slices/elementSizeSlice";

const store = configureStore({
  reducer: { preLoading: preLoadingSlice, elementSize: elementSizeSlice },
});

export default store;
