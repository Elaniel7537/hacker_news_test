import { createSlice } from "@reduxjs/toolkit";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";

export const initialState = {
  hackerNews: { loading: false, data: {} as {} },
  loading: "IDLE",
  error: null,
};

const hackerNews = createSlice({
  name: "hackerNews",
  initialState,
  reducers: {
    setHackerNews: (state, action) => {
      state.hackerNews.data = action.payload;
    },
  },
});

export const { setHackerNews } = hackerNews.actions;

export default hackerNews.reducer;
