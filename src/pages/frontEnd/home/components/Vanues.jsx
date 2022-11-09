import React, { useEffect, useState } from 'react'
// import PlacesAutocomplete from 'react-places-autocomplete';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { MdDateRange } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { BsChatSquare } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Vanues() {
    const [address, setAddress] = useState("Lahore");

    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, [])
    const settings = {
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        slidesToShow: 3,
        // cssEase: "linear",
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
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div>
            <div className="">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-12" style={{ overflowX: "hidden" }}>
                            <div data-aos="fade-right" className="aos-init aos-animate">
                                <div className="happen">
                                    What's Happening Right Now in
                                    <span className="tron">TORONTO</span>
                                    <span className="highlight"></span>
                                </div>
                            </div>
                            <div className="autocompleteDiv">
                                <Dropdown>
                                    <Dropdown.Toggle variant="" className='cities' id="dropdown-basic">
                                        Change Loction
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 " style={{ border: "1px solid red" }}>
                            <div className="event-card">
                                <div className="event-card-img">
                                    <img
                                        className="d-card-img"
                                        src='https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588202699404-B8V1QQZ8SRO9GTVK8LC3/luxury-event-planner-nyc-new-england'
                                        alt="card-img"
                                    />
                                </div>
                                <div className="row dcard-row">

                                    <div className="col-12" >
                                        <div className="row justify-content-between">
                                            <div className="col-8">
                                                <div className="card-content1">
                                                    <p className="dhead">
                                                        LOREM IPSUM DOLOR SIT
                                                    </p>
                                                    <p className="dhead-2 text-muted pb-3 mt-2">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                                    </p>
                                                    <MdLocationOn /><span className='address'>Address</span>
                                                </div>
                                            </div>
                                            <div className="col-4  col-md-3 d-flex justify-content-center  align-items-center vanue-color" style={{ border: "1px solid red" }}>
                                                <div className='pr-3' style={{ border: "1px solid red" }}>
                                                    <p className='m-0 vdate1' >2021</p>
                                                    <p className='m-0 vdate2' >MARCH</p>
                                                    <p className='m-0 vdate3' >16<sup>th</sup>-22<sup>th</sup></p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 d-none d-lg-block" style={{ border: "1px solid red" }}>
                            <div className="event-card">
                                <div className="event-card-img">
                                    <img
                                        className="d-card-img"
                                        src='https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588202699404-B8V1QQZ8SRO9GTVK8LC3/luxury-event-planner-nyc-new-england'
                                        alt="card-img"
                                    />
                                </div>
                                <div className="row dcard-row">

                                    <div className="col-12" >
                                        <div className="row justify-content-between">
                                            <div className="col-8">
                                                <div className="card-content1">
                                                    <p className="dhead">
                                                        LOREM IPSUM DOLOR SIT
                                                    </p>
                                                    <p className="dhead-2 text-muted pb-3 mt-2">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                                    </p>
                                                    <MdLocationOn /><span className='address'>Address</span>
                                                </div>
                                            </div>
                                            <div className="col-4  col-md-3 d-flex justify-content-center  align-items-center vanue-color" style={{ border: "1px solid red" }}>
                                                <div className='pr-3' style={{ border: "1px solid red" }}>
                                                    <p className='m-0 vdate1' >2021</p>
                                                    <p className='m-0 vdate2' >MARCH</p>
                                                    <p className='m-0 vdate3' >16<sup>th</sup>-22<sup>th</sup></p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <Slider {...settings}>
                            <div className="col-lg-4 col-sm-12" style={{ border: "1px solid red" }}>
                                <div className="event-card">
                                    <div className="event-card-img">
                                        <img
                                            className="d-card-img"
                                            src='https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588202699404-B8V1QQZ8SRO9GTVK8LC3/luxury-event-planner-nyc-new-england'
                                            alt="card-img"
                                        />
                                    </div>
                                    <div className="row dcard-row">

                                        <div className="col-12" >
                                            <div className="row justify-content-between">
                                                <div className="col-8">
                                                    <div className="card-content1">
                                                        <p className="dhead">
                                                            LOREM IPSUM DOLOR SIT
                                                        </p>
                                                        <p className="dhead-2 text-muted pb-3 mt-2">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                                        </p>
                                                        <MdLocationOn /><span className='address'>Address</span>
                                                    </div>
                                                </div>
                                                <div className="col-4  col-md-3 d-flex justify-content-center  align-items-center vanue-color" style={{ border: "1px solid red" }}>
                                                    <div className='pr-3' style={{ border: "1px solid red" }}>
                                                        <p className='m-0 vdate1' >2021</p>
                                                        <p className='m-0 vdate2' >MARCH</p>
                                                        <p className='m-0 vdate3' >16<sup>th</sup>-22<sup>th</sup></p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12" style={{ border: "1px solid red" }}>
                                <div className="event-card">
                                    <div className="event-card-img">
                                        <img
                                            className="d-card-img"
                                            src='https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588202699404-B8V1QQZ8SRO9GTVK8LC3/luxury-event-planner-nyc-new-england'
                                            alt="card-img"
                                        />
                                    </div>
                                    <div className="row dcard-row">

                                        <div className="col-12" >
                                            <div className="row justify-content-between">
                                                <div className="col-8">
                                                    <div className="card-content1">
                                                        <p className="dhead">
                                                            LOREM IPSUM DOLOR SIT
                                                        </p>
                                                        <p className="dhead-2 text-muted pb-3 mt-2">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                                        </p>
                                                        <MdLocationOn /><span className='address'>Address</span>
                                                    </div>
                                                </div>
                                                <div className="col-4  col-md-3 d-flex justify-content-center  align-items-center vanue-color" style={{ border: "1px solid red" }}>
                                                    <div className='pr-3' style={{ border: "1px solid red" }}>
                                                        <p className='m-0 vdate1' >2021</p>
                                                        <p className='m-0 vdate2' >MARCH</p>
                                                        <p className='m-0 vdate3' >16<sup>th</sup>-22<sup>th</sup></p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12" style={{ border: "1px solid red" }}>
                                <div className="event-card">
                                    <div className="event-card-img">
                                        <img
                                            className="d-card-img"
                                            src='https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588202699404-B8V1QQZ8SRO9GTVK8LC3/luxury-event-planner-nyc-new-england'
                                            alt="card-img"
                                        />
                                    </div>
                                    <div className="row dcard-row">

                                        <div className="col-12" >
                                            <div className="row justify-content-between">
                                                <div className="col-8">
                                                    <div className="card-content1">
                                                        <p className="dhead">
                                                            LOREM IPSUM DOLOR SIT
                                                        </p>
                                                        <p className="dhead-2 text-muted pb-3 mt-2">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                                        </p>
                                                        <MdLocationOn /><span className='address'>Address</span>
                                                    </div>
                                                </div>
                                                <div className="col-4  col-md-3 d-flex justify-content-center  align-items-center vanue-color" style={{ border: "1px solid red" }}>
                                                    <div className='pr-3' style={{ border: "1px solid red" }}>
                                                        <p className='m-0 vdate1' >2021</p>
                                                        <p className='m-0 vdate2' >MARCH</p>
                                                        <p className='m-0 vdate3' >16<sup>th</sup>-22<sup>th</sup></p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12" style={{ border: "1px solid red" }}>
                                <div className="event-card">
                                    <div className="event-card-img">
                                        <img
                                            className="d-card-img"
                                            src='https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588202699404-B8V1QQZ8SRO9GTVK8LC3/luxury-event-planner-nyc-new-england'
                                            alt="card-img"
                                        />
                                    </div>
                                    <div className="row dcard-row">

                                        <div className="col-12" >
                                            <div className="row justify-content-between">
                                                <div className="col-8">
                                                    <div className="card-content1">
                                                        <p className="dhead">
                                                            LOREM IPSUM DOLOR SIT
                                                        </p>
                                                        <p className="dhead-2 text-muted pb-3 mt-2">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                                        </p>
                                                        <MdLocationOn /><span className='address'>Address</span>
                                                    </div>
                                                </div>
                                                <div className="col-4  col-md-3 d-flex justify-content-center  align-items-center vanue-color" style={{ border: "1px solid red" }}>
                                                    <div className='pr-3' style={{ border: "1px solid red" }}>
                                                        <p className='m-0 vdate1' >2021</p>
                                                        <p className='m-0 vdate2' >MARCH</p>
                                                        <p className='m-0 vdate3' >16<sup>th</sup>-22<sup>th</sup></p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div>
                        <Slider {...settings}>
                            <div className="col-lg-4 col-sm-12" style={{ border: "1px solid red" }}>
                                <div className="event-card">
                                    <div className="event-card-img">
                                        <img
                                            className="d-card-img"
                                            src='https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588202699404-B8V1QQZ8SRO9GTVK8LC3/luxury-event-planner-nyc-new-england'
                                            alt="card-img"
                                        />
                                    </div>
                                    <div className="row dcard-row">

                                        <div className="col-12" >
                                            <div className="row justify-content-between">
                                                <div className="col-8">
                                                    <div className="card-content1">
                                                        <p className="dhead">
                                                            LOREM IPSUM DOLOR SIT
                                                        </p>
                                                        <p className="dhead-2 text-muted pb-3 mt-2">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                                        </p>
                                                        <MdLocationOn /><span className='address'>Address</span>
                                                    </div>
                                                </div>
                                                <div className="col-4  col-md-3 d-flex justify-content-center  align-items-center vanue-color" style={{ border: "1px solid red" }}>
                                                    <div className='pr-3' style={{ border: "1px solid red" }}>
                                                        <p className='m-0 vdate1' >2021</p>
                                                        <p className='m-0 vdate2' >MARCH</p>
                                                        <p className='m-0 vdate3' >16<sup>th</sup>-22<sup>th</sup></p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12" style={{ border: "1px solid red" }}>
                                <div className="event-card">
                                    <div className="event-card-img">
                                        <img
                                            className="d-card-img"
                                            src='https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588202699404-B8V1QQZ8SRO9GTVK8LC3/luxury-event-planner-nyc-new-england'
                                            alt="card-img"
                                        />
                                    </div>
                                    <div className="row dcard-row">

                                        <div className="col-12" >
                                            <div className="row justify-content-between">
                                                <div className="col-8">
                                                    <div className="card-content1">
                                                        <p className="dhead">
                                                            LOREM IPSUM DOLOR SIT
                                                        </p>
                                                        <p className="dhead-2 text-muted pb-3 mt-2">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                                        </p>
                                                        <MdLocationOn /><span className='address'>Address</span>
                                                    </div>
                                                </div>
                                                <div className="col-4  col-md-3 d-flex justify-content-center  align-items-center vanue-color" style={{ border: "1px solid red" }}>
                                                    <div className='pr-3' style={{ border: "1px solid red" }}>
                                                        <p className='m-0 vdate1' >2021</p>
                                                        <p className='m-0 vdate2' >MARCH</p>
                                                        <p className='m-0 vdate3' >16<sup>th</sup>-22<sup>th</sup></p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12" style={{ border: "1px solid red" }}>
                                <div className="event-card">
                                    <div className="event-card-img">
                                        <img
                                            className="d-card-img"
                                            src='https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588202699404-B8V1QQZ8SRO9GTVK8LC3/luxury-event-planner-nyc-new-england'
                                            alt="card-img"
                                        />
                                    </div>
                                    <div className="row dcard-row">

                                        <div className="col-12" >
                                            <div className="row justify-content-between">
                                                <div className="col-8">
                                                    <div className="card-content1">
                                                        <p className="dhead">
                                                            LOREM IPSUM DOLOR SIT
                                                        </p>
                                                        <p className="dhead-2 text-muted pb-3 mt-2">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                                        </p>
                                                        <MdLocationOn /><span className='address'>Address</span>
                                                    </div>
                                                </div>
                                                <div className="col-4  col-md-3 d-flex justify-content-center  align-items-center vanue-color" style={{ border: "1px solid red" }}>
                                                    <div className='pr-3' style={{ border: "1px solid red" }}>
                                                        <p className='m-0 vdate1' >2021</p>
                                                        <p className='m-0 vdate2' >MARCH</p>
                                                        <p className='m-0 vdate3' >16<sup>th</sup>-22<sup>th</sup></p>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12" style={{ border: "1px solid red" }}>
                                <div className="event-card">
                                    <div className="event-card-img">
                                        <img
                                            className="d-card-img"
                                            src='https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588202699404-B8V1QQZ8SRO9GTVK8LC3/luxury-event-planner-nyc-new-england'
                                            alt="card-img"
                                        />
                                    </div>
                                    <div className="row dcard-row">

                                        <div className="col-12" >
                                            <div className="row justify-content-between">
                                                <div className="col-8">
                                                    <div className="card-content1">
                                                        <p className="dhead">
                                                            LOREM IPSUM DOLOR SIT
                                                        </p>
                                                        <p className="dhead-2 text-muted pb-3 mt-2">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                                        </p>
                                                        <MdLocationOn /><span className='address'>Address</span>
                                                    </div>
                                                </div>
                                                <div className="col-4  col-md-3 d-flex justify-content-center  align-items-center vanue-color" style={{ border: "1px solid red" }}>
                                                    <div className='pr-3' style={{ border: "1px solid red" }}>
                                                        <p className='m-0 vdate1' >2021</p>
                                                        <p className='m-0 vdate2' >MARCH</p>
                                                        <p className='m-0 vdate3' >16<sup>th</sup>-22<sup>th</sup></p>
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
