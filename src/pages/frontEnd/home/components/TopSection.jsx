import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../../../assets/logo.png";
export default function TopSection() {
    return (
        <>
            <div className="bg-img">
                <div className="top-sec">
                    <img className="main-logo img-fluid" src={logo} alt="logo" />
                </div>
                <p className="place">Find the best place to be</p>
                <div className="top-sec ">
                    <button className="create-btn" >
                        Create Something To Do
                    </button>
                    <Link to="/find-events" style={{ textDecoration: "none" }}>
                        <button className="find-btn"> Find Something To Do </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
