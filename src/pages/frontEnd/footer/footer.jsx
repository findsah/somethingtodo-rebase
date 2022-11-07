import React, { useState } from "react";
import Logo from "../../../assets/logoo.png";
import { GrFacebook } from "react-icons/gr";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
const Footer = () => {
    const [showlogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    return (
        <div className="container-fluid p-0 position-relative">
            <div className="sec-10-img">
                <div className="row fot-con">
                    <div className="col-12 col-sm-4 footer-col" style={{ textAlign: "center" }}>
                        <div className="con-1">
                            <img className="logo" src={Logo} alt="logo" />
                            <p className="some"> Somethingtodo </p>
                            <p className="con1-para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                                mollitia, molestiae quas vel
                            </p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 useful-links">
                        <div className="con-2">
                            <p className="links"> Useful Links </p>
                            <p className="con2-p"> Home </p>
                            <p className="con2-p"> Event listing </p>
                            <p className="con2-p"> Business promotions </p>
                            <p className="con2-p"> Creator portal </p>
                            <p className="con2-p"> Contact us </p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 social-links">
                        <div className="con-3">
                            <p
                                className="links"
                                style={{ color: "orange", cursor: "pointer" }}
                                onClick={() => setShowLogin(true)}
                            >
                                Login as Business user
                            </p>
                            <p className="links"> Contact us </p>
                            <p className="con2-p">
                                <FaPhoneAlt />
                                <span className="for-set">Insert Phone number here</span>
                            </p>
                            <p className="con2-p">
                                <MdEmail />
                                <span className="for-set">Insert email address here </span>
                            </p>
                            <p className="con2-p">
                                <GrLocation />
                                <span className="for-set">Insert office/shop address here</span>
                            </p>
                        </div>
                        <div className="icons">
                            <GrFacebook className="fb" />
                            <div className="marg">
                                <FaInstagramSquare className="ic" />
                            </div>
                            <div className="marg">
                                <AiFillTwitterSquare className="ic" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p className="inc"> @ 2021 Somethingtodo Inc. </p>
            </div>
        </div>
    );
};

export default Footer;
