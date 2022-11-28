/*
author : arman
github: https://github.com/Arman-Arzoo
*/
import React, { useEffect, useState } from 'react'
import Invites from './Invites'
import Venue from './Venue'

const StepperForm = () => {

    const [activeStepper, setActiveSteper] = useState(1)


    useEffect(() => {
        if (activeStepper === 5) {
            setActiveSteper(1)
        }
    }, [activeStepper])

    return (
        <>
            {/* stepper */}
            <section className="step-wizard">
                <ul className="step-wizard-list">
                    <li className="step-wizard-item ">
                        <span className="progress-label">Step 1</span>
                        <span className={activeStepper === 1 ? "progress-count current-item" : "progress-count"}>VENUE</span>
                    </li>
                    <li className="step-wizard-item ">
                        <span className="progress-label">Step 2</span>
                        <span className={activeStepper === 2 ? "progress-count current-item" : "progress-count"}>EVENT DESCRIPTION</span>
                    </li>
                    <li className="step-wizard-item">
                        <span className="progress-label">Step 3</span>
                        <span className={activeStepper === 3 ? "progress-count current-item" : "progress-count"}>INVITES</span>
                    </li>
                    <li className="step-wizard-item">
                        <span className="progress-label">Step 4</span>
                        <span className={activeStepper === 4 ? "progress-count current-item" : "progress-count"}>TIME & PRICE</span>
                    </li>
                </ul>
            </section>
            {/* active stepper */}

            {
                /* venue */
                activeStepper === 1 &&
                <>
                    <Venue />
                </>
            }

            {
                /* event Description */
                activeStepper === 2 &&
                <>

                    <div className="event_description">

                        <h2>EVENT TITLE</h2>
                        <input type="text" />
                    </div>
                    <div className="event_description">
                        <h2>EVENT DESCRIPTION</h2>
                        <textarea type="textarea" id='eventDiscription' name="eventDiscription" rows="4" cols="50" />
                    </div>
                </>
            }


            {
                /* invites  */
                activeStepper === 3 &&
                <>
                    <Invites />
                </>
            }
            {
                /*  time and price */
                activeStepper === 4 &&
                <>
                    time and price
                </>
            }

            <div className='text-center mt-5'>
                <button className='btn_primary' onClick={() => setActiveSteper(activeStepper + 1)}>NEXT</button>
            </div>

        </>
    )
}

export default StepperForm