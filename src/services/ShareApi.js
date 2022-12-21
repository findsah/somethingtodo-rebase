
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import Geocode from "react-geocode";
// import apiInstance from "../../../../config/AxiosInstance";


const config = {
    headers: {
        Accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjcwOTEzNzYwLCJleHAiOjE2NzM1MDU3NjB9.D0kJm8v16JDIz4_176FSy8_ZwVD6CyrTik-nnPTMxFw"
        // "Content-Type": "multipart/form-data",
    },
};
const apiKey = "AIzaSyBR962qKrR2IwdYUmk8J4diZVZuV_L9pWw";

export const GetCurrentLocation = createAsyncThunk("sharedSection/getCurrentLocation", async (params) => {


    // const mapApiJs = 'https://maps.googleapis.com/maps/api/js';
    // const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json';

    Geocode.setApiKey(apiKey);

    const result = await Geocode.fromLatLng(params?.latitude, params?.longitude).then(
        (response) => {
            // console.log(response)
            let city;
            for (let i = 0; i < response.results[0].address_components.length; i++) {
                for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
                    switch (response.results[0].address_components[i].types[j]) {
                        case "locality":
                            city = response.results[0].address_components[i].long_name;
                            // currentCityName.current = city;
                            // console.log(city)
                            return city
                            break;
                        default:
                            city = "";
                            break;
                    }
                }
            }
            // console.log(city.current)
            // setAddress(city.current);
            return city.current
        },
        (error) => {
            console.error(error);
        }
    );
    const data = result
    return data

});


export const GetLocationList = createAsyncThunk("sharedSection/getLocationList", async (params) => {

    params.loader.load().then((google) => {

        var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);
        let map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
        var service

        var request = {
            location: pyrmont,
            radius: '500',
            type: ['restaurant']
        };

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);

        function callback(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log(results)
                params?.setPlacesList(results)

            } else {
                // console.log(status)
                // console.log(results)
            }
        }

    });


    console.log(params.placesList)
    return params.placesList;

});

// export const GetLocationList = createAsyncThunk("sharedSection/getCurrentLocation", async (params) => {

// });