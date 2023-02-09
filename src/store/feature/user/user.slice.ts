import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, IUser } from "./user.interface";

const initialState: IInitialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload);
    },
  },
});
// Action creators are generated for each case reducer function
export const userAction = userSlice.actions;
export default userSlice.reducer;
