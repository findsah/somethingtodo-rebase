/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import CustomEventSuccessPopup from '../../components/CustomEventSuccessPopup'
import Invites from './Invites'
import TimeAndPrice from './TimeAndPrice'
import Venue from './Venue'

const StepperForm = ({ data, venueData, descData, inviteData, timeandpriceData }) => {
    // usestate to control state locally
    const [activeStepper, setActiveSteper] = useState(1)
    const [openSuccess, setOpenSuccess] = useState(false)

    // create event action
    const createEventAction = () => {
        // toast.success("your event is created")
        console.log(data)
        setOpenSuccess(true)
    }
    return (
        <>
            {/* stepper */}
            <section className="step-wizard">
                <ul className="step-wizard-list">
                    <li className="step-wizard-item " >
                        <span className="progress-label">Step 1</span>
                        <div onClick={() => setActiveSteper(1)} className={activeStepper === 1 ? "progress-count current-item" : "progress-count"}>
                            <span className='d_d'>VENUE</span>
                            <span className='m_d'>{activeStepper === 1 ? "venue" : '1'}</span>
                        </div>
                    </li>
                    <li className="step-wizard-item "  >
                        <span className="progress-label">Step 2</span>
                        <div onClick={() => setActiveSteper(2)} className={activeStepper === 2 ? "progress-count current-item" : "progress-count"}>
                            <span className='d_d'>EVENT DESCRIPTION</span>
                            <span className='m_d'>{activeStepper === 2 ? "Event Description" : '2'}</span>
                        </div>
                    </li>
                    <li className="step-wizard-item"  >
                        <span className="progress-label">Step 3</span>
                        <div onClick={() => setActiveSteper(3)} className={activeStepper === 3 ? "progress-count current-item" : "progress-count"}>
                            <span className='d_d'>INVITES</span>
                            <span className='m_d'>{activeStepper === 3 ? "Invites" : '3'}</span>
                        </div>
                    </li>
                    <li className="step-wizard-item">
                        <span className="progress-label">Step 4</span>
                        <div onClick={() => setActiveSteper(4)} className={activeStepper === 4 ? "progress-count current-item" : "progress-count"}>
                            <span className='d_d'>TIME & PRICE</span>
                            <span className='m_d'>{activeStepper === 4 ? "Time & Price" : '4'}</span>
                        </div>
                    </li>
                </ul>
            </section>
            {/* active stepper */}

            {
                /* venue */
                activeStepper === 1 &&
                <>
                    <Venue  {...venueData} />
                </>
            }

            {
                /* event Description */
                activeStepper === 2 &&
                <>

                    <div className="event_description">

                        <h2>EVENT TITLE</h2>
                        <input type="text" placeholder='Text' className='text'
                            value={descData?.eventTitle}
                            onChange={(e) => descData?.setEventTitle(e.target.value)}
                        />
                    </div>
                    <div className="event_description">
                        <h2>EVENT DESCRIPTION</h2>
                        <textarea type="textarea" id='eventDiscription' name="eventDiscription" rows="5" cols="50" placeholder='Text'
                            value={descData?.eventDescription}
                            onChange={(e) => descData?.setEventDescription(e.target.value)}
                        />
                    </div>
                    {/* <EventAndVenueDetail /> */}
                </>
            }


            {
                /* invites  */
                activeStepper === 3 &&
                <>
                    <Invites {...inviteData} />
                </>
            }
            {
                /*  time and price */
                activeStepper === 4 &&
                <>
                    <TimeAndPrice {...timeandpriceData} />
                </>
            }

            <div className='text-center mt-5'>
                <button className='btn_primary' onClick={() => {
                    if (activeStepper != 4) {

                        setActiveSteper(activeStepper + 1);
                    }
                    if (activeStepper === 4) {
                        createEventAction()
                    }


                }}>{activeStepper === 4 ? "FINISH" : "NEXT"}</button>
            </div>
            <CustomEventSuccessPopup success="GREAT, YOUR EVENT IS CREATED!" openSuccess={openSuccess} close={setOpenSuccess} />

        </>
    )
}

export default StepperForm