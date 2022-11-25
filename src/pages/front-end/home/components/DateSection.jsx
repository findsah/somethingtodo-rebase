import React from 'react'
import Slider from "react-slick";
import DateCard from '../../components/DateCard';
import { Button, Col, Row } from 'react-bootstrap';
import { settings } from '../../../../config/helper';



const DateSection = () => {

    return (
        <Row style={{ marginTop: '4rem' }}>
            <Col xs={12} lg={12}>
                <div className="date-events">
                    <div className="dateHighlight"></div>
                    <div className="date-text">
                        <h2>looking for a date?</h2>
                        <p>Find Somethingtodo with someone who shares your interest</p>
                        <Button className='btn-main'>See All Dates</Button>
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
    )
}

export default DateSection; 