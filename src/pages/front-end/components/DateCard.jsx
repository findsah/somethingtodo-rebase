import React from 'react'
import { FaCalendarCheck } from "react-icons/fa";
import { MdLocationOn, MdLocationPin } from 'react-icons/md';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsChatLeftDots, BsChatSquare } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import vanueImg from '../../../assets/Rectangle 11.jpg';
import dateicon from '../../../assets/dateicon.svg';
import currncyicon from '../../../assets/dollaricon.svg';
import { Card, Row, Col } from 'react-bootstrap';
import User from "../../../assets/nouser.png";


const DateCard = () => {

    return (
        <>
            <Row className=''>
                <Col lg={11} >
                    <Card className='date-card-style' >
                        <Card.Img variant="top" src={vanueImg} />
                        <div className='card-custom-Body'>
                            <div className='blue-side'>
                                <p>
                                    12<br />
                                    jun<br />
                                    <span>2022</span>
                                </p>
                            </div>
                            <Card.Body>
                                <Card.Title>LOREM IPSUM DOLOR SIT AMET</Card.Title>
                                <Card.Text className='desc'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </Card.Text>
                                <div className="row">
                                    <div className="col-12">
                                        <div className='address-date-host'>
                                            <div className="row">
                                                <div className="col-lg-4 col-12">
                                                    <p className='address'>
                                                        <MdLocationPin />Address
                                                    </p>

                                                </div>
                                                <div className="col-2">
                                                    <p className='address'>
                                                        <img src={dateicon} alt="dateicon" />Date
                                                    </p>
                                                </div>
                                                <div className="col-lg-6 col-8 d-flex justify-content-end">
                                                    <p className='address'>
                                                        <img src={currncyicon} alt="dateicon" />paid by host
                                                    </p>
                                                </div>


                                            </div>


                                        </div>
                                    </div>
                                </div>
                                {/* <div className='address-date-host'>
                                    <p className='address'>
                                        <MdLocationPin />Address
                                    </p>
                                    <div className='date-host'>
                                        <p className='address'>
                                            <img src={dateicon} alt="dateicon" />Date
                                        </p>
                                        <p className='address'>
                                            <img src={currncyicon} alt="dateicon" />paid by host
                                        </p>
                                    </div>
                                </div> */}
                                <img src={vanueImg} alt="dateicon" className='profile-img' />
                                <div className="event-card-chat">
                                    <div>
                                        <p className='chat'>
                                            <BsChatSquare />Live Chat
                                        </p>
                                        <div className="last-content">
                                            {[1, 2, 3, 4, 5].map(item => (
                                                <img className="user-img-2" src={User} alt="user" />
                                            ))}
                                            <p className="others text-muted">& 12 others {">"}</p>
                                        </div>
                                    </div>
                                    <p className="price-txt">
                                        $45
                                    </p>
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <Row className=''>
                <Col lg={11} >
                    <Card className='top-vanues-card-style'>
                        <Card.Img variant="top" src={vanueImg} />
                        <div className='card-custom-Body'>
                            <Card.Body>
                                <Card.Title>LOREM IPSUM DOLOR SIT AMET</Card.Title>
                                <Card.Text className='address'>
                                    <MdLocationPin className='loction-icon' />Address
                                </Card.Text>
                            </Card.Body>
                            <div className='blue-side'>
                                <p>
                                    2022<br />
                                    march<br />
                                    <span>16 - 22</span>
                                </p>
                            </div>
                        </div>
                        <hr />

                        <div className='date-host'>
                            <p className='address'>
                                <img src={dateicon} alt="dateicon" />Date
                            </p>
                            <p className='address'>
                                <img src={currncyicon} alt="dateicon" />Paid by host
                            </p>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">
                                <div>
                                    <img src={vanueImg} alt="dateicon" className='profile-img' />
                                    <div className="event-card-chat">
                                        <div>
                                            <div className="last-content">
                                                {[1, 2, 3, 4, 5].map(item => (
                                                    <img className="user-img-2" src={User} alt="user" />
                                                ))}
                                                <p className="others text-muted">& 12 others {">"}</p>
                                            </div>
                                        </div>
                                        <p className="price-txt">
                                            $45
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">

                            </div>
                        </div>
                    </Card>
                </Col>
            </Row> */}

        </>
    )
}

export default DateCard