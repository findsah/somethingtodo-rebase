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
        getEventList: [],
        getEventListById: {},
        createEvent: {},
        updateEventList: {},
        deleteEventList: {},
        getVenueList: [],
        getVenueListById: {},
        createVenue: {},
        updateVenueList: {},
        deleteVenueList: {},
        getFriendList: []
    },
    reducers: {

    },
    extraReducers: {

        ['createEventsSection/getEventList/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.getEventList = data?.data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in getEventList")
            }
        },
        ['createEventsSection/getEventListById/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.getEventListById = data?.data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in getEventListById")
            }
        },
        ['createEventsSection/createEvent/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.createEvent = data?.data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in createEvent")
            }
        },
        ['createEventsSection/updateEventList/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.updateEventList = data?.data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in updateEventList")
            }
        },
        ['createEventsSection/deleteEventList/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.deleteEventList = data?.data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in deleteEventList")
            }
        },
        ['createEventsSection/getVenueList/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.getVenueList = data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in getVenueList")
            }
        },
        ['createEventsSection/getVenueListById/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.getVenueListById = data?.data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in getVenueListById")
            }
        },
        ['createEventsSection/createVenue/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.createVenue = data?.data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in createVenue")
            }
        },
        ['createEventsSection/updateVenueList/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.updateVenueList = data?.data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in updateVenueList")
            }
        },
        ['createEventsSection/deleteVenueList/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.deleteVenueList = data?.data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in deleteVenueList")
            }
        },

        ['createEventsSection/getFriendList/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.getFriendList = data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in getFriendList")
            }
        },




    }
})

export const { } = createEventSlice.actions;

export default createEventSlice.reducer;