import React from 'react'
import { Button } from 'react-bootstrap';
import logo from "../../../../assets/logo.png";
import CustomButton from '../../../../components/form/CustomButton';


const TopSection = () => {
    return (
        <div className="bg-img">
            <div className="top-sec">
                <img className="img-fluid" src={logo} alt="logo" />
            </div>
            <div className="top-text">
                <p className="place">Find the best place to be</p>
                <div className='top-buttons'>
                    <Button className='btn-main'>Create Something To Do</Button>
                    <Button variant='outlined' className='outlined-btn'>Find Something To Do</Button>
                </div>
            </div>
        </div>
    )
}
export default TopSection