import { createSlice } from "@reduxjs/toolkit";
import { getAnime } from "./action";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const createReducer = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAnime.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(getAnime.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(getAnime.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default createReducer;
