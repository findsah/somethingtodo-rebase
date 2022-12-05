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
    const [address, setAddress] = useState("");
    const currentCityName = useRef(null);
    const lat = localStorage.getItem("lat");
    const lng = localStorage.getItem("lng");
    Geocode.setApiKey("AIzaSyBR962qKrR2IwdYUmk8J4diZVZuV_L9pWw");
    const fetchLoction = () => {
        Geocode.fromLatLng(lat, lng).then(
            (response) => {
                let city;
                for (let i = 0; i < response.results[0].address_components.length; i++) {
                    for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
                        switch (response.results[0].address_components[i].types[j]) {
                            case "locality":
                                city = response.results[0].address_components[i].long_name;
                                currentCityName.current = city;
                                break;
                            default:
                                city = "";
                                break;
                        }
                    }
                }
                setAddress(currentCityName.current);
            },
            (error) => {
                console.error(error);
            }
        );
    }
    useEffect(() => {
        AOS.init({ duration: 3000 });
        fetchLoction();
    }, [])

    return (
        <Row className='justify-content-between main-top-vanue'>
            {/* <div className="row circle-img  ">
            </div> */}
            <Col xs={12} md={4} data-aos="fade-right" className="aos-init aos-animate happen-wrapper">
                <p className="happen-text tex-center">
                    What's  Happening Right Now <br className='d-none d-md-block d-lg-block' /> in
                    <div className="topVanueHighlight aos-init aos-animate" data-aos="fade-right" data-aos-duration="2000"></div>
                    <span> {address}</span>
                </p>
                <Dropdown>
                    <Dropdown.Toggle variant="outlined" className="dropdown-btn">
                        Change location
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ zIndex: "999" }}>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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
            <Col xs={12} lg={12} style={{ padding: '0px' }} >
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
            <Col xs={12} lg={12} style={{ padding: '0px' }}>
                <Slider {...settings} >
                    {
                        [1, 2, 3, 4, 5, 6, 7].map(item => (
                            <Link to="/vanue-detail">
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