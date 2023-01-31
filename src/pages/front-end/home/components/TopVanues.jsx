import React, { useEffect, useRef, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Geocode from "react-geocode";
import TopVanuesCard from '../../components/TopVanuesCard';
import { settings } from '../../../../config/helper';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const TopVanues = () => {
    const dispatch = useDispatch()

    // useSlector to get State from store
    const { getCurrentLocation } = useSelector((state) => state?.shareSlice)
    useEffect(() => {
        AOS.init({ duration: 3000 });

    }, [])

    return (
        <Row className='justify-content-between main-top-vanue'>
            {/* <div className="row circle-img  ">
            </div> */}
            <Col xs={12} md={4} data-aos="fade-right" className="aos-init aos-animate happen-wrapper">
                <p className="happen-text tex-center">
                    What's  Happening Right Now <br className='d-none d-md-block d-lg-block' /> in
                    <div className="topVanueHighlight aos-init aos-animate" data-aos="fade-right" data-aos-duration="2000"></div>
                    <span> {getCurrentLocation}</span>
                </p>
                {/* <Dropdown style={{ zIndex: "99" }}>
                    <Dropdown.Toggle variant="outlined" className="dropdown-btn">
                        Change location
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
                <select name="location" id="location" className='select_orange' style={{ width: "189px" }}
                    placeholder="Change Location"
                >
                    <option>Change Location</option>

                    <option value="another">Action 1</option>
                    <option value="Action 2">Action 2</option>
                    <option value="Action 3">Action 3</option>
                    {/* <option value="change location" >Change location</option> */}
                </select>
            </Col>

            <Col xs={12} lg={4} className='mobile-screen'>
                <div className='vanuebg'>
                    <div className="set-postion">
                        <Link to="/vanue-detail">
                            <TopVanuesCard />
                        </Link>
                    </div>
                </div>
            </Col>
            <Col xs={12} lg={4} md={6} className='d-none d-lg-block topvanue-link'>
                <Link to="/vanue-detail">
                    <TopVanuesCard />
                </Link>
            </Col>
            <Col xs={12} lg={12} className="mt-4">
                <Slider {...settings} >
                    {
                        [1, 2, 3, 4, 5, 6, 7].map(item => (
                            <Link to="/vanue-detail" >
                                <TopVanuesCard />
                            </Link>
                        ))
                    }
                </Slider>
            </Col>
            <Col xs={12} lg={12} >
                <Slider {...settings} >
                    {
                        [1, 2, 3, 4, 5, 6, 7].map(item => (
                            <Link to="/vanue-detail" >
                                <TopVanuesCard />
                            </Link>
                        ))
                    }
                </Slider>
            </Col>

        </Row>
    )
}
export default TopVanues;