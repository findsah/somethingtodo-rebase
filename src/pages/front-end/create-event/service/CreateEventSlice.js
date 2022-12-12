import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/*
Author : Arman Ali
Module: create event 
github: https://github.com/Arman-Arzoo
*/

//slice to manage create Event section
const createEventSlice = createSlice({
    name: "createEventsSection",
    initialState: {
        createEvent: {}

    },
    reducers: {
    },
    extraReducers: {

        ['createEventsSection/createEvent/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}
            console.log(data)
            if (status >= 200 && status < 300) {
                state.createEvent = data?.data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in createEvent")
            }
        },
    }
})

export const { } = createEventSlice.actions;

export default createEventSlice.reducer;