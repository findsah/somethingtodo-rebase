/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
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
                <StepperForm />
            </div>
        </>
    )
}

export default CreateEvent 