import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import Slider from 'react-slick'
import { settings } from '../../../../config/helper'
import DateCard from '../../components/DateCard'
import vanueImg from '../../../../assets/vanue1.png'
import Dropdown from 'react-bootstrap/Dropdown';
import AOS from 'aos';
import { MdLocationPin } from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { AiOutlineClockCircle, AiOutlineStar } from 'react-icons/ai'
import 'aos/dist/aos.css';
import CustomButton from "../../../../components/form/CustomButton";
import TopVanuesCard from '../../components/TopVanuesCard'
import SimilarVanues from '../../components/SimilarVanues'

export default function VanueDetails() {
    return (
        <>
            <div className='container main-vanue-detail'>
                <div className=' row justify-content-end slider-section'>
                    <div className="text-end mt-5 col-lg-3 col-md-4 col-sm-6 col-8">
                        <Card className='card'>
                            <Card.Body>
                                <div className="row d-flex">

                                    <div className="col-12 mt-2 d-flex">
                                        <span>4.2</span>
                                        <span><AiOutlineStar className='icon-style' /></span>
                                        <span><AiOutlineStar className='icon-style' /></span>
                                        <span><AiOutlineStar className='icon-style' /></span>
                                        <span><AiOutlineStar className='icon-style' /></span>
                                    </div>
                                    <div className="col-12 mt-2 d-flex">
                                        <span>8.8</span>
                                        <span className='review'>Google Reviews</span>

                                    </div>
                                    <div className="col-12 mt-2 d-flex">
                                        <span>$$$</span>
                                        <span className='review'>| Pub</span>

                                    </div>


                                </div>


                            </Card.Body>
                        </Card>
                    </div>
                    <Col xs={12} lg={12} className="mt-5">
                        <Slider {...settings} >
                            <div className="col-4">
                                <img src={vanueImg} alt="" className='vanue-img' />
                            </div>
                            <div className="col-4">
                                <img src={vanueImg} alt="" className='vanue-img' />
                            </div>
                            <div className="col-4">
                                <img src={vanueImg} alt="" className='vanue-img' />
                            </div>
                            <div className="col-4">
                                <img src={vanueImg} alt="" className='vanue-img' />
                            </div>
                        </Slider>
                    </Col>


                </div>
                <div className="row d-flex justify-content-center detail-sec">
                    <div className="col-12 mt-5">
                        <div className='eventDetailHighlight'></div>
                        <h1 className=''>EVENT DETAILS</h1>
                    </div>

                    <div className="col-lg-6 col-sm-12 justify-content-center">
                        <div className="row">
                            <div className="col-lg-4 col-3">
                                <h2>Starts at:</h2>
                            </div>
                            <div className="col-lg-8 col-9">
                                <h2><span>Insert Venue Name Here</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                    ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="col-lg-4 col-3">
                                <h2>Then:</h2>
                            </div>
                            <div className="col-lg-8 col-9">
                                <h2><span>Insert Venue Name Here</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                    ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="col-lg-4 col-3">
                                <h2>Ends at:</h2>
                            </div>
                            <div className="col-lg-8 col-9">
                                <h2><span>Insert Venue Name Here</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                    ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-5 col-md-8">
                        <Card className='card'>
                            <div className='event_map'>
                                <div class="mapouter">
                                    <div class="gmap_canvas">
                                        <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=346&amp;height=850&amp;hl=en&amp;q=lahore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                        </iframe>
                                        {/* <a href="https://piratebay-proxys.com/">Piratebay</a> */}
                                    </div>

                                </div>
                            </div>
                            {/* <Card.Img variant="top" src={vanueImg} /> */}
                            <Card.Body>
                                <div className="row">

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <BsGlobe className='icon-style' /><span>www.website.com</span>
                                    </div>
                                    <div className="col-lg-6  col-12 span-2">
                                        <FaPhoneAlt className='icon-style ' /><span>888-888-888 / 999-999-999</span>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <IoMdMail className='icon-style' /><span>emailaddress@gmail.com</span>
                                    </div>
                                    <div className="col-9 mt-4">
                                        <div className="row">
                                            <div className='col-1'>
                                                <MdLocationPin className='icon-style' />
                                            </div>
                                            <div className=" col-lg-9 col-md-6 col-10">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Nunc vulputate libero et velit interdum, ac aliquet odio mattis</p>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="col-10">
                                        <AiOutlineClockCircle className='icon-style' /> <span>Monday - Su - 11.30 P.M.</span>
                                    </div>
                                </div>


                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 mt-5">
                        <div className="row ">
                            <Slider {...settings} >
                                {
                                    [1, 2, 3, 4, 5, 6, 7].map(item => (

                                        <Card className='card raiting-card'>
                                            <Card.Body>
                                                <div className="row d-flex justify-content-center">
                                                    <div className="col-lg-12 col-12 text-center  " >
                                                        <span className='circle'></span>
                                                    </div>
                                                    <div className="col-12 mt-4 d-flex justify-content-center">
                                                        <AiOutlineStar className='raitng-icon' />
                                                        <AiOutlineStar className='raitng-icon' />
                                                        <AiOutlineStar className='raitng-icon' />
                                                        <AiOutlineStar className='raitng-icon' />
                                                        <AiOutlineStar className='raitng-icon' />

                                                    </div>
                                                    <div className="col-12 mt-2 ">
                                                        <div className="row d-flex justify-content-center">
                                                            <div className="col-9">
                                                                <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                    Nunc vulputate libero et velit interdum, ac aliquet odio mattis</p>
                                                            </div>
                                                        </div>


                                                    </div>

                                                </div>


                                            </Card.Body>
                                        </Card>

                                    ))
                                }
                            </Slider>
                        </div>

                    </div>
                </div>

            </div>
            <div className="container-fluid suggested-vanue mt-5">
                <div className="container">
                    <div className="row ">
                        <div data-aos="fade-right" className="aos-init aos-animate happen-wrapper col-12">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-4 col-6 d-none  d-lg-block">
                                    <p className="happen-text tex-center">
                                        SUGGEST <br /> EVENTS <br />WITH <br />
                                        <span> This vanue</span>
                                    </p>
                                </div>
                                <div className='col-lg-4 col-6 d-none d-lg-block'>
                                    <div className="date-cards">
                                        <DateCard />
                                    </div>
                                </div>
                                <div className='col-lg-4 col-6 d-none d-lg-block'>
                                    <div className="date-cards">
                                        <DateCard />
                                    </div>
                                </div>
                                <div className="date-cards d-sm-block d-md-block d-lg-none">
                                    <Slider {...settings}>
                                        {
                                            [1, 2, 3, 4, 5, 6].map(item => (
                                                <DateCard />
                                            ))
                                        }
                                    </Slider>
                                </div>
                                <div className='col-lg-4 col-6 d-none d-lg-block'>
                                    <div className="date-cards">
                                        <DateCard />
                                    </div>
                                </div><div className='col-lg-4 col-6 d-none d-lg-block'>
                                    <div className="date-cards">
                                        <DateCard />
                                    </div>
                                </div><div className='col-lg-4 mb-3 col-6 d-none d-lg-block'>
                                    <div className="date-cards">
                                        <DateCard />
                                    </div>
                                </div>
                                <CustomButton text="view More" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <SimilarVanues />
        </>


    )
}
