import React, { useEffect } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import DateCard from "../../components/DateCard";
import Aos from "aos";
import "aos/dist/aos.css";
const Somethingtodo = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className="container main-somethingtodo " style={{ position: "relative", overflowX: "hidden" }}>

            <Row>
                <Col xs={12} lg={12} md={6}>
                    <div className="somethingtodoHighlight aos-init aos-animate" data-aos="fade-right" data-aos-duration="2000"></div>
                    <h2>SOMETHINGTODO WHEN YOU FEEL LIKE DOING IT </h2>
                </Col>
                <div className="somethingtodoDiv">
                    <p className="smText" style={{ color: 'blue' }}>ALL</p>
                    <p className="smText" >THIS WEEKEND</p>
                    <p className="smText" >FREE</p>
                    <Dropdown className="smText">
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
                    <Dropdown className="smText">
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
                    <Dropdown className="smText">
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
            </Row>
            <Row style={{ filter: "drop-shadow(0px 6px 24px rgba(0, 0, 0, 0.2))", margin: "3rem 0" }}>
                <Col lg={4}>
                    <div className="date-cards">
                        <DateCard />
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="date-cards">
                        <DateCard />
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="date-cards">
                        <DateCard />
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="date-cards">
                        <DateCard />
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="date-cards">
                        <DateCard />
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="date-cards">
                        <DateCard />
                    </div>
                </Col>
            </Row>


        </div>
    );
};

export default Somethingtodo;
