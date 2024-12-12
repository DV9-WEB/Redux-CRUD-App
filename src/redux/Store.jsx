import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/UserSlice";

const Store = configureStore({
    reducer: {
       users: UserSlice 
    }
})

export default Store