/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React, { useState } from 'react'
import dummy from '../../../../assets/dummy1.png'
import CustoModal from '../../components/CustomModal';
import websiteIcon from '../../../../assets/icons/website.svg'
import phoneIcon from '../../../../assets/icons/phone.svg'
import locationIcon from '../../../../assets/icons/location.svg'
import MapModal from '../../components/MapModal';
import Slider from 'react-slick';
import CustomUpload from '../../components/CustomUpload';
import CustomErrorPopUp from '../../components/CustomErrorPopUp';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetEventList, GetVenueList } from '../service/CreateEventApi';
import CustomPagination from '../../components/CustomPagination';
import customPagination from '../../components/CustomPagination';
// import { GetCatogories } from '../../../../services/GoogleSlice';
import { Loader } from "@googlemaps/js-api-loader"
import { GetPlacesList } from '../../../../services/GoogleSlice';
import Autocomplete from "react-google-autocomplete";
import { AiOutlineConsoleSql } from 'react-icons/ai';



const Venue = ({ images, setImages, addedVenues, setAddedVenues, previewImage, setPreviewImage }) => {
    // hook importer
    const dispatch = useDispatch()

    // usestate for local state
    const [mapOrCarView, setMapOrCardView] = useState("mapview");
    const [mapOrcardTap, setMapOrCardTap] = useState("mapTap");
    const [open, setOpen] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [venueList, setVenueList] = useState([])
    const [catogory, setCatogory] = useState("")
    const [distance, setDistance] = useState("500")
    const [searchLocation, setSearchLocation] = useState("")

    console.log(searchLocation)
    // list of catogories 
    const catogories = [{
        id: 1,
        name: 'dinning',

    },
    {
        id: 2,
        name: "Adventure"
    },
    {
        id: 3,
        name: 'restaurant'
    }
    ]
    // list of distance 
    const distances = [
        {
            km: "25km"
        },
        {
            km: "50km"
        },
        {
            km: "75km"
        },
        {
            km: "100km"
        },
    ]
    // current location of user
    const lat = localStorage.getItem("lat");
    const lag = localStorage.getItem("lag");

    const searchlat = searchLocation?.geometry?.location?.lat();
    const searchlng = searchLocation?.geometry?.location?.lng();

    // useSlector to get State from store
    const { getPlacesList } = useSelector((state) => state?.googleSlice)
    const { getCurrentLocation } = useSelector((state) => state?.shareSlice)

    // useSlector to get State from store
    const { getVenueList } = useSelector((state) => state?.createEventSlice)
    // const { getLocationList } = useSelector((state) => state?.shareSlice)
    // console.log(getLocationList)

    // console.log(getVenueList)

    // console.log(venueList)


    const addedVenueId = addedVenues?.map((venue) => {
        return venue?.id || venue?.place_id
    })


    // a function to delete image
    const deleteImage = (id) => {

        if (id > -1) {
            // assigning the list to temp variable
            const tempImg = [...images];
            const tempPrew = [...previewImage]
            // removing the element using splice
            tempImg.splice(id, 1);
            tempPrew.splice(id, 1)
            // updating the list
            setImages(tempImg)
            setPreviewImage(tempPrew)
        }
    };

    // add venue
    const addVenueAction = (item) => {
        setAddedVenues((prevState) => [...prevState, item])
    }

    // remove venue
    const RemoveVenueAction = (item) => {
        console.log(item)
        setAddedVenues((current) =>
            current.filter((venue) => {


                if (venue.id) {
                    return venue.id !== item?.id
                } else {
                    return venue?.place_id !== item?.place_id
                }

            }
            )
        );
    }

    // useEffect to check google event and db event
    // useEffect(() => {
    //     if (getLocationList != []) {
    //         setVenueList(getLocationList)
    //     } else {
    //         setVenueList(getVenueList)
    //     }
    // }, [getLocationList?.place_id, getVenueList?.id])

    // useEffect to call function
    useEffect(() => {
        dispatch(GetVenueList())
        dispatch(GetEventList())
    }, [])

    // useEffect to fetch all  venus from google
    useEffect(() => {

        var radias = distance.replace('km', '') * 1000
        console.log(radias)
        const loader = new Loader({
            apiKey: "AIzaSyAlEQnPxaoYwZXM4aKDtwa3N7tYNvkKFkQ",
            version: "weekly",
            libraries: ["places"]

        });

        console.log(searchlat)
        console.log(searchlng)
        // fetch google api
        loader.load().then((google) => {
            var pyrmont = new google.maps.LatLng(searchlat || lat, searchlng || lag);
            // var pyrmont = new google.maps.LatLng(33.1415552, 73.7476608);
            let map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 33.1415552, lng: 73.7476608 },
                zoom: 8,
            });
            var service

            var request = {
                location: pyrmont,
                radius: radias,
                type: catogory
                // [`${catogory}` || "restaurant"]
            };


            service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, getNearPlaces);
            // service.getDetails(reqestplacebyid, getplaceDetail)

            function getNearPlaces(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    dispatch(GetPlacesList(results))

                } else {
                    // console.log(status)
                    // console.log(results)
                }
            }

        });
    }, [catogory, lat, lag, distance, searchLocation?.geometry?.location?.lat, searchLocation?.geometry?.location?.lng])

    return (
        <div className='create_event_venue'>
            {/* header */}
            <div className='header'>
                <h2>SEARCH VENUES: </h2>
                <div className="right-inner-icon">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    {/* <Autocomplete
                        apiKey={"AIzaSyAlEQnPxaoYwZXM4aKDtwa3N7tYNvkKFkQ"}
                        onPlaceSelected={(place) => {
                            console.log(place);
                        }}
                    >
                        <input
                            className="search"
                            type="search"
                            placeholder="Search City / Current Location" />

                    </Autocomplete> */}
                    <Autocomplete
                        className='search'
                        apiKey={"AIzaSyAlEQnPxaoYwZXM4aKDtwa3N7tYNvkKFkQ"}
                        // style={{ width: "90%" }}
                        onPlaceSelected={(place) => {
                            setSearchLocation(place)
                            console.log(place)
                        }}
                        // options={{
                        //     types: ["(regions)"],
                        //     componentRestrictions: { country: "ru" },
                        // }}
                        defaultValue={getCurrentLocation}
                    />
                </div>
            </div>

            {/* filter */}
            <div className='filter_group'>
                <div className='filter_group_left'>
                    <h2>ALL</h2>
                    <select
                        name="catogories"
                        id="catogories"
                        className='select'
                        value={catogory}
                        onChange={(e) => {

                            setCatogory(e.target.value)


                        }}
                    >
                        <option>Categories</option>
                        {
                            catogories?.map((item) =>
                                <option value={item?.name}> {item?.name}</option>
                            )

                        }
                    </select>
                    <select name="distance" id="distance" className='select'
                        value={distance}
                        onChange={(e) => {
                            setDistance(e.target.value)
                        }}
                    >
                        <option>Distance</option>
                        {
                            distances?.map(item =>
                                <option value={item?.km}> {item?.km}</option>
                            )
                        }
                    </select>
                </div>
                <button className='btn_secondary mobile_create_event '
                    style={{ width: "233px", height: "48px" }}
                    onClick={() => setOpen(true)}
                >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    CREATE CUSTOM VENUE
                </button>
                {/* modal for create cutom venue */}
                <CustoModal open={open} close={setOpen} title="CREATE CUSTOM VENUE" size="lg">
                    <div className='create_custom_venue'>
                        <div className="form_feild">
                            <div className='feild'>
                                <h3>VENUE NAME</h3>
                                <input type="text" className='text' placeholder='text' />
                            </div>
                            <div className='feild'>
                                <h3>CATEGORY</h3>
                                <select name="category" id="category" className='select'>
                                    <option >Category</option>
                                    <option value="catogory one">one</option>
                                </select>
                            </div>
                            <div className='feild'>
                                <h3>SET TO PRIVATE</h3>
                                <div className='checkbox_group'>
                                    <div className="checkbox">
                                        <input type="checkbox" id='yes' name='yes' />
                                        <label htmlFor="yes">Yes</label>
                                    </div>
                                    <div className="checkbox">
                                        <input type="checkbox" id='no' name='no' />
                                        <label htmlFor="no">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className='feild'>
                                <div className='icon'>
                                    <img src={locationIcon} alt="" />
                                    <h3>EVENT ADDRESS</h3>
                                </div>
                                <div className='input_text_group'>
                                    <input type="text" name="city" id="city" placeholder='City' className='text' />
                                    <input type="text" name="Street" id="Street" placeholder='Street' className='text' />
                                    <input type="text" name="Buildings" id="Buildings" placeholder='Buildings' className='text' />
                                </div>

                            </div>
                            <div className='feild'>
                                <div className='icon'>
                                    <img src={phoneIcon} alt="" />
                                    <h3>PHONE NUMBER</h3>
                                </div>
                                <input type="text" className='text' placeholder='888-888-888' />
                            </div>
                            <div className='feild'>
                                <div className='icon'>
                                    <img src={websiteIcon} alt="" />
                                    <h3>WEBSITE</h3>
                                </div>

                                <input type="text" className='text' placeholder='888-888-888' />
                            </div>
                            <div className='feild form-outline mb-4 textarea_move'>
                                <h3>DESCRIPTION</h3>
                                <textarea className='form-control' name="description" id="description" rows="6" cols="50" style={{ maxWidth: "100%" }}></textarea>
                            </div>


                        </div>
                        <div className="photo_of_venue">
                            <h3>Add Photos Of Your Event</h3>
                            <div className='image_container'>
                                {
                                    previewImage?.length > 0 ?
                                        <Slider
                                            slidesToShow={2}
                                            className='image_preview_slider'>
                                            {
                                                previewImage?.map((item, index) => (

                                                    <div className='image_preview' key={index}>
                                                        <img src={item} alt="" />
                                                        <div className='close_icon' onClick={() => deleteImage(index)}>
                                                            <i className="fa fa-times" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </Slider> :
                                        <div className='image_preview_slider d-flex justify-content-center align-items-center'>
                                            {/* <h2>No Images To preview</h2> */}
                                            No Images To preview
                                        </div >
                                }
                                <CustomUpload setFiles={setImages} setPreview={setPreviewImage} />

                            </div>
                        </div>


                    </div>
                    <div className='d-flex justify-content-center mt-4 mb-3' onClick={() => {
                        setOpenError(true)
                    }}>
                        <button className='btn_primary'>CREATE</button>
                    </div>
                    <CustomErrorPopUp error="Oops we missed something. Please ensure all fields are filled correctly" openError={openError} close={setOpenError} />
                </CustoModal>
            </div>

            {/* card and map button for mobile*/}
            <div className='mobile_btn_switch_card_and_map'>
                <button
                    className={mapOrcardTap === "mapTap" ? "btn_default btn_current" : "btn_default"}
                    onClick={() => { setMapOrCardView("mapview"); setMapOrCardTap("mapTap") }}>
                    MAP VIEW
                </button>
                <button
                    className={mapOrcardTap === "listTap" ? "btn_default btn_current" : "btn_default"}
                    onClick={() => { setMapOrCardView("listview"); setMapOrCardTap("listTap") }}>
                    LIST VIEW
                </button>
            </div>

            {/* card and map  */}
            <div className='card_and_map_container'>
                {/* card */}

                <div className={mapOrCarView === "listview" ? "width" : "disable_list"}>
                    <div className="card_container">
                        {
                            getPlacesList?.length > 0 ?
                                getPlacesList?.map(item => (
                                    <div className='event_card' key={item?.id}>

                                        <Slider slidesToShow={1} prevArrow={false} nextArrow={false} dots={false}>
                                            {/* need to check */}

                                            {
                                                item?.photos ?
                                                    item?.photos?.map(photo => {

                                                        if (typeof photo.getUrl === "function") {
                                                            return <img src={photo.getUrl()} alt="" />
                                                        } else {
                                                            return <img src={dummy} alt="" />

                                                        }

                                                    }) :
                                                    <img src={dummy} alt="" />

                                            }
                                        </Slider>


                                        <h5 >{item?.Title || item?.name}</h5>
                                        <p className='p_gray_10 '>
                                            {
                                                item?.Description?.length > 230 ?
                                                    item?.Description?.substring(0, 230) + "..."
                                                    : item?.Description?.substring(0, 230)
                                                    || item?.vicinity
                                            }
                                        </p>
                                        <div className='btn-container'>
                                            <button className='btn_secondary ' onClick={() => {
                                                addVenueAction(item)

                                            }}
                                                style={{
                                                    background: addedVenueId?.includes(item?.id || item?.place_id) ? 'green' : '',
                                                    opacity: addedVenueId?.includes(item?.id || item?.place_id) ? '0.8' : ''
                                                }}
                                                disabled={addedVenueId?.includes(item?.id || item?.place_id)}
                                            >
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                                ADD  VENUE
                                            </button>
                                        </div>

                                    </div>
                                ))
                                :
                                <div className='d-flex justift-content-center align-items-center'>
                                    No Data Found
                                </div>
                        }
                    </div>
                </div>
                {/* map */}
                <div className={mapOrCarView === "mapview" ? "width" : "disable_map"}>
                    <div className="event_map">

                        <MapModal
                            position={[51.505, -0.09]}
                            data={getPlacesList}
                            setAddedVenues={setAddedVenues}
                            addedVenues={addedVenues}
                        />
                    </div>

                </div>
            </div>

            {/* divider */}
            <div className='divider_container'>
                <div className='divider'></div>

                {/* <button className='btn_blue'>
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    VIEW MORE
                </button> */}
            </div>

            {/* added venue */}
            <div className='add_venue_container'>
                <h2 className='disable_mobile'>ADDED VENUES</h2>
                <h2 className='disable_desktop'>SEARCH VENUES:</h2>
                <div className='venue_card_container'>
                    {
                        addedVenues?.length > 0 ?
                            <Slider className='venue_cards' slidesToShow={addedVenues?.length === 1 ? 1 : 2}>
                                {
                                    addedVenues.map(item => {

                                        return (
                                            <div className='venue_card' key={item?.id}>
                                                <img src={item?.photos ? item?.photos[0]?.getUrl() : dummy} alt="" />
                                                <h5 >{item?.Title || item?.name}</h5>
                                                <p className='p_gray_10 '>
                                                    {
                                                        item?.Description?.length > 230 ?
                                                            item?.Description?.substring(0, 230) + "..."
                                                            : item?.Description?.substring(0, 230)
                                                            || item?.vicinity
                                                    }
                                                </p>
                                                <div className='btn-container'>
                                                    {/* while integrating api you must pass all attribute same on the button */}
                                                    <button className='btn_error desktop_btn'
                                                        onClick={() => RemoveVenueAction(item)}
                                                    >
                                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                                        REMOVE VENUE
                                                    </button>
                                                    <button className='btn_error mobile_btn'
                                                        onClick={() => RemoveVenueAction(item)}
                                                    >
                                                        <i className="fa fa-minus" aria-hidden="true"></i>
                                                        REMOVE
                                                    </button>
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                            :
                            <div className='venue_cards d-flex justify-content-center align-items-center'  >
                                No venue Added add venue to show
                            </div>
                    }


                    <div className='add_venue'>
                        <div className='create'>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Venue