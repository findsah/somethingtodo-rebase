import React from 'react'
import Slider from "react-slick";
import DateCard from '../../components/DateCard';
import { Col, Container, Row } from 'react-bootstrap';
import CustomButton from '../../../../components/form/CustomButton';
import { settings } from '../../../../config/helper';

const Casuals = () => {
    return (
        <div className="container" style={{
            filter: "drop-shadow(0px 6px 24px rgba(0, 0, 0, 0.2))"
        }}>
            <Row>
                <div className="main-casual" style={{ marginTop: '8rem' }}>
                    <Col xs={12} lg={12} md={6}>
                        <div className="casual-text">
                            <div className="casualHighlight aos-init aos-animate" data-aos="fade-right" data-aos-duration="2000"></div>
                            <h2>NEW IN TOWN AND DON'T KNOW  <br></br> ANYONE HERE YET?</h2>
                            <p>Meet Someone who can show you around a little bit</p>
                            <CustomButton text='See All Casual' />
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
                    </Col>
                </div>
            </Row>
        </div>
    )
}

export default Casuals; 