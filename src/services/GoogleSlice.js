import { createSlice } from "@reduxjs/toolkit";
const googleSlice = createSlice({
    name: "googleSlice",
    initialState: {
        getPlacesList: [],
        getPlacesDetailbyId: {},
        catogory: "restaurant",


    },
    reducers: {
        GetPlacesList(state, action) {
            console.log(action.payload)
            state.getPlacesList = action.payload
        },
        GetPlacesDetailbyId(state, action) {

            console.log(action.payload)
            state.getPlacesDetailbyId = action.payload
        },
        GetCatogories(state, action) {

            console.log(action.payload)
            state.catogory = action.payload
        }

    },
    extraReducers: {
    }
})

export const { GetPlacesList, GetPlacesDetailbyId, GetCatogories } = googleSlice.actions;

export default googleSlice.reducer;