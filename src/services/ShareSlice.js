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
        isLoading: false
    },
    reducers: {
        IsLoader(state, action) {
            state.isLoading = action.payload
        },

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

export const { IsLoader } = sharedSlice.actions;

export default sharedSlice.reducer;