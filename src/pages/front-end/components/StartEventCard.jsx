import React, { useEffect, useState } from 'react'
import { MdDateRange, MdLocationPin } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { BsChatSquare } from "react-icons/bs";
import { FcNext } from "react-icons/fc";
import { AiFillDollarCircle } from "react-icons/ai";
import { Col, Row } from 'react-bootstrap'
import readyImg from '../../../assets/ready.png'
import CustomButton from "../../../components/form/CustomButton";
import vanueImg from '../../../assets/Rectangle 11.jpg';
import dateicon from '../../../assets/dateicon.svg';
import dollar from '../../../assets/dollaricon.svg';

const StartEventCard = () => {
    return (
        <>
            <Row className='ready-event-card'>
                <Col lg={5}>
                    <img className="card2-img img-fluid" src={readyImg} alt="simple" />
                </Col>
                <Col lg={7}>
                    <Row className="para-sec">
                        <Col lg={8}>
                            <h2>
                                LOREM IPSUM DOLOR SIT AMET
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </p>
                        </Col>
                        <Col lg={12}>
                            <div className="box-1">
                                <div>
                                    <p> Event Starts in </p>
                                    <div className="d-flex">
                                        <div className="box-2">
                                            <span>0-1 </span>
                                            <hr />
                                            <span className="span-2"> DAYS</span>
                                        </div>
                                        <div className="box-2">
                                            <span>12</span>
                                            <hr />
                                            <span className="span-2">HOURS</span>
                                        </div>
                                        <div className="box-2">
                                            <span>22</span>
                                            <hr />
                                            <span className="span-2">MINUTES</span>
                                        </div>
                                        <div className="box-2">
                                            <span >21</span>
                                            <hr />
                                            <span className="span-2">SECONDS</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <button className="join-but">JOIN NOW</button> */}
                                <CustomButton text='JOIN NOW' />
                            </div>
                            <div className="row last-row">
                                <div className="col-6 p-0">
                                    <img className="user-imge" src={vanueImg} alt="user" />
                                    <div className="usersDiv">
                                        <p className="text-muted">
                                            <BsChatSquare /> Live chat
                                        </p>
                                        <div className="last-content">
                                            <img className="user-img-2" src={vanueImg} alt="user" />
                                            <img className="user-img-2" src={vanueImg} alt="user" />
                                            <img className="user-img-2" src={vanueImg} alt="user" />
                                            <img className="user-img-2" src={vanueImg} alt="user" />
                                            <img className="user-img-2" src={vanueImg} alt="user" />
                                            <img className="user-img-2" src={vanueImg} alt="user" />
                                            <p className="others text-muted">& 12 others <FcNext /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex mt-2 justify-content-between">
                                        <p>
                                            <img src={dateicon} alt="dateicon" /> <span>Date</span>
                                        </p>
                                        <p>
                                            <img src={dollar} alt="crunncyicon" />  <span>paid by host</span>
                                        </p>

                                    </div>
                                    <div className="d-flex mt-2 justify-content-end">
                                        <p className="price-txt">
                                            $45.00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default StartEventCard