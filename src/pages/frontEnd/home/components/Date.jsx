import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdDateRange } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { BsChatSquare } from "react-icons/bs";
export default function Date() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 p-0">
                    <div className="bg-img1">
                        <div className="section1-content" data-aos="fade-in">
                            <p className="para1"> LOOKING FOR A DATE ?</p>
                            <p className="para2">
                                Find Somethingtodo with someone who shares your interest
                            </p>
                            <button className="button1"> SEE ALL DATES</button>
                        </div>
                    </div>
                    <div className="container check" style={{ border: "1px solid red" }}>
                        <Slider {...settings}>
                            <div className="event-card">
                                <div className="event-card-img">
                                    <img
                                        className="d-card-img"
                                        src='https://lh3.googleusercontent.com/places/AAcXr8oy5nLr37DoPny7EN4vmjtl8_3suBAjHd5ZDRztyeIKeHfZ6YNbXGZjQz4BA9Nhz7XvF5CpAoMuv0bg7-xFv7gq2ArASnqQbDA=s1600-w400'
                                        alt="card-img"
                                    />
                                </div>
                                <div className="row dcard-row">
                                    <div className="col-3 for-color">
                                        <div className="cdate1">
                                            01
                                        </div>
                                        <div className="cdate2">
                                            12
                                        </div>
                                        <div className="cdate3">
                                            2022
                                        </div>
                                    </div>
                                    <div className="col-9" style={{ position: "relative" }}>
                                        <div className="card-content1">
                                            <p className="dhead">
                                                Event title
                                            </p>
                                            <p className="dhead-2 text-muted">
                                                Event Description
                                            </p>
                                        </div>
                                        <div className="dcard-content2 mt-2">
                                            <MdDateRange className="sub" />
                                            <p className="cdate">
                                                Date
                                            </p>
                                            <BiDollar className="sub2" />
                                            <p className="cpaid">
                                                codt
                                            </p>
                                        </div>

                                        <img className="user-img" src='https://lh3.googleusercontent.com/places/AAcXr8oy5nLr37DoPny7EN4vmjtl8_3suBAjHd5ZDRztyeIKeHfZ6YNbXGZjQz4BA9Nhz7XvF5CpAoMuv0bg7-xFv7gq2ArASnqQbDA=s1600-w400' alt="user" />

                                        <div className="event-card-chat">
                                            <div className="chatOptionDiv" >
                                                <div>
                                                    <div className="row1">
                                                        <BsChatSquare /><span style={{ marginLeft: "8px", fontSize: "9px" }}>Live Chat</span>
                                                    </div>
                                                    <div className="last-content">
                                                        <img className="user-img-2" src='https://lh3.googleusercontent.com/places/AAcXr8oy5nLr37DoPny7EN4vmjtl8_3suBAjHd5ZDRztyeIKeHfZ6YNbXGZjQz4BA9Nhz7XvF5CpAoMuv0bg7-xFv7gq2ArASnqQbDA=s1600-w400' alt="user" />
                                                        <img className="user-img-2" src='https://lh3.googleusercontent.com/places/AAcXr8oy5nLr37DoPny7EN4vmjtl8_3suBAjHd5ZDRztyeIKeHfZ6YNbXGZjQz4BA9Nhz7XvF5CpAoMuv0bg7-xFv7gq2ArASnqQbDA=s1600-w400' alt="user" />
                                                        <img className="user-img-2" src='https://lh3.googleusercontent.com/places/AAcXr8oy5nLr37DoPny7EN4vmjtl8_3suBAjHd5ZDRztyeIKeHfZ6YNbXGZjQz4BA9Nhz7XvF5CpAoMuv0bg7-xFv7gq2ArASnqQbDA=s1600-w400' alt="user" />
                                                        <img className="user-img-2" src='https://lh3.googleusercontent.com/places/AAcXr8oy5nLr37DoPny7EN4vmjtl8_3suBAjHd5ZDRztyeIKeHfZ6YNbXGZjQz4BA9Nhz7XvF5CpAoMuv0bg7-xFv7gq2ArASnqQbDA=s1600-w400' alt="user" />
                                                        <p className="others text-muted">& 12 others {">"}</p>

                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="set-pd">
                                                        <p className="price-txt">
                                                            $55
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
