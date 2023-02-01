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
import loactionNotFound from '../../../../assets/icons/locationnotfound.png'
import MapModal from '../../components/MapModal';
import Slider from 'react-slick';
import CustomUpload from '../../components/CustomUpload';
import CustomErrorPopUp from '../../components/CustomErrorPopUp';
import MapForGetLatLng from '../../components/MapForGetLatLng';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreateCustomVenue, GetAllImages, GetVenueDetailByPlaceId, GetVenueList, GetVenueListGoogle } from '../service/CreateEventApi';
import { AddedVenueSorting } from './AddedVenueSorting';
import { toast } from 'react-toastify';
import validator from 'validator'
import Autocomplete from "react-google-autocomplete";




const Venue = ({ images, setImages, addedVenues, setAddedVenues, previewImage, setPreviewImage,
    setAddedVenueDetails,

}) => {

    // hook importer
    const dispatch = useDispatch()

    // usestate for local state
    const [mapOrCarView, setMapOrCardView] = useState("mapview");
    const [mapOrcardTap, setMapOrCardTap] = useState("mapTap");
    const [open, setOpen] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [errorRes, setErrorRes] = useState("")
    const [catogory, setCatogory] = useState("")
    const [distance, setDistance] = useState("5km")
    const [searchBy, setSearchBy] = useState("")

    // custom venues state
    const [lantitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [Title, setTitle] = useState()
    const [isPravite, setIsPravite] = useState("no")
    const [city, setCity] = useState()
    const [street, setStreet] = useState()
    const [building, setBuilding] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [website, setWebite] = useState()
    const [description, setDescription] = useState()

    // a function to reset
    // const resetFn =()=>{

    // }
    //   handel custom venue funtion
    const handelCreateCustom = () => {


        if (!Title || !description || !city || !street || !building || !phoneNumber || !website || images?.length == 0) {
            setOpenError(true)
            setErrorRes("Oops we missed something. Please ensure all fields are filled correctly")
        }
        else {
            // checking phone number validation
            const phoneRegex = /^(?:\+\d{1,3}|0\d{1,3}|00\d{1,2})?(?:\d{9,11})$/;
            if (!phoneRegex.test(phoneNumber)) {

                setOpenError(true)
                setErrorRes("Oops Invalid Phone Number")
                return null
            }
            // checking website url

            if (!validator.isURL(website)) {
                setOpenError(true)
                setErrorRes("Oops Invalid website")
                return null
            }

            // const createCustomVenueDB = {

            //     venue_name: Title,
            //     description,
            //     image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            //     location: { lat: lantitude, lng: longitude },
            //     city,
            //     street,
            //     building,
            //     phoneNumber,
            //     website,
            //     isPrivate: isPravite == "yes" ? true : false
            // }
            const formData = new FormData();
            formData.append("name", Title);
            formData.append("description", description);
            formData.append("image", images);
            formData.append("location[lat]", lantitude);
            formData.append("location[lng]", longitude);
            formData.append("city", city);
            formData.append("street", street);
            formData.append("building", building);
            formData.append("phoneNumber", phoneNumber);
            formData.append("website", website);
            formData.append("isPrivate", isPravite == "yes" ? true : false);


            dispatch(CreateCustomVenue(formData)).then((res) => {

                const createCustomVenueData = {
                    place_id: res?.payload?.google?._id,
                    images,
                    imageUrl: null,
                    description,
                    name: Title,
                    location: {
                        lat: lantitude,
                        lng: longitude
                    },
                    city,
                    street,
                    building,
                    phoneNumber,
                    website,
                    isPravite,
                    previewImage

                }
                toast.success("Custom Venue Add Successfully")
                setOpen(false)
                setAddedVenues((prevState) => [...prevState, createCustomVenueData])
            })


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

    // current location of user
    const lat = localStorage.getItem("lat");
    const lag = localStorage.getItem("lag");
    //search case insensitibe
    const keyword = new RegExp(searchBy, 'i');

    // useSlector to get State from store

    const { getVenueListGoogle } = useSelector((state) => state?.createEventSlice)
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
            place_id: item?.google_place_id,
            images: item?.image,
            imageUrl: "",
            description: item?.description,
            name: item?.venue_name,
            location: {
                lat: item?.location?.lat,
                lng: item?.location?.lng,
            },
            city: "",
            street: "",
            building: "",
            phoneNumber: "",
            website: '',
            isPravite: "",
            previewImage: []
        }
        setAddedVenues((prevState) => [...prevState, data])
    }
    // add venue detail 
    const addVenueActionDetail = (id) => {

        dispatch(GetAllImages(id)).then(imageList => {

            dispatch(GetVenueDetailByPlaceId(id)).then(res => {

                const data = {
                    place_id: id,
                    images: imageList?.payload?.data,
                    imageUrl: "",
                    description: res?.payload?.data?.data?.formatted_address,
                    name: res?.payload?.data?.data?.name,
                    location: {
                        lat: res?.payload?.data?.data?.location?.lat,
                        lng: res?.payload?.data?.data?.location?.lng,
                    },
                    city: "",
                    street: "",
                    building: "",
                    phoneNumber: res?.payload?.data?.data?.formatted_phone_number,
                    website: res?.payload?.data?.data?.website,
                    isPravite: "",
                    previewImage: [],
                    openingDay: res?.payload?.data?.data?.opening_hours ? res?.payload?.data?.data?.opening_hours?.weekday_text[0] : "",
                    closingDay: res?.payload?.data?.data?.opening_hours ? res?.payload?.data?.data?.opening_hours?.weekday_text[6] : ""
                }
                setAddedVenueDetails((prevState) => [...prevState, data])



            })
        })



    }

    // useEffect to get list of google venues with filter by 
    // catogory or distance
    useEffect(() => {
        const data = {
            lat: lat || 40.730610,
            lng: lag || -73.935242,
            catogory: catogory || 'sports',
            radias: distance?.replace('km', '') * 1000 || 5000
        }
        dispatch(GetVenueListGoogle(data))
    }, [catogory, distance])

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
                            catogories?.map((item, index) =>
                                <option key={index} value={item?.name}> {item?.name}</option>
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
                            distances?.map((item, index) =>
                                <option key={index} value={item?.km}> {item?.km}</option>
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
                                    {/* <Autocomplete
                                        apiKey={"AIzaSyAzmR4YSzuWNY36bbxUuL_lvcKByJgVBYo"}
                                        onPlaceSelected={(place) => {
                                            console.log(place);
                                        }}
                                    /> */}


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
                    <CustomErrorPopUp error={errorRes} openError={openError} close={setOpenError} />
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
                            getVenueListGoogle?.data?.length > 0 ?
                                getVenueListGoogle?.data?.filter(entry => Object?.values(entry)?.some(val => typeof val === "string" && val?.match(keyword)))
                                    ?.map((item, index) => {

                                        return (
                                            <div className='event_card' key={index}>

                                                <Slider slidesToShow={1} prevArrow={false} nextArrow={false} dots={false}>
                                                    {/* need to check */}

                                                    {
                                                        item?.image ?
                                                            <img src={`data:image/png;base64,${item?.image}`} />
                                                            :
                                                            <img src={dummy} alt="" />

                                                    }
                                                </Slider>


                                                <h5 >{item?.Title || item?.venue_name}</h5>
                                                <p className='p_gray_10 '>
                                                    {
                                                        item?.description?.length > 230 ?
                                                            item?.description?.substring(0, 230) + "..."
                                                            : item?.description?.substring(0, 230)

                                                    }
                                                </p>
                                                <div className='btn-container'>
                                                    <button className='btn_secondary ' onClick={() => {
                                                        addVenueAction(item)
                                                        addVenueActionDetail(item?.google_place_id)

                                                    }}
                                                        style={{
                                                            background: addedVenueId?.includes(item?.id || item?.google_place_id) ? 'green' : '',
                                                            opacity: addedVenueId?.includes(item?.id || item?.google_place_id) ? '0.4' : ''
                                                        }}
                                                        disabled={addedVenueId?.includes(item?.id || item?.google_place_id)}
                                                    >
                                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                                        ADD  VENUE
                                                    </button>
                                                </div>

                                            </div>
                                        )
                                    })
                                :
                                <div className='no_data_found'>
                                    {/* No Data Found */}
                                    <img src={loactionNotFound} alt="" width="200" height="250" />
                                    <p>No Venues Found</p>
                                </div>
                        }
                    </div>
                </div>
                {/* map */}
                <div className={mapOrCarView === "mapview" ? "width" : "disable_map"}>
                    <div className="event_map">

                        <MapModal
                            position={[lat, lag]}
                            data={getVenueListGoogle}
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
                        setAddedVenueDetails={setAddedVenueDetails}
                    />
                </div>
            </div>


        </div>
    )
}

export default Venue