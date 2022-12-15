import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import apiInstance from "../../../../config/AxiosInstance";

const config = {
    headers: {
        Accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwOTEzNzYwLCJleHAiOjE2NzM1MDU3NjB9.D0kJm8v16JDIz4_176FSy8_ZwVD6CyrTik-nnPTMxFw"
        // "Content-Type": "multipart/form-data",
    },
};


// *** blog section
export const GetBlogList = createAsyncThunk("blogSection/getBlogList", async (params) => {

    // let response = await  apiInstance.get(`${baseUrl}all-venues`).then((response) => {
    let response = await axios.get(`${baseUrl}all-blogs`, config).then((response) => {
        return response
    }).catch((error) => {
        return error.response
    })
    const { data, status } = response;
    return { data, status }

});