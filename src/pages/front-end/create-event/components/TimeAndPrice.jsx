/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React, { useState } from 'react'
import calenderIcon from '../../../../assets/icons/calendar.svg'
import clockIcon from '../../../../assets/icons/clock.svg'
import CustomRangeSlider from '../../components/CustomRangeSlider'

const TimeAndPrice = ({ eventDate,
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
    // console.log(today)

    var MyDate = new Date();
    var today;
    today = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2)

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
                            onChange={(e) => { setEventDate(e.target.value) }}
                        />
                    </div>
                </div>

                <div className="col-sm-6 col-12 m-auto">
                    <div className='event_label'>
                        <h2>EVENT TIME</h2>
                        <img src={clockIcon} alt="" />
                    </div>
                    <div className='event_time_field'>
                        <input type="time"
                            value={eventTime}
                            onChange={(e) => { setEventTime(e.target.value); }}
                        />
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-sm-6 col-12 m-auto event_cost">
                    <h3>ESTIMATED COST FOR THIS EVENT</h3>
                    <div className='range_wdith'>

                        <CustomRangeSlider
                            values={eventCost}
                            setValues={setEventCost}
                            min={0}
                            max={9999}
                            step={2}
                            single={"single-thumb"} />
                    </div>
                </div>
                <div className="col-sm-6 col-12 m-auto  mobile_marign">
                    <h3>HOW WILL THE COST BE <br className='hide' /> SPLIT AMONG THE GROUP ?</h3>
                    <div className='cost_split'>
                        <div className='paying checkbox'>
                            <input type="checkbox" name='paying' id='paying'
                                value={costSplit}
                                onChange={() => setCostSplit("i am Paying")}
                                checked={costSplit === "i am Paying"}
                            />
                            <label htmlFor="paying">I`m Paying</label>
                        </div>
                        <div className='shared checkbox'>
                            <input type="checkbox" name='shared' id='shared'
                                value={costSplit}
                                onChange={() => setCostSplit("shared")}
                                checked={costSplit === "shared"}
                            />
                            <label htmlFor="shared">Evenly Shared</label>
                        </div>
                        <div className='shared checkbox'>
                            <input type="checkbox" name='Someone Else is Paying' id='Someone Else is Paying'
                                value={costSplit}
                                onChange={() => setCostSplit("Someone Else is Paying")}
                                checked={costSplit === "Someone Else is Paying"}
                            />
                            <label htmlFor="Someone Else is Paying">Someone Else is Paying</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TimeAndPrice