import React, { useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import VanueCard from '../../components/VanueCard';
export default function Vanues() {
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
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

        <div className="container main-vanue">
            <div className="row justify-content-center margin">

                <div className="col-lg-3  col-sm-12" style={{ overflowX: "hidden" }}>
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
                <div class="col-lg-4 col-md-6 col-sm-6 item">
                    <div className='vanuebg2'>
                        <div className="set-postion">

                            <VanueCard />
                        </div>
                    </div>
                    <div className='vanuebg1'></div>

                </div>
                {/* <div className="col-lg-4 col-sm-10">

                    <div className='vanuebg2'>
                        <div className="event-card set-postion">
                            <div className="event-card-img">
                                <img
                                    className="d-card-img"
                                    src={vanueImg}
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
                                        <div className="col-4  col-md-3 d-flex justify-content-center  align-items-center vanue-color" >
                                            <div className='pr-3' >
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
                    <div className='vanuebg1'></div>
                </div> */}

                <div class="col-lg-4 col-md-6 col-sm-6 d-none d-lg-block item">
                    <VanueCard />
                </div>

            </div>
            <div className='mt-4 mt-ms-0'>
                <Slider {...settings} >
                    <div class="col-lg-4 col-md-4 col-sm-6 item">
                        <VanueCard />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 item">
                        <VanueCard />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 item">
                        <VanueCard />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 item">
                        <VanueCard />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 item">
                        <VanueCard />
                    </div>
                </Slider>
            </div>
            <div className='mt-4 mt-ms-0'>
                <Slider {...settings} >
                    <div class="col-lg-4 col-md-4 col-sm-6 item">
                        <VanueCard />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 item">
                        <VanueCard />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 item">
                        <VanueCard />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 item">
                        <VanueCard />
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 item">
                        <VanueCard />
                    </div>
                </Slider>
            </div>
        </div>
    )
}
