import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import apiInstance from "../../../../config/AxiosInstance";
import { baseUrl } from "../../../../config/baseUrl";

const config = {
    headers: {
        Accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwOTEzNzYwLCJleHAiOjE2NzM1MDU3NjB9.D0kJm8v16JDIz4_176FSy8_ZwVD6CyrTik-nnPTMxFw"
        // "Content-Type": "multipart/form-data",
    },
};

/*
Author : Arman Ali
Module: createEvent
github: https://github.com/Arman-Arzoo
*/

// **************************  event  *****************************
//  get event list
export const GetEventList = createAsyncThunk("createEventsSection/getEventList", async (params) => {

    let response = await apiInstance.post('/all-events', params).then((response) => {

        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});

//  get venue by id
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

    let response = await apiInstance.post('/all-events', params).then((response) => {
        toast.success("Event Created successfully")
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
//  get venue list
export const GetVenueList = createAsyncThunk("createEventsSection/getVenueList", async (params) => {

    // let response = await  apiInstance.get(`${baseUrl}all-venues`).then((response) => {
    let response = await axios.get(`${baseUrl}all-venues`, config).then((response) => {
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
    let response = await axios.get(`${baseUrl}friends`, config).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});






