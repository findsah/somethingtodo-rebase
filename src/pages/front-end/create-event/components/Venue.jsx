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
import { GetVenueList } from '../service/CreateEventApi';


const Venue = () => {
    // hook importer
    const dispatch = useDispatch()

    // var settings = {
    //     className: "center venue_cards",
    //     centerMode: true,

    // }

    // usestate for local state
    const [mapOrCarView, setMapOrCardView] = useState("mapview");
    const [mapOrcardTap, setMapOrCardTap] = useState("mapTap");
    const [open, setOpen] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [images, setImages] = useState([])
    const [previewImage, setPreviewImage] = useState([])
    const [addedVenues, setAddedVenues] = useState([])

    // useSlector to get State from store
    const { getVenueList } = useSelector((state) => state?.createEventSlice)
    console.log(getVenueList)
    console.log(addedVenues)

    const addedVenueId = addedVenues?.map((venue) => {
        return venue?.id
    })

    console.log(addedVenueId)
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
        setAddedVenues((current) =>
            current.filter((venue) => venue.id !== item?.id)
        );
    }

    // useEffect to call function
    useEffect(() => {
        dispatch(GetVenueList())
    }, [])

    return (
        <div className='create_event_venue'>
            {/* header */}
            <div className='header'>
                <h2>SEARCH VENUES: </h2>
                <div class="right-inner-icon">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input type="search" placeholder="Search City / Current Location" />
                </div>
            </div>

            {/* filter */}
            <div className='filter_group'>
                <div className='filter_group_left'>
                    <h2>ALL</h2>
                    <select name="catogories" id="catogories" className='select'>
                        <option>Categories</option>
                        <option value="1"> option one</option>
                    </select>
                    <select name="distance" id="distance" className='select'>
                        <option>Distance</option>
                        <option value="1"> option one</option>
                    </select>
                </div>
                <button className='btn_secondary mobile_create_event '
                    style={{ width: "233px", height: "48px" }}
                    onClick={() => setOpen(true)}
                >
                    <i class="fa fa-plus" aria-hidden="true"></i>
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

                                                    <div className='image_preview' >
                                                        <img src={item} alt="" />
                                                        <div className='close_icon' onClick={() => deleteImage(index)}>
                                                            <i class="fa fa-times" aria-hidden="true"></i>
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
                            getVenueList.map(item => (
                                <div className='event_card'>
                                    <img src={dummy} alt="" />
                                    <h5 >{item?.Title}</h5>
                                    <p className='p_gray_10 '>
                                        {
                                            item?.Description.length > 230 ?
                                                item?.Description?.substring(0, 230) + "..."
                                                : item?.Description?.substring(0, 230)
                                        }
                                    </p>
                                    <div className='btn-container'>
                                        <button className='btn_secondary ' onClick={() => {
                                            addVenueAction(item)

                                        }}
                                            style={{
                                                background: addedVenueId?.includes(item?.id) ? 'green' : '',
                                                opacity: addedVenueId?.includes(item?.id) ? '0.45' : ''
                                            }}
                                            disabled={addedVenueId?.includes(item?.id)}
                                        >
                                            <i class="fa fa-plus" aria-hidden="true"></i>
                                            ADD  VENUE
                                        </button>
                                    </div>

                                </div>
                            ))
                        }





                    </div>
                </div>
                {/* map */}
                <div className={mapOrCarView === "mapview" ? "width" : "disable_map"}>
                    <div className="event_map">

                        <MapModal position={[51.505, -0.09]} data={addedVenues} />
                    </div>

                </div>
            </div>

            {/* divider */}
            <div className='divider_container'>
                <div className='divider'></div>
                <button className='btn_blue'>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    VIEW MORE
                </button>
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
                                        console.log(item?.id)
                                        return (
                                            <div className='venue_card'>
                                                <img src={dummy} alt="" />
                                                <h5 >{item?.Title}</h5>
                                                <p className='p_gray_10 '>
                                                    {
                                                        item?.Description.length > 230 ?
                                                            item?.Description?.substring(0, 230) + "..."
                                                            : item?.Description?.substring(0, 230)
                                                    }
                                                </p>
                                                <div className='btn-container'>
                                                    {/* while integrating api you must pass all attribute same on the button */}
                                                    <button className='btn_error desktop_btn'
                                                        onClick={() => RemoveVenueAction(item)}
                                                    >
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                        REMOVE VENUE
                                                    </button>
                                                    <button className='btn_error mobile_btn'
                                                        onClick={() => RemoveVenueAction(item)}
                                                    >
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
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
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Venue