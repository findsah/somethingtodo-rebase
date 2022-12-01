/*
author : arman
github: https://github.com/Arman-Arzoo
*/
import React from 'react'
import CreateEventHead from './components/CreateEventHead'
import StepperForm from './components/StepperForm'

const CreateEvent = () => {
    return (
        <>
            {/* Create event header */}
            <CreateEventHead />
            {/* Create event Stepper  */}
            <div className='container eventStepContainer'>
                {/* <StepperForm /> */}
            </div>
        </>
    )
}

export default CreateEvent 