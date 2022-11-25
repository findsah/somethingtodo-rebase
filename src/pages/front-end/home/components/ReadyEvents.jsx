import React, { useEffect, useState } from "react";
import { MdDateRange, MdLocationPin } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { BsChatSquare } from "react-icons/bs";
import { FcNext } from "react-icons/fc";
import { AiFillDollarCircle } from "react-icons/ai";
import { Col, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import readyImg from '../../../../assets/ready.png'
import { settings, settings3 } from '../../../../config/helper'
import DateCard from '../../components/DateCard'
import StartEventCard from '../../components/StartEventCard'
import CustomButton from "../../../../components/form/CustomButton";
import vanueImg from '../../../../assets/Rectangle 11.jpg';
import dateicon from '../../../../assets/dateicon.svg';
import dollar from '../../../../assets/dollaricon.svg';

export default function ReadyEvents() {
    return (
        <>
            <div className="container-fluid main-readyEvent">
                <Row>
                    <div className="col-lg-4 col-md-4 col-4 p-0 d-flex align-items-center ">
                        <Row className="justify-content-end">
                            <Col lg={9} >
                                <h2> READY TO GO! </h2>
                            </Col>
                            <Col lg={9} className="align-items-start">
                                <p>
                                    Don't miss these events which are <br /> starting very soon!
                                </p>
                            </Col>
                        </Row>
                    </div>
                    <div className="col-lg-8 col-md-8 col-8 p-0 ready-card">
                        <Slider {...settings3}>
                            {
                                [1, 2, 3, 4, 5, 6].map(item => (
                                    <StartEventCard />
                                ))
                            }
                        </Slider>
                    </div>

                </Row>
                {/* <Row className='ready-togo'>

                    <Col lg={4} md={2}>
                        <h1> READY TO GO! </h1>
                        <p>
                            Don't miss these events which are starting very soon!
                        </p>
                    </Col>
                    <Col lg={8} md={12}>
                        <div className="start-event-card">
                            <StartEventCard />
                        </div>
                    </Col>
                </Row> */}
                {/* <div className="col-lg-4 col-12 ready-togo">
                        
                        <p className="dont">
                            Don't miss these events which are starting very soon!
                        </p>
                        <button className="view-but">VIEW ALL</button>
                    </div> */}

            </div>
            <div className="container-fluid power-up" style={{ overflowX: "hidden" }}>
                <p data-aos="fade-right"> POWER UP! </p>
            </div>
        </>
    )
}
