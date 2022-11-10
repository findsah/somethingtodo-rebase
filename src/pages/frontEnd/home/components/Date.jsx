import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DateCard from '../../components/DateCard';
export default function Date() {
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
        <div className="container">
            <div className="row">
                <div className="col-lg-12 p-0 mt-5 mt-ms-0">
                    <div className="bg-img1">
                        <div className="section1-content" data-aos="fade-in">
                            <p className="para1"> LOOKING FOR A DATE ?</p>
                            <p className="para2">
                                Find Somethingtodo with someone who shares your interest
                            </p>
                            <button className="button1"> SEE ALL DATES</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row d-flex justify-content-center margin">
                <div className=" check ">
                    <Slider {...settings}>


                        <div className="col-lg-4 col-md-4 col-sm-6 item">
                            <DateCard />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 item">
                            <DateCard />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 item">
                            <DateCard />
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}
