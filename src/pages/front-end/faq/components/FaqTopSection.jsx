import React from 'react'
import logo from "../../../../assets/logo.png";

export default function FaqTopSection() {
    return (
        <div className="faq-top-img">

            <div className="top-sec">
                <img className="img-fluid" src={logo} alt="logo" />
            </div>
            <div className="top-text">
                <p>FREQUENTLY ASKED QUESTIONG</p>

            </div>
        </div>
    )
}
