import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
    'getProducts',
    async ()=>{
        const productData = await fetch("http://localhost:5001/getProducts")
            .then((res)=>res.json())
            .catch((err)=>err);

        return productData;
    }
)