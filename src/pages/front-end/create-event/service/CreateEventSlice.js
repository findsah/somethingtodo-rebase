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
        getFriendList: [],
        getVenueListGoogle: {},
        createCustomVenue: {},
        getVenueDetailByPlaceId: {},
        getVenueDetailByPlaceIdfordetail: {},
        getAllImages: [],

        // local runtime state
        addedVenuesData: [],
        addedVenueDetailsData: [],
        currentLocationlanlng:[]

    },
    reducers: {
        SetAddedVenuesData: (state, action) => {

            state.addedVenuesData = [...state.addedVenuesData, action.payload];
        },
        RemoveAddedVenuesData: (state, action) => {
            console.log(action.payload)
            state.addedVenuesData = [...state.addedVenuesData.filter(item => item?.place_id !== action.payload?.place_id)]
        },
        SetAddedVenueDetailsData: (state, action) => {
            state.addedVenueDetailsData = [...state.addedVenueDetailsData, action.payload];
        },
        RemoveAddedVenueDetailsData: (state, action) => {
            state.addedVenueDetailsData = [...state.addedVenueDetailsData.filter(item => item?.place_id !== action.payload?.place_id)]
        },

        ClearAddedVenuesData: (state) => {

            state.addedVenuesData = [];
        },
        ClearAddedVenuesDetailData: (state) => {

            state.addedVenueDetailsData = [];
        },
        ChangeCurrentLocationlanlng:(state,action)=>{
            state.currentLocationlanlng = action.payload
        }

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
                // toast("Something went wrong in createEvent")
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
                // toast("Something went wrong in getVenueList")
            }
        },
        ['createEventsSection/getVenueListGoogle/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.getVenueListGoogle = data
            } else if (status >= 400 && status < 500) {
                state.getVenueListGoogle = {}
                toast.error(data.error)
            }
        },


        ['createEventsSection/getAllImages/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.getAllImages = data
            } else if (status >= 400 && status < 500) {
                // toast("Something went wrong in getAllImages")
            }
        },
        ['createEventsSection/createCustomVenue/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.createCustomVenue = data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in createCustomVenue")
            }
        },


        ['createEventsSection/getVenueDetailByPlaceIdfordetail/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.getVenueDetailByPlaceIdfordetail = data
            } else if (status >= 400 && status < 500) {

            }
        },
        ['createEventsSection/getVenueDetailByPlaceId/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.getVenueDetailByPlaceId = data
            } else if (status >= 400 && status < 500) {

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

export const { SetAddedVenuesData, RemoveAddedVenuesData,
    SetAddedVenueDetailsData, RemoveAddedVenueDetailsData,
    ClearAddedVenuesData, ClearAddedVenuesDetailData,ChangeCurrentLocationlanlng } = createEventSlice.actions;

export default createEventSlice.reducer;