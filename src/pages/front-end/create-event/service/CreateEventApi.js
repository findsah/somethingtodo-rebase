import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import apiInstance from "../../../../config/AxiosInstance";
import { baseUrl } from "../../../../config/baseUrl";
import { IsLoader } from "../../../../services/ShareSlice";



/*
Author : Arman Ali
Module: createEvent
github: https://github.com/Arman-Arzoo
*/

// **************************  event  *****************************
//  get event list
export const GetEventList = createAsyncThunk("createEventsSection/getEventList", async (params) => {

    let response = await apiInstance.get(`all-events`).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;

    return { data, status }

});

//  get Event by id
export const GetEventListById = createAsyncThunk("createEventsSection/getEventListById", async (params) => {

    let response = await apiInstance.get(`/all-events/${params}`, params).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

//  Create  event
export const CreateEvent = createAsyncThunk("createEventsSection/createEvent", async (params) => {

    // let response = await apiInstance.post('/all-events', params).then((response) => {})
    let response = await apiInstance.post(`all-events`, params,).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }



});

// Update event
export const UpdateEventList = createAsyncThunk("createEventsSection/updateEventList", async (params) => {

    let response = await apiInstance.put(`/all-events${params}`, params).then((response) => {
        toast.success('event Update Successfully')
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

//  delete event list
export const DeleteEventList = createAsyncThunk("createEventsSection/deleteEventList", async (params) => {

    let response = await apiInstance.put(`/all-events${params}`, params).then((response) => {

        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

// **************************  venues  *****************************
//  get venue list from custom or google list
export const GetVenueList = createAsyncThunk("createEventsSection/getVenueList", async (params) => {

    // let response = await  apiInstance.get(`${baseUrl}all-venues`).then((response) => {
    let response = await apiInstance.get(`all-venues`).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

export const GetVenueListGoogle = createAsyncThunk("createEventsSection/getVenueListGoogle", async (params, { dispatch }) => {

    dispatch(IsLoader(true))
    let response = await apiInstance.get(`google/${params?.lat}/${params?.lng}/${params?.catogory}/${params?.radias}`).then((response) => {
        dispatch(IsLoader(false))
        return response
    }).catch((error) => {
        dispatch(IsLoader(false))
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

export const GetAllImages = createAsyncThunk("createEventsSection/getAllImages", async (params) => {

    let response = await apiInstance.get(`${baseUrl}all-venues`).then((response) => {

        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

export const GetVenueDetailByPlaceId = createAsyncThunk("createEventsSection/getVenueDetailByPlaceId", async (params) => {

    let response = await apiInstance.get(`google/details/${params}`).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })

    const { data, status } = response;
    return { data, status }

});

export const GetVenueDetailByPlaceIdfordetail = createAsyncThunk("createEventsSection/getVenueDetailByPlaceIdfordetail", async (params) => {

    let response = await apiInstance.get(`google/details/${params}`).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })

    const { data, status } = response;
    return { data, status }

});

export const CreateCustomVenue = createAsyncThunk("createEventsSection/createCustomVenue", async (params) => {

    let response = await apiInstance.post(`google/create-event`, params).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;

    return { data, status }

});

//  get venue by id
export const GetVenueListById = createAsyncThunk("createEventsSection/getVenueListById", async (params) => {

    let response = await apiInstance.get(`/all-venues/${params}`, params).then((response) => {

        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

//  Create  event
export const CreateVenue = createAsyncThunk("createEventsSection/createVenue", async (params) => {

    let response = await apiInstance.post('/all-venues', params).then((response) => {
        toast.success("Venue Created successfully")
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

// Update event
export const UpdateVenueList = createAsyncThunk("createEventsSection/updateVenueList", async (params) => {

    let response = await apiInstance.put(`//all-venues${params}`, params).then((response) => {
        toast.success('Venue Update Successfully')
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

//  delete event list
export const DeleteVenueList = createAsyncThunk("createEventsSection/deleteVenueList", async (params) => {

    let response = await apiInstance.delete(`all-venues${params}`, params).then((response) => {

        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

// **************** Friend *************//

export const GetFriendList = createAsyncThunk("createEventsSection/getFriendList", async (params) => {

    // let response = await  apiInstance.get(`${baseUrl}all-venues`).then((response) => {
    let response = await apiInstance.get(`friends`,).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});






