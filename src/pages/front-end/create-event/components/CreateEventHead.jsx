import React from 'react'
import Slider from 'react-slick';
import logo from "../../../../assets/logo.png";
import dummy from "../../../../assets/dummy1.png"
import { settings } from '../../../../config/helper';

const CreateEventHead = () => {
    return (
        <div className="createEventTop">
            <div className="logo-div">
                <img className="img-fluid" src={logo} alt="logo" />
            </div>
            <div className='container createEventSilder'>
                <div className=''>
                    <Slider {...settings}>
                        {
                            [1, 2, 3, 4, 5, 6].map(item => (
                                <img className="img-fluid" src={dummy} alt="logo" />
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default CreateEventHead