import { createSlice } from "@reduxjs/toolkit";
import UserList from "../data/UserList";

const UserSlice = createSlice({
  name: "user",
  initialState: UserList,
  reducers: {
    addUser: (state, action) => {
      const newId = state.length > 0 ? state[state.length - 1].id + 1 : 1; // Dynamically assign ID
      state.push({ ...action.payload, id: newId }); // Assign new user ID
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const user = state.find((user) => user.id == id);
      if (user) {
        user.name = name;
        user.email = email;
      }
    },
    deleteUser: (state, action) => {
      return state
        .filter((user) => user.id != action.payload) // Remove user
        .map((user, index) => ({ ...user, id: index + 1 })); // Reset IDs
    },
  },
});

export const { addUser, editUser, deleteUser } = UserSlice.actions;
export default UserSlice.reducer;
