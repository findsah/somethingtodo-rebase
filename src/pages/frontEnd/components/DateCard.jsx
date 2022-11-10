import React from 'react'
import { FaCalendarCheck } from "react-icons/fa";
import { MdLocationOn } from 'react-icons/md';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsChatSquare } from 'react-icons/bs';
import vanueImg from '../../../assets/Rectangle 11.jpg'
export default function DateCard() {
    return (
        <div>
            <div class="card item-card  card-block">
                <img src={vanueImg} alt="" className='card-img' />
                <div className="row dcard-row">
                    <div className="col-12" >
                        <div className="row justify-content-between">
                            <div className="col-2  d-flex justify-content-center for-color" >
                                <div className='mt-3' >
                                    <p className='m-0 cdate1' >12</p>
                                    <p className='m-0 cdate2' >MARCH</p>
                                    <p className='m-0 cdate3' >2020</p>
                                </div>
                            </div>
                            <div className="col-10" style={{ position: "relative" }}>
                                <div className="row"></div>
                                <div className="card-content1">
                                    <p className="dhead">
                                        LOREM IPSUM DOLOR SIT
                                    </p>
                                    <p className="dhead-2 text-muted pb-3 mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                    </p>
                                    <div className="dcard-content mt-2">
                                        <div className="row">
                                            <div className="col-6">
                                                <MdLocationOn /><span className='address mt-0'>Address</span>
                                            </div>
                                            <div className="col-6 ">
                                                <FaCalendarCheck className="sub" />
                                                <span className="cdate">
                                                    Date

                                                </span>
                                                <span className="cpaid mx-2">
                                                    <AiFillDollarCircle className="sub2 " />
                                                    Paid by host
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <img className="user-img" src={vanueImg} alt="user" />
                                    <div className="event-card-chat">
                                        <div className="chatOptionDiv" >
                                            <div>
                                                <div className="row1">
                                                    <BsChatSquare /><span style={{ marginLeft: "8px", fontSize: "9px" }}>Live Chat</span>
                                                </div>
                                                <div className="last-content">
                                                    <img className="user-img-2" src={vanueImg} alt="user" />
                                                    <img className="user-img-2" src={vanueImg} alt="user" />
                                                    <img className="user-img-2" src={vanueImg} alt="user" />
                                                    <img className="user-img-2" src={vanueImg} alt="user" />
                                                    <p className="others text-muted">& 12 others {">"}</p>

                                                </div>
                                            </div>
                                            <div>
                                                <div className="set-pd">
                                                    <p className="price-txt">
                                                        $99
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
