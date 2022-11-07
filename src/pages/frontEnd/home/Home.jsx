import React from 'react'
import Casuals from './components/Casuals'
import CFEvent from './components/CFEvents'
import Events from './components/Events'
import ReadyEvents from './components/ReadyEvents'
import Somethingtodo from './components/Somethingtodo'
import TopSection from './components/TopSection'
// import Date from './components/Date'

const Home = () => {
    return (
        <>
            <TopSection />
            <Events />
            {/* <Date /> */}
            <CFEvent />
            <ReadyEvents />
            <Somethingtodo />
            <Casuals />
        </>
    )
}

export default Home