import { createSlice } from "@reduxjs/toolkit";
const googleSlice = createSlice({
    name: "googleSlice",
    initialState: {
        getPlacesList: [],
        getPlacesDetailbyId: {}

    },
    reducers: {
        GetPlacesList(state, action) {
            console.log(action.payload)
            state.getPlacesList = action.payload
        },
        GetPlacesDetailbyId(state, action) {
            console.log(action.payload)
            state.getPlacesDetailbyId = action.payload
        }
    },
    extraReducers: {
    }
})

export const { GetPlacesList, GetPlacesDetailbyId } = googleSlice.actions;

export default googleSlice.reducer;