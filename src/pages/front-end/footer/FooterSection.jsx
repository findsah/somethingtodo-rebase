import React, { useState } from "react";
import Logo from "../../../assets/logo.png";
import { GrFacebook } from "react-icons/gr";
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { ImTwitter } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { Col, Row } from "react-bootstrap";


const FooterSection = () => {
    return (
        <div className="container-fluid p-0 position-relative" >
            <div className="footer-bg">
                <Row className="fot-con ">
                    <div className="col-12 col-sm-4 footer-col" style={{ textAlign: "center" }}>
                        <div className="con-1">
                            <img src={Logo} alt="logo" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Maxime
                                mollitia, molestiae quas vel
                            </p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 useful-links">
                        <div className="links1">
                            <h2> Useful Links </h2>
                            <p> Home </p>
                            <p> Event listing </p>
                            <p> Business promotions </p>
                            <p> Creator portal </p>
                            <p> Contact us </p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 social-links">
                        <div className="links2">
                            {/* <h2> Useful Links </h2> */}
                            <p> <AiOutlineWhatsApp /> Insert Phone number here </p>
                            <p> <AiOutlineMail /> Insert email address here </p>
                            <p> <CiLocationOn />Insert office/shop address here </p>
                            <div className="social-links mt-4">
                                <a href=""><ImTwitter /></a>
                                <a href=""><SiInstagram /></a>
                                <a href=""><GrFacebook /></a>
                            </div>
                        </div>
                    </div>
                </Row >
            </div >
            <div div className="footer" >
                <p> @ 2021 Somethingtodo Inc. </p>
            </div >
        </div >
    );
};

export default FooterSection;
