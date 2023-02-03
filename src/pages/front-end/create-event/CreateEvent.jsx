/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React, { useState } from 'react'
import { useEffect } from 'react'
import CreateEventHead from './components/CreateEventHead'
import EventAndVenueDetail from './components/EventAndVenueDetail'
import StepperForm from './components/StepperForm'

const CreateEvent = () => {
    // venue local state
    const [images, setImages] = useState([])
    const [previewImage, setPreviewImage] = useState([])
    const [addedVenues, setAddedVenues] = useState([])
    const [addedVenueDetails, setAddedVenueDetails] = useState([])

    // event discription local state
    const [eventTitle, setEventTitle] = useState("");
    const [eventDescription, setEventDescription] = useState('')
    // invite local state
    const [age, setAge] = useState([25, 75]);
    const [number, setNumber] = useState("")
    const [gender, setGender] = useState("")
    const [isthisDate, setIsthisDate] = useState(false)
    const [whocanjoin, setWhocanjoin] = useState("")
    const [peopleInfo, setpeopleInfo] = useState([])
    // time and price state
    const [eventDate, setEventDate] = useState("")
    const [eventTime, setEventTime] = useState("")
    const [eventCost, setEventCost] = useState([0, 0])
    const [costSplit, setCostSplit] = useState("")


    // main state controller from parrent for venue
    const venueData = {
        images,
        setImages,
        previewImage,
        setPreviewImage,
        addedVenues,
        setAddedVenues,
        setAddedVenueDetails,
        addedVenueDetails
    }
    //main state controller from parent to discritpion
    const descData = {
        eventTitle,
        eventDescription,
        setEventTitle,
        setEventDescription
    }
    // main state controller from parrent for invites
    const inviteData = {
        age,
        gender,
        number,
        isthisDate,
        whocanjoin,
        peopleInfo,
        setAge,
        setGender,
        setNumber,
        setIsthisDate,
        setWhocanjoin,
        setpeopleInfo

    }
    //main state controller from prarrent for time & price
    const timeandpriceData = {
        eventDate,
        eventCost,
        eventTime,
        costSplit,
        setEventCost,
        setEventDate,
        setEventTime,
        setCostSplit

    }
    // modify createEventdata
    const addVenues = addedVenues.map((item) => {
        return {
            place_id: item?.place_id,
            imageUrl: item?.photos ? item?.photos[0]?.getUrl() : "",
            name: item?.name,

            description: item?.vicinity,
            location: { lat: item?.geometry?.location?.lat(), lng: item?.geometry?.location?.lng() },

        }
    })



    // whole onSubmit date for createEvent
    const createEventData = {
        // id: "1",
        title: eventTitle,
        description: eventDescription,
        location: "demo",
        isthisDate: isthisDate,
        time: eventTime,
        date: eventDate,
        TicketPrice: eventCost[1],
        locationings: addedVenues,
        peopleinformations: peopleInfo
    }

    const reset = () => {
        setAddedVenues([])
        setAddedVenueDetails([])
        setEventTitle("")
        setEventDescription("")
        setIsthisDate(false)
        setWhocanjoin("")
        setpeopleInfo([])
        setEventCost([0, 0])
        setEventDate("")
        setEventTime("")
        setCostSplit("")


    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* Create event header */}
            <CreateEventHead
                previewImage={previewImage}
                descData={descData}
                timeandpriceData={timeandpriceData}
                addedVenues={addedVenues}
            />

            {/* Create event Stepper  */}
            <div className='container eventStepContainer'>
                <StepperForm
                    venueData={venueData}
                    descData={descData}
                    inviteData={inviteData}
                    timeandpriceData={timeandpriceData}
                    data={createEventData}
                    reset={reset}

                />

            </div>
            <div className='container '>
                <EventAndVenueDetail
                    addedVenues={addedVenues}
                    addedVenueDetails={addedVenueDetails}
                    timeandpriceData={timeandpriceData}


                />
            </div>
        </>
    )
}

export default CreateEvent 