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


const EventAndVenueDetail = ({ addedVenues, timeandpriceData }) => {
    const [open, setOpen] = useState(false)

    var settings = {
        slidesToShow: 2,
        className: "center",
        centerMode: true,
    }
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
                        <MapModal position={[51.505, -0.09]} data={[]} />
                    </div>
                    <div className="col info">
                        <div className='inline'>
                            <img src={dollar} alt="" />
                            <p className='p_gray_14'> ${timeandpriceData?.eventCost[1]}/  PAX </p>
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
                            <div className="col-9">
                                <h6> Insert Venue Name Here</h6>
                                <p className='p_gray_14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-3">
                                <h6>Then:</h6>
                            </div>
                            <div className="col-9">
                                <h6> Insert Venue Name Here</h6>
                                <p className='p_gray_14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-3">
                                <h6>Ends at:</h6>
                            </div>
                            <div className="col-9">
                                <h6> Insert Venue Name Here</h6>
                                <p className='p_gray_14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
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
                        addedVenues?.length > 0 ?
                            <Slider {...settings}>
                                {
                                    addedVenues?.map((item) => {

                                        console.log(item)
                                        console.log(item?.opening_hours?.isOpen())
                                        return (
                                            // <div className="col ">
                                            <div className='card' id={item?.id || item?.place_id}>
                                                {
                                                    item?.photos ?

                                                        item?.photos?.map(photo => {

                                                            return <img src={photo?.getUrl() ? photo?.getUrl() : dummy} alt="" width="464px" height="207px" />


                                                        }) :
                                                        <img src={dummy} alt="" />
                                                }
                                                {/* <img src={item?.photos ? item?.photos?.getUrl() : dummy} alt="" width="464px" height="207px" /> */}
                                                {/* <img src={item?.photos[0]?.getUrl()} alt="" width="464px" height="207px" /> */}
                                                <p className='p_blue_size_20 text-center pb-3'>{item?.Title || item?.name}</p>
                                                <div className="row info">
                                                    <div className="col d-flex align-items-center gap-4">
                                                        <img src={websiteIcon} alt="icon" width="30px" height="30px" />
                                                        <p className='p_gray_14'>{item?.website}</p>
                                                    </div>
                                                    <div className="col d-flex align-items-center gap-4">
                                                        <img src={phoneIcon} alt="icon" width="30px" height="30px" />
                                                        <p className='p_gray_14'>{item?.phone} </p>
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
                                                        <p className='p_gray_14'> {item?.location || item?.vicinity}</p>
                                                    </div>
                                                </div>
                                                <div className="row info">
                                                    <div className="col d-flex align-items-center gap-4">
                                                        <img src={clockblue} alt="icon" width="30px" height="30px" />
                                                        <p className='p_gray_14'> {item?.openningday || item?.opening_hours?.isOpen()}<br />
                                                            {item?.openningtimes}</p>
                                                    </div>
                                                    <div className="col d-flex align-items-center gap-4">
                                                        <button className='btn_primary'>MORE DETAILS</button>
                                                    </div>
                                                </div>

                                            </div>

                                            // </div>
                                        )
                                    }

                                    )}


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