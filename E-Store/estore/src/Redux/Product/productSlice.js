import { createSlice } from "@reduxjs/toolkit";

const initialState = [
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

]

const productSlice = createSlice({
    name:"Products",
    initialState
})

export default productSlice;