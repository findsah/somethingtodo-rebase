import React, { useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopVanuesCard from '../../components/TopVanuesCard';
import { settings } from '../../../../config/helper';
import { Col, Container, Row } from 'react-bootstrap';



const TopVanues = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, [])

    return (
        <Row className='justify-content-between'>
            <Col xs={12} md={4} data-aos="fade-right" className="aos-init aos-animate happen-wrapper">
                <p className="happen-text ">
                    What's  Happening Right Now <br className='d-sm-none d-md-block' /> in
                    <div className="topVanueHighlight aos-init aos-animate" data-aos="fade-right" data-aos-duration="2000"></div>

                    <span> TORONTO</span>
                </p>
                <Dropdown>
                    <Dropdown.Toggle variant="outlined" className="dropdown-btn">
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            <Col xs={12} md={4} className='d-none d-lg-block'>
                <TopVanuesCard />
            </Col>
            <Col xs={12} md={4} className='d-none d-lg-block'>
                <TopVanuesCard />
            </Col>
            <Col xs={12} lg={12}>
                <Slider {...settings} >
                    {
                        [1, 2, 3, 4, 5, 6, 7].map(item => (
                            <TopVanuesCard />
                        ))
                    }
                </Slider>
            </Col>
            <Col xs={12} lg={12}>
                <Slider {...settings} >
                    {
                        [1, 2, 3, 4, 5, 6, 7].map(item => (
                            <TopVanuesCard />
                        ))
                    }
                </Slider>
            </Col>
        </Row>
    )
}
export default TopVanues;