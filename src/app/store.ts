import { configureStore } from "@reduxjs/toolkit";
// slices
import test from "@features/testSlice";
import hackerNews from "@features/hackerNewsSlice";

export const store = configureStore({
  reducer: {
    test,
    hackerNews,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
