import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: {},
  loggedInStatus: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
      if (action.payload.user) {
        state.loggedInStatus = true;
      }
    },
    removeUser(state, action) {
      state.user = {};
      state.loggedInStatus = false;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
