import React from 'react'
import { Button } from 'react-bootstrap';
import logo from "../../../../assets/logo.png";
import pinDrop from "../../../../assets/pin_drop.svg";
import { MdLocationOn, MdLocationPin } from 'react-icons/md';


const TopSection = () => {
    return (
        <div className="top-sec-img">
            <div className="top-sec">
                <img className="img-fluid" src={logo} alt="logo" />
            </div>
            <div className="top-text">
                <p className="place">LOREM IPSUM DOLOR SIT AMET</p>
                <div className='sub-text'>
                    <p><img src={pinDrop} alt="" /> LOREM IPSUM DOLOR SIT AMET</p>
                </div>
            </div>
        </div>
    )
}
export default TopSection