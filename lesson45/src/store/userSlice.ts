import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  name: string;
};

const initialState: UserState = {
  name: "Julia",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUser: (state) => {
      state.name = "Alex";
    },
    resetUser: (state) => {
      state.name = "Julia";
    },
  },
});

export const { changeUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
