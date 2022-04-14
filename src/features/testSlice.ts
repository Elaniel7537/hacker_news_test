import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  testMessage: "Redux Activo.",
};

const test = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTime: (state) => {
      state.test = "Redux cambio";
    },
  },
});

export const { setTime } = test.actions;

export default test.reducer;
