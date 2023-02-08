import { configureStore } from "@reduxjs/toolkit";
import preLoadingSlice from "./slices/loadingSlice";

const store = configureStore({
  reducer: { preLoading: preLoadingSlice },
});

export default store;
