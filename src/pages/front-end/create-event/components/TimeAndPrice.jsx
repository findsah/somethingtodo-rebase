/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React, { useState } from 'react'
import calenderIcon from '../../../../assets/icons/calendar.svg'
import clockIcon from '../../../../assets/icons/clock.svg'
import CustomRangeSlider from '../../components/CustomRangeSlider'
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import DatePicker from "react-datepicker";
import moment from 'moment/moment';
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from 'react';
import { toast } from 'react-toastify';
const format = 'h:mm a';





const TimeAndPrice = ({
    eventDate,
    eventCost,
    eventTime,
    costSplit,
    setEventCost,
    setEventDate,
    setEventTime,
    setCostSplit }) => {

    // to find current date and not to select past days
    // const current = new Date();
    // const today = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;

    console.log("eveentdata", eventDate)
    const [date, setDate] = useState(new Date())

    var MyDate = new Date();
    var today;
    today = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2)

    function onChange(value) {
        setEventTime(value && value.format(format))
    }

    useEffect(() => {
        console.log(eventDate)
        console.log(today)
        if (today && eventDate) {
            const t = new Date(today)
            const e = new Date(eventDate)
            if (t.getTime() > e.getTime()) {
                setEventDate("")
                toast.warn("You Can't Select Past Date")
            }
        }


    }, [eventDate])
    return (

        <div className="container create-event-time_and_price">
            <div className="row">
                <div className="col-sm-6 col-12 m-auto">
                    <div className='event_label'>
                        <h2>EVENT DATE</h2>
                        <img src={calenderIcon} alt="" />
                    </div>
                    <div className='event_date_calender'>
                        <input type="date"
                            min={today}
                            value={eventDate}
                            // readonly
                            // disabled
                            onChange={(e) => { setEventDate(e.target.value) }}
                        />
                        {/* <DatePicker
                            selected={date} onChange={(date) => {
                                const formateDate = moment(date).format('YYYY-MM-DD');
                                setEventDate(formateDate)
                                setDate(date)

                            }}

                        /> */}
                    </div>
                </div>

                <div className="col-sm-6 col-12 m-auto">
                    <div className='event_label'>
                        <h2>EVENT TIME</h2>
                        <img src={clockIcon} alt="" />
                    </div>
                    <div className='event_time_field' style={{ width: "100%" }}>
                        {/* <input type="time"
                            value={eventTime}
                            step="5"
                            onChange={(e) => { setEventTime(e.target.value); }}
                        /> */}
                        <TimePicker
                            className='time_style'
                            minuteStep={15}
                            // use12Hours
                            showSecond={false}
                            onChange={onChange}
                        />
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-sm-6 col-12 m-auto event_cost">
                    <h3>ESTIMATED COST FOR THIS EVENT <span>{"($ " + eventCost[1] + ")"}</span></h3>
                    <div className='range_wdith'>

                        <CustomRangeSlider
                            values={eventCost}
                            setValues={setEventCost}
                            min={0}
                            max={100000}
                            step={5}
                            show={false}
                            single={"single-thumb"} />
                    </div>
                </div>
                <div className="col-sm-6 col-12 m-auto  mobile_marign">
                    <h3>HOW WILL THE COST BE <br className='hide' /> SPLIT AMONG THE GROUP ?</h3>
                    <div className='cost_split'>
                        <div className='paying checkbox'>
                            <input type="checkbox" name='paying' id='paying'
                                value={costSplit}
                                onChange={() => setCostSplit("i am paying")}
                                checked={costSplit === "i am paying"}
                            />
                            <label htmlFor="paying">I am paying</label>
                        </div>
                        <div className='shared checkbox'>
                            <input type="checkbox" name='shared' id='shared'
                                value={costSplit}
                                onChange={() => setCostSplit("shared")}
                                checked={costSplit === "shared"}
                            />
                            <label htmlFor="shared">Evenly shared</label>
                        </div>
                        <div className='shared checkbox'>
                            <input type="checkbox" name='They are paying' id='  They are paying'
                                value={costSplit}
                                onChange={() => setCostSplit("  They are paying")}
                                checked={costSplit === "  They are paying"}
                            />
                            <label htmlFor="  They are paying">  They are paying</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TimeAndPrice