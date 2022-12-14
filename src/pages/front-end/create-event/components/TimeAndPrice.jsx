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
                            onChange={(e) => { setEventTime(e.target.value); console.log(e.target) }}
                        />
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-sm-6 col-12 m-auto event_cost">
                    <h3>ESTIMATED COST FOR THIS EVENT</h3>
                    <div className='range_wdith'>

                        <CustomRangeSlider values={eventCost} setValues={setEventCost} min={0} max={9999} step={1} />
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
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TimeAndPrice