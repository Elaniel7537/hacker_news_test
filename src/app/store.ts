import { configureStore } from "@reduxjs/toolkit";
// slices
import test from "@features/testSlice";

export const store = configureStore({
  reducer: {
    test,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
