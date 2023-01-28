/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React from 'react'
import calendarblue from '../../../../assets/icons/calendarblue.svg'
import dollar from '../../../../assets/icons/dollar.svg'
import clockblue from '../../../../assets/icons/clockblue.svg'

import websiteIcon from '../../../../assets/icons/website.svg'
import phoneIcon from '../../../../assets/icons/phone.svg'
import emailIcon from '../../../../assets/icons/email.svg'
import locationIcon from '../../../../assets/icons/location.svg'
import eventimg from '../../../../assets/imageone.svg'

import { useState } from 'react'
import MuiModal from '../../components/CustomModal'
import MapModal from '../../components/MapModal'
import Slider from 'react-slick'
import dummy from '../../../../assets/dummy1.png'
import AddedVenueMap from '../../components/AddedVenueMap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { GetAllImages, GetVenueDetailByPlaceId, GetVenueDetailByPlaceIdfordetail } from '../service/CreateEventApi'
import { useEffect } from 'react'


const EventAndVenueDetail = ({ addedVenues, timeandpriceData, addedVenueDetails }) => {
    const [venueDetail, setVenueDetail] = useState([]);
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    console.log(addedVenueDetails)
    var settings = {
        slidesToShow: 2,
        className: "center",
        centerMode: true,
    }

    // useEffect(() => {
    //     addedVenues?.forEach(async (item) => {
    //         const res = await dispatch(GetVenueDetailByPlaceId(item?.place_id));
    //         setVenueDetail(prevState => [...prevState, { ...res?.payload?.data?.data, place_id: item?.place_id }]);

    //     });
    // }, [addedVenues, dispatch])
    // useEffect(() => {
    //     async function fetchData() {
    //         addedVenues?.forEach(async (item) => {
    //             const res = await dispatch(GetVenueDetailByPlaceId(item?.place_id));
    //             setVenueDetail(prevState => [...prevState, { ...res?.payload?.data?.data, place_id: item?.place_id }]);
    //         });
    //     }
    //     fetchData()
    // }, [addedVenues])

    return (
        <>
            {/* Event detail */}

            <div className="container create_event_detail">
                <div className="row">
                    <h2 className='text-center'>
                        EVENT DETAILS
                    </h2>
                    <div className="blue_line_bar"></div>
                    <div className="col map">
                        {/* react leftlet */}
                        <AddedVenueMap addedVenues={addedVenues} />
                        {/* <MapModal position={[localStorage.getItem("lat") || 51.505, localStorage.getItem("lag") || -0.09]} data={addedVenues} zoom={12} /> */}
                    </div>
                    <div className="col info">
                        <div className='inline'>
                            <img src={dollar} alt="" />
                            <p className='p_gray_14'> ${timeandpriceData?.eventCost[1]}/  person </p>
                        </div>
                        <div className='inline'>
                            <img src={calendarblue} alt="" />
                            <p className='p_gray_14'>  {timeandpriceData?.eventDate || "Event Date"} </p>

                        </div>
                        <div className='inline'>
                            <img src={clockblue} alt="" />
                            <p className='p_gray_14'>
                                {/* 7.00 P.M. - 11/30 P.M.  */}
                                {timeandpriceData?.eventTime || "Event Time"}
                            </p>

                        </div>

                        <div className="row">
                            <div className="col-3">
                                <h6>Starts at:</h6>
                            </div>
                            {
                                addedVenues?.length > 0 ?
                                    addedVenues?.filter((_, i) => i == 0)?.map(item => {
                                        return (
                                            <div className="col-9">
                                                <h6> {item?.name || "Venue Name"}</h6>
                                                <p className='p_gray_14'>
                                                    {item?.description || "Venue Description"}
                                                </p>
                                            </div>
                                        )
                                    }) :
                                    <div className="col-9">
                                        <h6> {"Venue Name"}</h6>
                                        <p className='p_gray_14'>
                                            {"Venue Description"}
                                        </p>
                                    </div>

                            }

                        </div>

                        <div className="row">
                            <div className="col-3">
                                <h6>Then:</h6>
                            </div>
                            {
                                addedVenues?.length > 1 ?
                                    addedVenues?.filter((_, i) => i == 1).map(item => {
                                        return (
                                            <div className="col-9">
                                                <h6> {item?.name || "Venue Name"}</h6>
                                                <p className='p_gray_14'>
                                                    {item?.description || "Venue Description"}
                                                </p>
                                            </div>
                                        )
                                    }) :
                                    <div className="col-9">
                                        <h6> {"Venue Name"}</h6>
                                        <p className='p_gray_14'>
                                            {"Venue Description"}
                                        </p>
                                    </div>
                            }
                        </div>

                        <div className="row">
                            <div className="col-3">
                                <h6>Ends at:</h6>
                            </div>
                            {
                                addedVenues?.length > 2 ?
                                    addedVenues?.filter((_, i) => i == 2)?.map(item => {
                                        return (
                                            <div className="col-9">
                                                <h6> {item?.name || "Venue Name"}</h6>
                                                <p className='p_gray_14'>
                                                    {item?.description || "Venue Description"}
                                                </p>
                                            </div>
                                        )
                                    }) :
                                    <div className="col-9">
                                        <h6> {"Venue Name"}</h6>
                                        <p className='p_gray_14'>
                                            {"Venue Description"}
                                        </p>
                                    </div>

                            }
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <button className='btn_primary '>join now</button>
                </div>
            </div>

            {/* venue detail */}
            <div className="container create_venue_detail">
                <div className="row">
                    <h2 >VENUE DETAILS</h2>
                    <div className="blue_line_bar"></div>
                    {
                        addedVenueDetails?.length > 0 ?
                            <Slider {...settings}>


                                {addedVenueDetails.map((item, index) => (
                                    <div className='card' id={index}>
                                        {/* <div>
                                            <Slider>
                                                {
                                                    item?.images?.map(item => (
                                                        <img src={`data:image/png;base64,${item?.data}`} width="464px" height="207px" />
                                                    ))
                                                }

                                            </Slider>
                                        </div> */}

                                        {
                                            item?.images ?
                                                <img src={`data:image/png;base64,${item?.images[0]?.data}`} alt="" width="464px" height="207px" /> :
                                                <img src={dummy} />
                                        }

                                        <p className='p_blue_size_20 text-center pb-3'>{item?.name}</p>
                                        <div className="row info">
                                            <div className="col-6 d-flex align-items-center gap-4" style={{ overflow: 'hidden' }}>

                                                <img src={websiteIcon} alt="icon" width="30px" height="30px" />
                                                <p className='p_gray_14'>{item?.website || "No Website"}</p>


                                            </div>
                                            <div className="col-6 d-flex align-items-center gap-4">
                                                <img src={phoneIcon} alt="icon" width="30px" height="30px" />
                                                <p className='p_gray_14'>{item?.phoneNumber || "Not Provide"} </p>
                                            </div>
                                        </div>

                                        <div className="row info">
                                            <div className="col d-flex align-items-center gap-4">
                                                <img src={emailIcon} alt="icon" width="30px" height="30px" />
                                                <p className='p_gray_14'>{item?.email || "no email"}</p>
                                            </div>
                                        </div>

                                        <div className="row info">
                                            <div className="col d-flex align-items-center gap-4">
                                                <img src={locationIcon} alt="icon" width="30px" height="30px" />
                                                <p className='p_gray_14'> {item?.description || "No Location Address"}</p>
                                            </div>
                                        </div>
                                        <div className="row info">
                                            <div className="col d-flex align-items-center gap-4">
                                                <img src={clockblue} alt="icon" width="30px" height="30px" />
                                                {/* {item?.openningtimes} */}

                                                <p className='p_gray_14'> {""}<br />
                                                    {item?.openingDay ? item?.openingDay : item?.openningtimes || "NO Time Provide"}
                                                    <br />
                                                    {item?.closingDay ? item?.closingDay : item?.openningtimes}
                                                </p>
                                            </div>
                                            <div className="col d-flex align-items-center gap-4">
                                                <button
                                                    onClick={() => {
                                                        navigate("/venue-detail")
                                                        dispatch(GetVenueDetailByPlaceIdfordetail(item?.place_id))
                                                        dispatch(GetAllImages(item?.place_id))
                                                    }}
                                                    className='btn_primary'>MORE DETAILS</button>
                                            </div>
                                        </div>

                                    </div>
                                ))}

                            </Slider> :
                            <div className='d-flex justify-content-center align-items-center'>
                                No Venues Detail found add venue for detail
                            </div>
                    }


                </div>
            </div>




        </>
    )
}

export default EventAndVenueDetail