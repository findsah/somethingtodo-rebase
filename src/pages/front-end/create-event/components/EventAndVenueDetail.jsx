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


const EventAndVenueDetail = () => {
    const [open, setOpen] = useState(false)


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
                        {/* iframe */}
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=346&amp;height=850&amp;hl=en&amp;q=lahore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                </iframe>
                                <a href="https://piratebay-proxys.com/">Piratebay</a>
                            </div>

                        </div>
                    </div>
                    <div className="col info">
                        <div className='inline'>
                            <img src={dollar} alt="" />
                            <p className='p_gray_14'> $30/  PAX </p>
                        </div>
                        <div className='inline'>
                            <img src={calendarblue} alt="" />
                            <p className='p_gray_14'>  22 JUNE 2021 </p>

                        </div>
                        <div className='inline'>
                            <img src={clockblue} alt="" />
                            <p className='p_gray_14'> 7.00 P.M. - 11/30 P.M. </p>

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
                    <div className="col ">
                        <div className='card'>
                            <img src={eventimg} alt="" width="464px" height="207px" />
                            <p className='p_blue_size_20 text-center'>Insert Venue Name Here</p>
                            <div className="row info">
                                <div className="col d-flex align-items-center gap-4">
                                    <img src={websiteIcon} alt="icon" width="30px" height="30px" />
                                    <p className='p_gray_14'>www.website.com</p>
                                </div>
                                <div className="col d-flex align-items-center gap-4">
                                    <img src={phoneIcon} alt="icon" width="30px" height="30px" />
                                    <p className='p_gray_14'>888-888-888 </p>
                                </div>
                            </div>

                            <div className="row info">
                                <div className="col d-flex align-items-center gap-4">
                                    <img src={emailIcon} alt="icon" width="30px" height="30px" />
                                    <p className='p_gray_14'>emailaddress@gmail.com</p>
                                </div>
                            </div>

                            <div className="row info">
                                <div className="col d-flex align-items-center gap-4">
                                    <img src={locationIcon} alt="icon" width="30px" height="30px" />
                                    <p className='p_gray_14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis</p>
                                </div>
                            </div>
                            <div className="row info">
                                <div className="col d-flex align-items-center gap-4">
                                    <img src={clockblue} alt="icon" width="30px" height="30px" />
                                    <p className='p_gray_14'> Monday - Sunday <br />
                                        10 A.M. - 11.30 P.M.</p>
                                </div>
                                <div className="col d-flex align-items-center gap-4">
                                    <button className='btn_primary'>MORE DETAILS</button>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col ">
                        <div className='card'>
                            <img src={eventimg} alt="" width="464px" height="207px" />
                            <p className='p_blue_size_20 text-center'>Insert Venue Name Here</p>
                            <div className="row info">
                                <div className="col d-flex align-items-center gap-4">
                                    <img src={websiteIcon} alt="icon" width="30px" height="30px" />
                                    <p className='p_gray_14'>www.website.com</p>
                                </div>
                                <div className="col d-flex align-items-center gap-4">
                                    <img src={phoneIcon} alt="icon" width="30px" height="30px" />
                                    <p className='p_gray_14'>888-888-888 </p>
                                </div>
                            </div>

                            <div className="row info">
                                <div className="col d-flex align-items-center gap-4">
                                    <img src={emailIcon} alt="icon" width="30px" height="30px" />
                                    <p className='p_gray_14'>emailaddress@gmail.com</p>
                                </div>
                            </div>

                            <div className="row info">
                                <div className="col d-flex align-items-center gap-4">
                                    <img src={locationIcon} alt="icon" width="30px" height="30px" />
                                    <p className='p_gray_14'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis</p>
                                </div>
                            </div>
                            <div className="row info">
                                <div className="col d-flex align-items-center gap-4">
                                    <img src={clockblue} alt="icon" width="30px" height="30px" />
                                    <p className='p_gray_14'> Monday - Sunday <br />
                                        10 A.M. - 11.30 P.M.</p>
                                </div>
                                <div className="col d-flex align-items-center gap-4">
                                    <button className='btn_primary'>MORE DETAILS</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default EventAndVenueDetail