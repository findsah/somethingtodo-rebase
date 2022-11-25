import React, { useEffect } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import DateCard from "../../components/DateCard";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import { settings } from "../../../../config/helper";
const Somethingtodo = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className="container main-somethingtodo " style={{ position: "relative", overflowX: "hidden" }}>

            <Row>
                <Col xs={12} lg={12} md={6} >
                    <div className="somethingtodoHighlight aos-init aos-animate" data-aos="fade-right" data-aos-duration="2000"></div>
                    <h2>SOMETHINGTODO WHEN YOU FEEL LIKE DOING IT </h2>
                </Col>
                <div className="somethingtodoDiv">
                    <p className="smText d-none d-md-block d-lg-block" style={{ color: 'blue' }}>ALL</p>
                    <p className="smText d-none d-md-block d-lg-block" >THIS WEEKEND</p>
                    <p className="smText d-none d-md-block d-lg-block" >FREE</p>
                    <Dropdown className="smText d-none d-md-block d-lg-block">
                        <Dropdown.Toggle variant="outlined" className="dropdown-btn">
                            Categories
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="smText d-none d-md-block d-lg-block">
                        <Dropdown.Toggle variant="outlined" className="dropdown-btn">
                            Calendar
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="smText d-none d-md-block d-lg-block">
                        <Dropdown.Toggle variant="outlined" className="dropdown-btn">
                            Dating
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="row mobile-screen d-flex justify-content-center  d-sm-block d-md-none">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-3">
                                <p className="" style={{ color: 'blue' }}>ALL</p>
                            </div>
                            <div className="col-4">
                                <p>THIS WEEKEND</p>
                            </div>
                            <div className="col-4">
                                <p>FREE</p>
                            </div>

                        </div>
                        <div className="row d-flex justify-content-center d-sm-block d-md-none mt-3">
                            <div className="col-4">
                                <Dropdown className="">
                                    <Dropdown.Toggle variant="outlined" className="dropdown-btn">
                                        Categories
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="col-4">
                                <Dropdown className="">
                                    <Dropdown.Toggle variant="outlined" className="dropdown-btn">
                                        Calendar
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="col-4">
                                <Dropdown className="">
                                    <Dropdown.Toggle variant="outlined" className="dropdown-btn">
                                        Dating
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                        </div>
                    </div>
                </div>
            </Row>
            <Row style={{ filter: "drop-shadow(0px 6px 24px rgba(0, 0, 0, 0.2))", margin: "3rem 0" }}>
                <Col className="d-none d-md-block d-lg-block" lg={4}>
                    <div className="date-cards">
                        <DateCard />
                    </div>
                </Col>
                <Col className="d-none d-md-block d-lg-block" lg={4}>
                    <div className="date-cards">
                        <DateCard />
                    </div>
                </Col>
                <Col className="d-none d-md-block d-lg-block" lg={4}>
                    <div className="date-cards">
                        <DateCard />
                    </div>
                </Col>
                <Col className="d-none d-md-block d-lg-block" lg={4}>
                    <div className="date-cards">
                        <DateCard />
                    </div>
                </Col>
                <Col className="d-none d-md-block d-lg-block" lg={4}>
                    <div className="date-cards">
                        <DateCard />
                    </div>
                </Col>
                <Col className="d-none d-md-block d-lg-block" lg={4}>
                    <div className="date-cards">
                        <DateCard />
                    </div>
                </Col>
                <div className="date-cards d-sm-block d-md-none ">
                    <Col sm={6}>
                        <Slider {...settings}>
                            {
                                [1, 2, 3, 4, 5, 6].map(item => (
                                    <DateCard />
                                ))
                            }
                        </Slider>
                    </Col>
                </div>

            </Row>


        </div>
    );
};

export default Somethingtodo;
