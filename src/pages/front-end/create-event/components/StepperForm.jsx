/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React, { useEffect, useState } from 'react'
import Invites from './Invites'
import TimeAndPrice from './TimeAndPrice'
import Venue from './Venue'

const StepperForm = () => {

    // usestate to control state locally
    const [activeStepper, setActiveSteper] = useState(1)
    // venue local state
    const [images, setImages] = useState([])
    const [previewImage, setPreviewImage] = useState([])
    const [addedVenues, setAddedVenues] = useState([])
    // event discription local state
    const [eventTitle, setEventTitle] = useState("");
    const [eventDescription, setEventDescription] = useState('')
    // invite local state
    const [age, setAge] = useState([25, 75]);
    const [number, setNumber] = useState("")
    const [gender, setGender] = useState("")
    const [isthisDate, setIsthisDate] = useState(false)
    const [whocanjoin, setWhocanjoin] = useState("")



    //  active stepper to reset
    useEffect(() => {
        if (activeStepper === 5) {
            setActiveSteper(1)
        }
    }, [activeStepper])

    // main state controller from parrent for venue
    const venueData = {
        images,
        setImages,
        previewImage,
        setPreviewImage,
        addedVenues,
        setAddedVenues
    }

    // main state controller from parrent for invites
    const inviteData = {
        age,
        gender,
        number,
        setAge,
        setGender,
        setNumber,
        isthisDate,
        setIsthisDate,
        whocanjoin,
        setWhocanjoin

    }

    // whole date
    const data = {
        all_venues: addedVenues,
        title: eventTitle,
        description: eventDescription,
        IsthisDate: isthisDate,
        age,
        gender,
        number,
        time: "",
        date: "",
        location: "",
        whocanjoin,
    }

    console.log(data)
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
                            value={eventTitle}
                            onChange={(e) => setEventTitle(e.target.value)}
                        />
                    </div>
                    <div className="event_description">
                        <h2>EVENT DESCRIPTION</h2>
                        <textarea type="textarea" id='eventDiscription' name="eventDiscription" rows="5" cols="50" placeholder='Text'
                            value={eventDescription}
                            onChange={(e) => setEventDescription(e.target.value)}
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
                    <TimeAndPrice />
                </>
            }

            <div className='text-center mt-5'>
                <button className='btn_primary' onClick={() => setActiveSteper(activeStepper + 1)}>{activeStepper === 4 ? "FINISH" : "NEXT"}</button>
            </div>

        </>
    )
}

export default StepperForm