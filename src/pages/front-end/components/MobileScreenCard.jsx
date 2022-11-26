import React, { useEffect, useState } from "react";
import { MdDateRange, MdLocationPin } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { BsChatSquare } from "react-icons/bs";
import { FcNext } from "react-icons/fc";
import { AiFillDollarCircle } from "react-icons/ai";
import { Col, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import readyImg from '../../../assets/ready.png'
import CustomButton from "../../../components/form/CustomButton";
import vanueImg from '../../../assets/Rectangle 11.jpg';
import dateicon from '../../../assets/datewhiteicon.svg';
import currncyicon from '../../../assets/currnecywhiteicon.svg';
import { GrFacebook } from "react-icons/gr";
import { ImTwitter } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
export default function MobileScreenCard() {
    return (
        <div>
            <div className="row justify-content-center   small-screen-start-event">
                <div className="col-8 text-center">
                    <h2> READY TO GO! </h2>
                    <p>
                        Don't miss these events which are <br /> starting very soon!
                    </p>
                    <CustomButton text="view all" />
                </div>
            </div>
            <div className="row d-flex small-screen-start-event  ">
                <hr />
                <div className="col-4" >
                    <img className="img-fluid card-img" src={readyImg} alt="simple" />
                </div>
                <div className="col-8">
                    <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                    <div className="row d-flex date-time align-items-center justify-content-center">
                        <div className="col-2">
                            <p>0-1</p>
                            <p className="">DAYS</p>
                        </div>
                        <div className="col-1">
                            <p className="dot-style">:</p>
                        </div>
                        <div className="col-2">
                            <p>22</p>
                            <p className="span-2">HOURS</p>
                        </div>
                        <div className="col-1">
                            <p className="dot-style">:</p>
                        </div>
                        <div className="col-2">
                            <p>0-1</p>
                            <p className="span-2">MINUTES</p>
                        </div>
                        <div className="col-1">
                            <p className="dot-style">:</p>
                        </div>
                        <div className="col-2">
                            <p>0-1</p>
                            <p className="span-2">SECONDS</p>
                        </div>
                        <div className='address'>
                            <MdLocationPin className='loction-icon' /><span>Address</span>
                        </div>
                    </div>

                    <div className="date-host">
                        <p className=''>
                            <img src={dateicon} alt="dateicon" />Date
                        </p>
                        <p className=''>
                            <img src={currncyicon} alt="dateicon" />Paid by host
                        </p>
                        <p className=''>
                            <CustomButton text='JOIN NOW' />
                        </p>

                    </div>
                    <div className="row last-row">
                        <div className="col-6 p-0">
                            <img className="user-imge" src={vanueImg} alt="user" />
                            <div className="usersDiv">
                                <div className="last-content">
                                    <img className="user-img-2" src={vanueImg} alt="user" />
                                    <img className="user-img-2" src={vanueImg} alt="user" />
                                    <img className="user-img-2" src={vanueImg} alt="user" />
                                    <p className="others text-muted">Live Chat<FcNext /></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">

                            <div className="d-flex mt-2 justify-content-end">
                                <p className="price-txt">
                                    $45.00
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row d-flex p-3 shareDiv">

                <div className="col-6 text-center">
                    <h2>Share with friends:</h2>
                </div>
                <div className="col-6 text-center">
                    <CustomButton text="invite friend" />
                </div>
                <div className="row last-row mt-4">
                    <div className="col-6 p-0">
                        <img className="user-imge" src={vanueImg} alt="user" />
                        <div className="usersDiv">
                            <div className="last-content">
                                <img className="user-img-2" src={vanueImg} alt="user" />
                                <img className="user-img-2" src={vanueImg} alt="user" />
                                <img className="user-img-2" src={vanueImg} alt="user" />
                                <p className="others text-muted">Live Chat<FcNext /></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex mt-2 justify-content-end">
                            <div className="social-links ">
                                <a href=""><ImTwitter /></a>
                                <a href=""><SiInstagram /></a>
                                <a href=""><GrFacebook /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
