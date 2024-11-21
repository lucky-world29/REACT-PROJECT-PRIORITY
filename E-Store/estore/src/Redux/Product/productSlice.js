import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productAction";


const initialState = {
    products : [
                {
                    pName:"Jacket",
                    price:45,
                    img:"shop-1.jpg"
                },
                {
                    pName:"Purse",
                    price:50,
                    img:"shop-2.jpg"
                },
                {
                    pName:"Dress",
                    price:38,
                    img:"shop-3.jpg"
                },
                {
                    pName:"Denim",
                    price:42,
                    img:"shop-4.jpg"
                },
                {
                    pName:"Boots",
                    price:65,
                    img:"shop-5.jpg"
                },
                {
                    pName:"Bag",
                    price:35,
                    img:"shop-6.jpg"
                }
    ],
    status : "idle",
    error : ""
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = "Loading...";
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = "Success.";
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = "Rejected!";
                state.error = action.error.message;
            });
    }
});


export default productSlice.reducer;