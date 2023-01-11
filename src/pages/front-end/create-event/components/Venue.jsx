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
import MapForGetLatLng from '../../components/MapForGetLatLng';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetEventList, GetVenueList } from '../service/CreateEventApi';
import { Loader } from "@googlemaps/js-api-loader"
import { GetPlacesList } from '../../../../services/GoogleSlice';
import { AddedVenueSorting } from './AddedVenueSorting';
import uuid from 'react-uuid';
import { toast } from 'react-toastify';


const Venue = ({ images, setImages, addedVenues, setAddedVenues, previewImage, setPreviewImage }) => {
    console.log(addedVenues)
    // hook importer
    const dispatch = useDispatch()

    // usestate for local state
    const [mapOrCarView, setMapOrCardView] = useState("mapview");
    const [mapOrcardTap, setMapOrCardTap] = useState("mapTap");
    const [open, setOpen] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [venueList, setVenueList] = useState([])
    const [catogory, setCatogory] = useState("")
    const [distance, setDistance] = useState("1km")
    const [searchLocation, setSearchLocation] = useState("")
    const [searchBy, setSearchBy] = useState("")
    const [checkResultLength, setCheckResultLength] = useState(0)
    const [callState, setCallState] = useState(false)


    // custom venues state
    const [lantitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [Title, setTitle] = useState()
    const [isPravite, setIsPravite] = useState()
    const [city, setCity] = useState()
    const [street, setStreet] = useState()
    const [building, setBuilding] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [website, setWebite] = useState()
    const [description, setDescription] = useState()
    //   handel custom venue funtion
    const handelCreateCustom = () => {
        const createCustomVenueData = {
            place_id: uuid(),
            images,
            imageUrl: null,
            description,
            name: Title,
            location: {
                lat: longitude,
                lng: longitude
            },
            city,
            street,
            building,
            phoneNumber,
            website,
            isPravite

        }
        if (!Title || !description || !city || !street || !building || !phoneNumber || !website || images?.length == 0) {
            setOpenError(true)
        }
        else {
            toast.success("Custom Venue Add Successfully")
            console.log("create Custom Venue", createCustomVenueData)
            setOpen(false)
        }

    }


    // list of catogories 
    const catogories = [{
        id: 1,
        name: 'dining',

    },
    {
        id: 2,
        name: "nightlife"
    },
    {
        id: 3,
        name: 'adventure'
    },
    {
        id: 4,
        name: 'art'
    }
        ,
    {
        id: 5,
        name: 'entertainment'
    }
        ,
    {
        id: 6,
        name: 'music'
    }
        ,
    {
        id: 7,
        name: 'casual'
    }
        ,
    {
        id: 8,
        name: 'celebrations'
    }
        ,
    {
        id: 9,
        name: 'gaming'
    },
    {
        id: 10,
        name: 'education'
    },
    {
        id: 11,
        name: 'sports'
    }

    ]
    // list of distance 
    const distances = [
        {
            km: "1km"
        },
        {
            km: "5km"
        },
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

    // useEffect(() => {
    //     // it run untill 6 venue is found in response
    //     if (checkResultLength < 6) {
    //         let value = distance.replace('km', '')
    //         let d = value + 10
    //         let dis = d + "km"

    //         setDistance(dis)
    //         setCallState(!callState)
    //         alert("hi", distance)
    //         console.log("ddi", distance)
    //     }
    // }, [callState])


    // current location of user
    const lat = localStorage.getItem("lat");
    const lag = localStorage.getItem("lag");
    //search case insensitibe
    const keyword = new RegExp(searchBy, 'i');

    // useSlector to get State from store
    const { getPlacesList } = useSelector((state) => state?.googleSlice)
    const { getCurrentLocation } = useSelector((state) => state?.shareSlice)

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
        const data = {
            place_id: item?.place_id,
            images: "",
            imageUrl: item?.photos ? item?.photos[0]?.getUrl() : "",
            description: item?.vicinity,
            name: item?.name,
            location: {
                lat: item?.geometry?.location?.lat(),
                lng: item?.geometry?.location?.lng()
            },
            city: "",
            street: "",
            building: "",
            phoneNumber: "",
            website: '',
            isPravite: ""
        }
        setAddedVenues((prevState) => [...prevState, data])
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
        const loader = new Loader({
            apiKey: "AIzaSyAlEQnPxaoYwZXM4aKDtwa3N7tYNvkKFkQ",
            version: "weekly",
            libraries: ["places"]

        });
        // fetch google api
        loader.load().then((google) => {
            var pyrmont = new google.maps.LatLng(lat, lag);
            // var pyrmont = new google.maps.LatLng(51.509865, -0.118092);
            let map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 33.1415552, lng: 73.7476608 },
                zoom: 12,
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
                    setCheckResultLength(results?.length)

                } else {
                    // console.log(status)
                    // console.log(results)
                }
            }

        });
    }, [
        catogory,
        keyword,
        lat,
        lag,
        distance,
        searchLocation?.geometry?.location?.lat,
        searchLocation?.geometry?.location?.lng,
        checkResultLength
    ])

    return (
        <div className='create_event_venue'>
            {/* header */}
            <div className='header'>
                <h2>SEARCH VENUES: </h2>
                <div className="right-inner-icon">
                    <i className="fa fa-search" aria-hidden="true"></i>

                    <input
                        className="search"
                        type="search"
                        placeholder="Name of venue"
                        value={searchBy}
                        onChange={(e) => setSearchBy(e.target.value)}
                    />
                </div>
            </div>

            {/* filter */}
            <div className='filter_group'>
                <div className='filter_group_left'>
                    <h2>SEARCH BY</h2>
                    <select
                        name="catogories"
                        id="catogories"
                        className='select'
                        value={catogory}
                        onChange={(e) => {

                            setCatogory(e.target.value)


                        }}
                    >
                        <option>All categories</option>
                        {
                            catogories?.map((item) =>
                                <option value={item?.name}> {item?.name}</option>
                            )

                        }
                    </select>
                    <select name="distance" id="distance" className='select'
                        value={distance}
                        defaultValue={"1km"}
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
                                <input
                                    type="text"
                                    className='text'
                                    placeholder='Venue Name'
                                    value={Title}
                                    onChange={(e) => setTitle(e.target.value)}

                                />
                            </div>
                            {/* <div className='feild'>
                                <h3>CATEGORY</h3>
                                <select name="category" id="category" className='select'>
                                    <option >Category</option>
                                    <option value="catogory one">one</option>
                                </select>
                            </div> */}
                            <div className='feild'>
                                <h3>SET TO PRIVATE</h3>
                                <div className='checkbox_group'>
                                    <div className="checkbox">
                                        <input
                                            type="checkbox"
                                            id='yes'
                                            value={isPravite}
                                            checked={isPravite === "yes"}
                                            onChange={() => setIsPravite("yes")}

                                            name='yes' />
                                        <label htmlFor="yes">Yes</label>
                                    </div>
                                    <div className="checkbox">
                                        <input type="checkbox"
                                            id='no'
                                            name='no'
                                            value={isPravite}
                                            checked={isPravite === "no"}
                                            onChange={() => setIsPravite("no")}
                                        />
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
                                    <input type="text"
                                        name="city"
                                        id="city"
                                        placeholder='City'
                                        className='text'
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        name="Street"
                                        id="Street"
                                        placeholder='Street'
                                        className='text'
                                        value={street}
                                        onChange={(e) => setStreet(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        name="Buildings"
                                        id="Buildings"
                                        placeholder='Buildings'
                                        className='text'
                                        value={building}
                                        onChange={(e) => setBuilding(e.target.value)}
                                    />
                                </div>

                            </div>
                            <div className='feild'>
                                <div className='icon'>
                                    <img src={phoneIcon} alt="" />
                                    <h3>PHONE NUMBER</h3>
                                </div>
                                <input
                                    type="text"
                                    className='text'
                                    placeholder='888-888-888'
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                            <div className='feild'>
                                <div className='icon'>
                                    <img src={websiteIcon} alt="" />
                                    <h3>WEBSITE</h3>
                                </div>

                                <input
                                    type="text"
                                    className='text'
                                    placeholder='888-888-888'
                                    value={website}
                                    onChange={(e) => setWebite(e.target.value)}
                                />
                            </div>
                            {/*  //classname textarea_move is removed due to change */}
                            <div className='feild form-outline mb-4 '>
                                <h3>DESCRIPTION</h3>
                                <textarea
                                    className='form-control'
                                    name="description"
                                    id="description"
                                    rows="6" cols="50"
                                    style={{ maxWidth: "100%" }}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>

                            </div>


                        </div>
                        <div>

                            {/* image container */}
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
                            {/* map  and field*/}
                            <div className='Map_for_lat_lng'>
                                <div className='Map_form'>
                                    <div className='feild'>
                                        <h3>Latitude</h3>
                                        <input
                                            type="text"
                                            className='text'
                                            placeholder='Latitude'
                                            value={lantitude}
                                            style={{ width: '100%' }}
                                            disabled

                                        />
                                    </div>
                                    <div className='feild'>
                                        <h3>Longitude</h3>
                                        <input type="text"
                                            className='text'
                                            placeholder='Longitude'
                                            value={longitude}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <MapForGetLatLng
                                    latlng={[lat, lag]}
                                    setLatitude={setLatitude}
                                    setLongitude={setLongitude}
                                />

                            </div>

                        </div>


                    </div>
                    <div className='d-flex justify-content-center mt-4 mb-3'>
                        <button className='btn_primary'
                            onClick={() => {
                                handelCreateCustom()
                            }}
                        >CREATE</button>
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
                                getPlacesList?.filter(entry => Object?.values(entry)?.some(val => typeof val === "string" && val?.match(keyword)))
                                    ?.filter(item => {
                                        if (catogory == "dining") {

                                            return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("bar") ||
                                                val.includes("bakery") ||
                                                val.includes("cafe") ||
                                                val.includes("restaurant"))
                                        }
                                        else if (catogory == "nightlife") {

                                            return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("bar") ||
                                                val.includes("night_club") ||

                                                val.includes("casino"))
                                        }
                                        else if (catogory == "adventure") {

                                            return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("airport") ||
                                                val.includes("amusement_park") ||
                                                val.includes("aquarium") ||
                                                val.includes("campground") ||
                                                val.includes("park") ||
                                                val.includes("tourist_attraction") ||
                                                val.includes("zoo") ||

                                                val.includes("bus_station") ||
                                                val.includes("light_rail_station") ||
                                                val.includes("natural_feature") ||
                                                val.includes("point_of_interest"))
                                        }
                                        else if (catogory == "art") {

                                            return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("art_gallery") ||


                                                val.includes("museum"))
                                        }
                                        else if (catogory == "entertainment") {

                                            return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("bar") ||
                                                val.includes("movie_theater") ||
                                                val.includes("stadium") ||
                                                val.includes("tourist_attraction") ||
                                                val.includes("museum") ||
                                                val.includes("night_club") ||

                                                val.includes("amusement_park") ||
                                                val.includes("book_store") ||

                                                val.includes("museum"))
                                        }
                                        else if (catogory == "music") {

                                            return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("stadium") ||
                                                val.includes("bar") ||
                                                val.includes("casino") ||
                                                val.includes("night_club"))
                                        }
                                        else if (catogory == "casual") {

                                            return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("spa") ||
                                                val.includes("aquarium") ||
                                                val.includes("art_gallery") ||
                                                val.includes("beauty_salon") ||
                                                val.includes("book_store") ||
                                                val.includes("book_store") ||
                                                val.includes("park") ||
                                                val.includes("shopping_mall") ||
                                                val.includes("tourist_attraction") ||
                                                val.includes("university"))
                                        }
                                        else if (catogory == "celebrations") {

                                            return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("spa") ||
                                                val.includes("night_club") ||
                                                val.includes("bar") ||
                                                val.includes("casino") ||
                                                val.includes("amusement_park") ||
                                                val.includes("church") ||
                                                val.includes("hindu_temple") ||
                                                val.includes("lodging") ||
                                                val.includes("mosque") ||
                                                val.includes("stadium") ||
                                                val.includes("stadium") ||
                                                val.includes("tourist_attraction") ||
                                                val.includes("place_of_worship") ||
                                                val.includes("restaurant"))
                                        }
                                        else if (catogory == "gaming") {

                                            return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("stadium"))

                                        }
                                        else if (catogory == "education") {

                                            return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("art_gallery") ||
                                                val.includes("book_store") ||
                                                val.includes("library") ||
                                                val.includes("museum") ||
                                                val.includes("university") ||
                                                val.includes("zoo") ||
                                                val.includes("hindu_temple") ||
                                                val.includes("lodging") ||
                                                val.includes("mosque") ||
                                                val.includes("stadium") ||
                                                val.includes("stadium") ||
                                                val.includes("tourist_attraction") ||
                                                val.includes("place_of_worship") ||
                                                val.includes("restaurant"))
                                        }
                                        else if (catogory == "sports") {

                                            return Object?.values(item.types)?.some(val => typeof val === "string" && val.includes("stadium") ||
                                                val.includes("bowling_alley") ||
                                                val.includes("gym") ||
                                                val.includes("park") ||
                                                val.includes("university"))

                                        }
                                        else {
                                            return item
                                        }
                                    })
                                    ?.map(item => {

                                        return (
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
                                                            opacity: addedVenueId?.includes(item?.id || item?.place_id) ? '0.4' : ''
                                                        }}
                                                        disabled={addedVenueId?.includes(item?.id || item?.place_id)}
                                                    >
                                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                                        ADD  VENUE
                                                    </button>
                                                </div>

                                            </div>
                                        )
                                    })
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
                            position={[lat, lag]}
                            data={getPlacesList}
                            setAddedVenues={setAddedVenues}
                            addedVenues={addedVenues}
                            keyword={keyword}
                            catogory={catogory}
                            distance={distance}

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
                    <AddedVenueSorting
                        venueCard={addedVenues}
                        setVenueCard={setAddedVenues}
                    />
                </div>
            </div>


        </div>
    )
}

export default Venue