import React from 'react'
import Slider from "react-slick";
import DateCard from '../../components/DateCard';
import { Col, Container, Row } from 'react-bootstrap';
import CustomButton from '../../../../components/form/CustomButton';
import { settings } from '../../../../config/helper';

const Dining = () => {

    return (
        <>
            <div className="container " style={{
                filter: "drop-shadow(0px 6px 24px rgba(0, 0, 0, 0.2))"
            }}>
                <Row>
                    <Col xs={12} lg={12} md={6}>
                        <div className="main-dining" style={{ marginTop: '22rem' }}>
                            <div className="dining-text">
                                <h2>FIND WINE AND DINING  <br></br> YOUR THING ?</h2>
                                <p>Everyone loves a nice night out, let's go!</p>
                                <CustomButton text='SEE ALL WINE & DINE' />
                            </div>
                            <div className="date-cards">
                                <Slider {...settings}>
                                    {
                                        [1, 2, 3, 4, 5, 6].map(item => (
                                            <DateCard />
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="container-fluid go-outside" style={{ marginTop: '20rem' }}>
                <p data-aos="fade-down-right"> GO OUTSIDE AND PLAY! </p>
            </div>
        </>
    )
}

export default Dining; 