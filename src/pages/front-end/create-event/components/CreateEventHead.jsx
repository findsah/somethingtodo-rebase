/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React, { useMemo } from 'react'
import Slider from 'react-slick';
import logo from "../../../../assets/logo.png";
import dummy from "../../../../assets/dummy1.png"
// import { settings } from '../../../../config/helper';
import Countdown from 'react-countdown';
import profilegirl from '../../../../assets/profilegirl.svg'
import moment from 'moment/moment';

const CreateEventHead = ({ previewImage, descData, timeandpriceData, addedVenues }) => {

    console.log(addedVenues)

    // use meno call back function to calculate count
    const calculateCount = (Edate, Etime) => {
        // tell moment how to parse the input string
        var momentObj = moment(Edate + Etime, 'YYYY-MM-DDLT');
        // conversion
        var dateTime = momentObj.format('YYYY-MM-DDTHH:mm:ss')
        return dateTime
    }
    // calculation for count timmer base on time and date
    const calculateTimerCount = useMemo(() => {
        return calculateCount(timeandpriceData?.eventDate, timeandpriceData?.eventTime)
    }, [timeandpriceData?.eventDate, timeandpriceData?.eventTime]);


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

                <Slider
                    slidesToShow={(addedVenues?.length === 1 && 1) || (addedVenues?.length === 2 && 2) || (addedVenues?.length > 2 && 3)}
                // className="center"
                // centerMode={true}
                >
                    {
                        addedVenues?.map((item, index) => (
                            <img className="img-fluid" src={item?.photos ? item?.photos[0].getUrl() : dummy} alt="logo" key={index} style={{ height: "300px" }} />
                        ))
                    }
                </Slider>

                <div className='createEventInfoContainer'>
                    <div className='info'>
                        <h4>{descData?.eventTitle || "Your Event Title"}</h4>

                        <p>{descData?.eventDescription || "Your event Description"}</p>
                    </div>
                    <div className='timer'>
                        <p className='timerStart'>Event starts in</p>
                        <Countdown date={calculateTimerCount} renderer={renderer} />,
                    </div>
                    <div className='address'>
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
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
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
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
                                        <span>& 12 other </span> <i className="fa fa-angle-right" aria-hidden="true"></i>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='middel'>
                        <div className='social'>
                            <div className='socialIcon'>
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </div>
                            <div className='socialIcon'>
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </div>
                            <div className='socialIcon'>
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </div>
                        </div>
                        <button>INVITE FRIENDS</button>
                    </div>
                    <div className='right'>
                        <div className='rightTop'>
                            <div className='date_icon'>
                                <i className="fa fa-calendar-o" aria-hidden="true"></i>

                                <p> Date</p>
                            </div>
                            <div className='paid'>
                                <div className="icon">
                                    <i className="fa fa-usd" aria-hidden="true"></i>
                                </div>

                                <p> Paid by host</p>
                            </div>
                        </div>
                        <div className='rigthBottom'>
                            <h4>
                                ${timeandpriceData?.eventCost[1]}
                            </h4>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default CreateEventHead