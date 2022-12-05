import React, { useState } from 'react'
import calenderIcon from '../../../../assets/icons/calendar.svg'
import clockIcon from '../../../../assets/icons/clock.svg'
import CustomRangeSlider from '../../components/CustomRangeSlider'

const TimeAndPrice = () => {
    const [values, setValues] = useState([25, 75]);
    return (

        <div className="container create-event-time_and_price">
            <div className="row">
                <div className="col-sm-6 col-12 m-auto">
                    <div className='event_label'>
                        <h2>EVENT DATE</h2>
                        <img src={calenderIcon} alt="" />
                    </div>
                    <div className='event_date_calender'>
                        <input type="date" />
                    </div>
                </div>

                <div className="col-sm-6 col-12 m-auto">
                    <div className='event_label'>
                        <h2>EVENT TIME</h2>
                        <img src={clockIcon} alt="" />
                    </div>
                    <div className='event_time_field'>
                        <input type="time" />
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-sm-6 col-12 m-auto event_cost">
                    <h3>ESTIMATED COST FOR THIS EVENT</h3>
                    <div className='range_wdith'>

                        <CustomRangeSlider values={values} setValues={setValues} min={0} max={90} step={1} />
                    </div>
                </div>
                <div className="col-sm-6 col-12 m-auto  mobile_marign">
                    <h3>HOW WILL THE COST BE <br className='hide' /> SPLIT AMONG THE GROUP ?</h3>
                    <div className='cost_split'>
                        <div className='paying'>
                            <input type="checkbox" />
                            <label htmlFor="">I`m Paying</label>
                        </div>
                        <div className='shared'>
                            <input type="checkbox" />
                            <label htmlFor="">Evenly Shared</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TimeAndPrice