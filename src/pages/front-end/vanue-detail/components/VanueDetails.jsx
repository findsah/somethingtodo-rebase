import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import { settings } from '../../../../config/helper'
import TopVanuesCard from '../../components/TopVanuesCard'
import vanueImg from '../../../../assets/vanue1.png'

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
                    <h1>EVENT DETAILS</h1>
                    <div className='eventDetailHighlight'></div>
                </div>
                <div className="col-4 mt-5">
                    <div className="row mt-5">
                        <div className="col-12">
                            <h2>Starts at: <span>Insert Venue Name Here</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="col-12 mt-4">
                            <h2>Then: <span className='span1'>Insert Venue Name Here</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="col-12 mt-4">
                            <h2>Ends at: <span className='span2'>Insert Venue Name Here</span></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                    </div>

                </div>
                <div className="col-4">lllll</div>
            </div>
        </div>
    )
}
