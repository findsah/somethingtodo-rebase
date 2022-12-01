import React from 'react'
import Slider from 'react-slick';
import logo from "../../../../assets/logo.png";
import dummy from "../../../../assets/dummy1.png"
import { settings } from '../../../../config/helper';
import Countdown from 'react-countdown';
import profilegirl from '../../../../assets/profilegirl.svg'

const CreateEventHead = () => {

    // Random component
    const Completionist = () => <span>You are good to go!</span>;

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <div className='countDownTimer'>
                <div className='time'>
                    <h4>{days}</h4>
                    <p>Days</p>

                </div>
                <div className='time'>
                    <h4>{hours}</h4>
                    <p>Hours</p>
                </div>
                <div className='time'>
                    <h4>{minutes}</h4>
                    <p>Minutes</p>
                </div>
                <div className='time'>
                    <h4>{seconds}</h4>
                    <p>Seconds</p>
                </div>

                <button className='btn-main'>JOIN NOW</button>
            </div>

        }
    };
    return (
        <div className="createEventTop">
            <div className="logo-div">
                <img className="img-fluid" src={logo} alt="logo" />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className='container createEventSilder'>

                <Slider {...settings} className='sliderMain'>
                    {
                        [1, 2, 3, 4, 5, 6].map(item => (
                            <img className="img-fluid" src={dummy} alt="logo" />
                        ))
                    }
                </Slider>

                <div className='createEventInfoContainer'>
                    <div className='info'>
                        <h4>LOREM IPSUM DOLOR SIT AMET</h4>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                    </div>
                    <div className='timer'>
                        <p className='timerStart'>Event starts in</p>
                        <Countdown date={Date.now() + 1000000} renderer={renderer} />,
                    </div>
                    <div className='address'>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <p>Address</p>
                    </div>
                </div>


                <div className='eventFooter'>
                    <div >


                        <p className='mo_share_p'>Share with friends:</p>
                        <div className='left'>
                            <div className='img'>
                                <img src={profilegirl} alt="" />
                            </div>
                            <div className='liveChatContainer'>
                                <div className='liveChat'>
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    <p>live chat</p>
                                </div>
                                <div className='liveChatPeople'>
                                    <div>

                                        <img src={profilegirl} alt="" width="22px" height="22px" />
                                        <img src={profilegirl} alt="" width="22px" height="22px" />
                                        <img src={profilegirl} alt="" width="22px" height="22px" />
                                        {/* <img src={profilegirl} alt="" width="22px" height="22px" />
                                    <img src={profilegirl} alt="" width="22px" height="22px" /> */}
                                    </div>
                                    <div className='infoPeopleCount'>
                                        <span>& 12 other </span> <i class="fa fa-angle-right" aria-hidden="true"></i>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='middel'>
                        <div className='social'>
                            <div className='socialIcon'>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </div>
                            <div className='socialIcon'>
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                            </div>
                            <div className='socialIcon'>
                                <i class="fa fa-facebook" aria-hidden="true"></i>
                            </div>
                        </div>
                        <button>INVITE FRIENDS</button>
                    </div>
                    <div className='right'>
                        <div className='rightTop'>
                            <div className='date_icon'>
                                <i class="fa fa-calendar-o" aria-hidden="true"></i>

                                <p> Date</p>
                            </div>
                            <div className='paid'>
                                <div className="icon">
                                    <i class="fa fa-usd" aria-hidden="true"></i>
                                </div>

                                <p> Paid by host</p>
                            </div>
                        </div>
                        <div className='rigthBottom'>
                            <h4>
                                $45.00
                            </h4>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default CreateEventHead