import React, { useEffect } from 'react'
import Logo from '../../../assets/logo/Logo.svg'
import starFill from '../../../assets/icons/starFill.svg'
import starNotFill from '../../../assets/icons/starUnFill.svg'
import dummy from '../../../assets/dummy1.png'
import Slider from 'react-slick'
import websiteIcon from '../../../assets/icons/website.svg'
import phoneIcon from '../../../assets/icons/phone.svg'
import emailIcon from '../../../assets/icons/email.svg'
import locationIcon from '../../../assets/icons/location.svg'
import clockblue from '../../../assets/icons/clockblue.svg'
const VenueDetail = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='venue_detail_event'>
                <div className="section_one_wrapper_light_blue">
                    <div className="section_one_wrapper_drak_blue">
                        <div className='inner_section'>
                            <img className='logo' src={Logo} alt="logo" />
                            <div className='inner_content'>
                                <h1>LOREM IPSUM DOLOR SIT AMET</h1>
                                <p>
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    LOREM IPSUM DOLOR SIT AMET
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='rating_card_container'>
                        <div className='star_rating'>
                            <span>4.2</span>
                            <div className='stars'>
                                <img src={starFill} alt="starFill" />
                                <img src={starNotFill} alt="starNotFill" />
                                <img src={starNotFill} alt="starNotFill" />
                                <img src={starNotFill} alt="starNotFill" />
                                <img src={starNotFill} alt="starNotFill" />
                            </div>
                        </div>
                        <div className='inline-item'>
                            <p>888</p>
                            <p>Google Reviews</p>
                        </div>
                        <div className='inline-item'>
                            <p>$$$</p>
                            <p>|</p>
                            <p>Pub</p>
                        </div>

                    </div>
                </div>
                <div className="slider_section">
                    <Slider
                        slidesToShow={3}
                    >
                        <div className='image_design'>
                            <img src={dummy} alt="" />
                        </div>
                        <div className='image_design'>
                            <img src={dummy} alt="" />
                        </div>
                        <div className='image_design'>
                            <img src={dummy} alt="" />
                        </div>
                        <div className='image_design'>
                            <img src={dummy} alt="" />
                        </div>
                    </Slider>



                </div>
                <div className="venue_details_container">
                    <h2>VENUE DETAILS</h2>
                    <div className='line_bar'></div>
                    <div className='venue_detail_info_container'>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 d-flex justify-content-center ">
                                <div className='venue_detail-info'>
                                    <h4 className='p_blue_size_20'>Venue Name</h4>
                                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12  ">
                                <div className='venue_detail-map'>
                                    <div className='map'>
                                        map
                                    </div>
                                    <div className='venue_detail_map_info'>
                                        <div className='line_row row'>
                                            <div className='aligment col-md-6 col-sm-12'>
                                                <img src={websiteIcon} alt="" />
                                                <span>www.website.com</span>
                                            </div>

                                            <div className='aligment col-md-6 col-sm-12'>
                                                <img src={phoneIcon} alt="" />
                                                <span>888-888-888 / 999-999-999</span>
                                            </div>
                                        </div>
                                        <div className='line_row row'>
                                            <div className='aligment col-md-6 col-sm-12'>
                                                <img src={locationIcon} alt="" />
                                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit </span>
                                            </div>

                                            <div className='aligment col-md-6 col-sm-12'>
                                                <img src={emailIcon} alt="" />
                                                <span>emailaddress@gmail.com</span>
                                            </div>
                                        </div>
                                        <div className='line_row'>
                                            <div className='aligment'>
                                                <img src={clockblue} alt="" />
                                                <span>Monday - Sunday10 A.M. - 11.30 P.M.</span>
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="section_four">
                    carousel
                </div>
                <div className="section_five">
                    suggest event
                </div>
                <div className="section_six">
                    similar venue
                </div>

            </div>
        </>

    )
}

export default VenueDetail