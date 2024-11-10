import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../Category/categorySlice";


export const store = configureStore({
    reducer:{
        categoryReducer : categorySlice
    }
})