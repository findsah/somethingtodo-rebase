import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import Slider from 'react-slick'
import { settings } from '../../../../config/helper'
import TopVanuesCard from '../../components/TopVanuesCard'
import vanueImg from '../../../../assets/vanue1.png'
import Dropdown from 'react-bootstrap/Dropdown';
import AOS from 'aos';
import { MdLocationPin } from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { AiOutlineClockCircle } from 'react-icons/ai'
import 'aos/dist/aos.css';
export default function VanueDetails() {
    return (
        <div className='container main-vanue-detail'>
            <Row className='justify-content-between slider-section'>
                <Col lg={12} className="text-end">jjjj</Col>
                <Col xs={12} lg={12}>
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


            </Row>
            <div className="row d-flex justify-content-center detail-sec">
                <div className="col-12 mt-5">
                    <div className='eventDetailHighlight'></div>
                    <h1 className=''>EVENT DETAILS</h1>
                </div>

                <div className="col-lg-6 col-sm-12 justify-content-center">
                    <div className="row">
                        <div className="col-4">
                            <h2>Starts at:</h2>
                        </div>
                        <div className="col-8">
                            <h2><span>Insert Venue Name Here</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="col-4">
                            <h2>Then:</h2>
                        </div>
                        <div className="col-8">
                            <h2><span>Insert Venue Name Here</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="col-4">
                            <h2>Ends at:</h2>
                        </div>
                        <div className="col-8">
                            <h2><span>Insert Venue Name Here</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                </div>
                <div className="col-5">
                    <Card className='card'>
                        <Card.Img variant="top" src={vanueImg} />
                        <Card.Body>
                            <div className="row">

                                <div className="col-6">
                                    <BsGlobe className='icon-style' /><span>www.website.com</span>
                                </div>
                                <div className="col-6">
                                    <FaPhoneAlt className='icon-style' /><span>888-888-888 / 999-999-999</span>
                                </div>
                                <div className="col-12 mt-4">
                                    <IoMdMail className='icon-style' /><span>emailaddress@gmail.com</span>
                                </div>
                                <div className="col-9 mt-4">
                                    <div className="row">
                                        <div className='col-1'>
                                            <MdLocationPin className='icon-style' />
                                        </div>
                                        <div className="col-9">
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
            </div>
        </div>                                    
    )                                    
}
