import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import apiInstance from "../../Apis/Axios";

/*
Author : Arman Ali
Module: createEvent
github: https://github.com/Arman-Arzoo
*/


//  Create On boarding
export const CreateEvent = createAsyncThunk("createEventsSection/createEvent", async (params) => {

    let response = await apiInstance.post('/all-events', params).then((response) => {
        toast.success("onBoarding Created successfully")
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});






