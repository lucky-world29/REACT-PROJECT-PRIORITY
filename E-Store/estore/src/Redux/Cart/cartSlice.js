import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems :[],
    totalItemPrice : 0,
    totalItems : 0,
    totalQuantity : 0
}

const cartSlice = createSlice({

    name : "cartSlice",
    initialState,
    reducer:{
        addCartItem : (state,action)=>{
            let item_exists = state.cartItems.find((item)=>item.id === action.payload.id);
            state.cartItems = [...state.cartItems,action.payload];
            // state.totalItems = ++state.totalItems;
            state.totalQuantity = ++state.totalQuantity;
            state.totalItemPrice= state.totalItemPrice+action.payload.price;

            if(!item_exists){
                state.totalItems = ++state.totalItems;
            }
        }
    }
})

export const  {addCartItem} = cartSlice.actions;
export default cartSlice.reducer;