import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User-Slice",
  initialState: {
    user: "",
  },
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
      console.log(state.user);
    },
    removeUser: (state, action) => {
      console.log(state.user);
      state.user = null;
    },
  },
});
export const { addUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
