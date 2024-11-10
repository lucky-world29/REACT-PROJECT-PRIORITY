import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        category:"Men",
        items:["Coats","Jacket","Party Wear","Shirts"]
    },
    {
        category:"WoMen",
        items:["Coats","Jacket","Party Wear","Shirts"]
    },
    {
        category:"KIds",
        items:["Coats","Jacket","Party Wear","Shirts"]
    }
]

const accordionSlice = createSlice({
    name:"AccordionSlice",
    initialState
})

export default accordionSlice;