import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/*
Author : Arman Ali
Module: create event 
github: https://github.com/Arman-Arzoo
*/

//slice to manage create Event section
const sharedSlice = createSlice({
    name: "sharedSection",
    initialState: {
        getCurrentLocation: "",
        // getLocationList: []
    },
    reducers: {

    },
    extraReducers: {

        ['sharedSection/getCurrentLocation/fulfilled']: (state, action) => {
            state.getCurrentLocation = action.payload || ""

        },

        // ['sharedSection/getLocationList/fulfilled']: (state, action) => {
        //     state.getLocationList = action.payload || ""

        // },



    }
})

export const { } = sharedSlice.actions;

export default sharedSlice.reducer;