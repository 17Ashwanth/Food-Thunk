import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "../slice/FoodSlice";

const store = configureStore({
    reducer:{
        foodSlice
    }
})

export default store