import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Aos from "aos";
import "aos/dist/aos.css";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../../components/form/CustomButton";
const CFEvent = () => {
    const navigate = useNavigate()
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="container-fluid cf-events" style={{ position: "relative", overflowX: "hidden", marginTop: '20rem' }}>
            <Row>
                <Col lg={6} md={12} sm={12} className="bg-img-2 " data-aos="fade-right" data-aos-duration="1000">
                    <h2>CREATE&nbsp;<span>AN EVENT</span></h2>
                    <p>Follow 5 simple steps to create your own event</p>
                    <CustomButton
                        onClick={() => navigate("/create-event")}
                        text='Create Now' />
                </Col>
                <p className="circle" data-aos="zoom-in-up"
                    data-aos-duration="500">OR</p>
                <Col lg={6} md={12} sm={12} className="bg-img-3" data-aos="fade-left" data-aos-duration="1000">
                    <h2>FIND&nbsp;<span>AN EVENT</span></h2>
                    <p>Have Somethingtodo in mind and want a large list of <br></br> events to choose from?  View all the events here</p>
                    <CustomButton text='Find Now' />
                </Col>
            </Row>
        </div>
    );
};

export default CFEvent;
