import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//slice to manage create Event section
const blogSlice = createSlice({
    name: "blogSection",
    initialState: {
        getBlogList: []
    },
    reducers: {

    },
    extraReducers: {
        ['blogSection/getBlogList/fulfilled']: (state, action) => {
            const { data, status } = action.payload || {}

            if (status >= 200 && status < 300) {
                state.getBlogList = data
            } else if (status >= 400 && status < 500) {
                toast("Something went wrong in getBlogList")
            }
        },


    }
})

export const { } = blogSlice.actions;

export default blogSlice.reducer;