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
import dateicon from '../../../../assets/datewhiteicon.svg';
import currncyicon from '../../../../assets/currnecywhiteicon.svg';
import { GrFacebook } from "react-icons/gr";
import { ImTwitter } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import MobileScreenCard from "../../components/MobileScreenCard";
export default function ReadyEvents() {
    return (
        <>
            <div className="container-fluid main-readyEvent">
                <Row >
                    <div className="col-lg-4 col-md-4 col-4 p-0 d-flex align-items-center  ">
                        <Row className="justify-content-end">
                            <Col lg={9} className=" d-none d-md-block d-lg-block">
                                <h2> READY TO GO! </h2>
                            </Col>
                            <Col lg={9} className="align-items-start d-none d-md-block d-lg-block">
                                <p>
                                    Don't miss these events which are <br /> starting very soon!
                                </p>
                                <CustomButton text="view all" />
                            </Col>
                        </Row>
                    </div>
                    <div className="col-lg-8 col-md-8 col-8 p-0 ready-card   d-none d-md-block d-lg-block ">
                        <Slider {...settings3}>
                            {
                                [1, 2, 3, 4, 5, 6].map(item => (
                                    <StartEventCard />
                                ))
                            }
                        </Slider>
                    </div>

                </Row>
                <Slider {...settings3}>
                    {
                        [1, 2, 3, 4, 5, 6].map(item => (
                            <MobileScreenCard />
                        ))
                    }
                </Slider>

            </div>
            <div className="container-fluid power-up" style={{ overflowX: "hidden" }}>
                <p data-aos="fade-right"> POWER UP! </p>
            </div>
        </>
    )
}
