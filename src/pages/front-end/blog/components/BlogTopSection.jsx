import React from 'react'
import logo from "../../../../assets/logo.png";
import CustomButton from '../../../../components/form/CustomButton'
import { RxDoubleArrowDown } from 'react-icons/rx'

export default function BlogTopSection() {
    return (
        <div className="blog-top-img">
            <div className="top-sec">
                <img className="img-fluid" src={logo} alt="logo" />
            </div>

            <div className="top-text">
                <div className="row">
                    <div className="col-6">
                        <div className="row" >
                            <div className="col-12" >
                                <p className="do-it">LET`S DO IT </p>
                            </div>
                            <div className="col-12">
                                <p className="toghether text-end">TOGETHER.</p>
                            </div>
                            <div className="row date-host">
                                <div className="col-6">
                                    <h2>Friday, Oct 2020</h2>
                                </div>
                                <div className="col-6 text-start">
                                    <h3>5 - 8 P.M. Newmarket Road ,24</h3>
                                    <h3 className='mt-3'>8 - 10 P.M DJ Daily</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row" >
                            <div className="col-12" >
                                <CustomButton text='Read More' />
                            </div>

                        </div>
                    </div>
                </div>
                {/* <p className="place">LOREM IPSUM DOLOR SIT AMET</p>
                <div className='sub-text'>
                   
                    <p>LOREM IPSUM DOLOR SIT AMET</p>
                </div> */}
                <RxDoubleArrowDown className='arrow' />
            </div>
        </div>
    )
}
