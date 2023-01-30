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
import DateCard from '../components/DateCard'
import SimilarVanues from '../components/SimilarVanues'
import { useSelector } from 'react-redux'
import SimpleMapLocation from '../components/SimpleMapLocation'
const VenueDetail = () => {

    const { getAllImages, getVenueDetailByPlaceIdfordetail } = useSelector((state) => state?.createEventSlice)
    const settings = {
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        // speed: 1000,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    // centerPadding: '60px',

                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    lineHeight: 0,
                    centerMode: true,
                    // centerPadding: '40px',

                },
            },
        ],
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='venue_detail_event container'>
                <div className="section_one_wrapper_light_blue">
                    <div className="section_one_wrapper_drak_blue">
                        <div className='inner_section'>
                            <img className='logo' src={Logo} alt="logo" />
                            <div className='inner_content'>
                                <h1>{getVenueDetailByPlaceIdfordetail?.data?.name}</h1>
                                <p>
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    {getVenueDetailByPlaceIdfordetail?.data?.formatted_address}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='rating_card_container'>
                        <div className='star_rating'>
                            <span>{getVenueDetailByPlaceIdfordetail?.data?.rating}</span>
                            <div className='stars'>
                                <img src={starFill} alt="starFill" />
                                <img src={starNotFill} alt="starNotFill" />
                                <img src={starNotFill} alt="starNotFill" />
                                <img src={starNotFill} alt="starNotFill" />
                                <img src={starNotFill} alt="starNotFill" />
                            </div>
                        </div>
                        <div className='inline-item'>
                            <p>{getVenueDetailByPlaceIdfordetail?.data?.reviews?.length}</p>
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
                        {...settings}
                    >
                        {
                            getAllImages?.map((item, key) => (
                                <div className='image_design' key={key}>
                                    {/* <img src={dummy} alt="" /> */}
                                    <img src={`data:image/png;base64,${item?.data}`} />
                                </div>

                            ))

                        }

                    </Slider>



                </div>
                <div className="venue_details_container">
                    <h2>VENUE DETAILS</h2>
                    <div className='line_bar'></div>
                    <div className='venue_detail_info_container'>
                        <div className="row" style={{ width: "100%" }}>
                            <div className="col-md-6 col-sm-12 d-flex justify-content-center ">
                                <div className='venue_detail-info'>
                                    <h4 className='p_blue_size_20'>{getVenueDetailByPlaceIdfordetail?.data?.name}</h4>
                                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor
                                        sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12  ">
                                <div className='venue_detail-map'>
                                    <div className='map'>
                                        <SimpleMapLocation
                                            // latlng={[13.3, 73.0]}
                                            latlng={[getVenueDetailByPlaceIdfordetail?.data?.geometry?.location?.lat,
                                            getVenueDetailByPlaceIdfordetail?.data?.geometry?.location?.lng]}
                                        />
                                    </div>
                                    <div className='venue_detail_map_info'>
                                        <div className='line_row row'>
                                            <div className='aligment col-md-6 col-sm-12'>
                                                <img src={websiteIcon} alt="" />
                                                <span>{getVenueDetailByPlaceIdfordetail?.data?.website || "No Website"}</span>
                                            </div>

                                            <div className='aligment col-md-6 col-sm-12'>
                                                <img src={phoneIcon} alt="" />
                                                <span>{getVenueDetailByPlaceIdfordetail?.data?.formatted_phone_number}</span>
                                            </div>
                                        </div>
                                        <div className='line_row row'>
                                            <div className='aligment col-md-6 col-sm-12'>
                                                <img src={locationIcon} alt="" />
                                                <span>{getVenueDetailByPlaceIdfordetail?.data?.formatted_address} </span>
                                            </div>

                                            <div className='aligment col-md-6 col-sm-12'>
                                                <img src={emailIcon} alt="" />
                                                <span>{getVenueDetailByPlaceIdfordetail?.data?.email || "Email Not provide"} </span>
                                            </div>
                                        </div>
                                        <div className='line_row'>
                                            <div className='aligment'>
                                                <img src={clockblue} alt="" />
                                                {getVenueDetailByPlaceIdfordetail?.data?.opening_hours?.weekday_text ? getVenueDetailByPlaceIdfordetail?.data?.opening_hours?.weekday_text[0] : "-"}
                                                <br />
                                                {getVenueDetailByPlaceIdfordetail?.data?.opening_hours ? getVenueDetailByPlaceIdfordetail?.data?.opening_hours?.weekday_text[6] : "-"}
                                                {/* <span>Monday - Sunday10 A.M. - 11.30 P.M.</span> */}
                                            </div>


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="carousel_container">
                    <Slider
                        {...settings}
                    >{
                            getVenueDetailByPlaceIdfordetail?.data?.reviews?.map((item, index) => {


                                return (
                                    <div className='feed_back_container' key={index}>
                                        <img src={item?.profile_photo_url} className='avatar' alt="" />

                                        <div className='stars'>
                                            {/* {
                                                item?.rating >  
                                            } */}
                                            <img src={starFill} alt="starFill" />
                                            <img src={starNotFill} alt="starNotFill" />
                                            <img src={starNotFill} alt="starNotFill" />
                                            <img src={starNotFill} alt="starNotFill" />
                                            <img src={starNotFill} alt="starNotFill" />
                                        </div>
                                        <p>“ {item?.text.substring(0, 250)} ”</p>
                                    </div>
                                )
                            })
                        }


                    </Slider>
                </div>
                {/* <div className="suggest_event_container ">
                    <div className="row">
                        <div className="col-md-5">
                            <h2>
                                SUGGESTED <br /> EVENTS <br /> WITH
                            </h2>
                            <h3>THIS VENUE</h3>
                        </div>
                        <div className='col-md-7'>
                            card
                         
                        </div>

                    </div>
                </div> */}
                <div className="similar_venue">
                    <SimilarVanues />
                </div>

            </div>
        </>

    )
}

export default VenueDetail