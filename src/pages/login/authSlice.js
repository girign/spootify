import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.accessToken = action.payload;
    },
    clearToken: (state) => {
      state.accessToken = null;
    },
  },
});

export const selectAccessToken = (state) => state.auth.accessToken;

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
