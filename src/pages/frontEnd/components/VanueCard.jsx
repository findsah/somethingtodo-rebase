import React from 'react'
import { MdLocationOn } from 'react-icons/md';
import vanueImg from '../../../assets/Rectangle 11.jpg'
export default function VanueCard() {
    return (
        <div class="card item-card  card-block">
            <img src={vanueImg} alt="" className='card-img' />
            <div className="row dcard-row">
                <div className="col-12" >
                    <div className="row justify-content-between">
                        <div className="col-8">
                            <div className="card-content1">
                                <p className="dhead">
                                    LOREM IPSUM DOLOR SIT
                                </p>
                                <p className="dhead-2 text-muted pb-3 mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </p>
                                <MdLocationOn /><span className='address'>Address</span>
                            </div>
                        </div>
                        <div className="col-4  col-md-3 d-flex justify-content-center  align-items-center vanue-color" >
                            <div className='pr-3' >
                                <p className='m-0 vdate1' >2021</p>
                                <p className='m-0 vdate2' >MARCH</p>
                                <p className='m-0 vdate3' >16<sup>th</sup>-22<sup>th</sup></p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}
