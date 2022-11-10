import React from 'react'
import Blog from './components/Blog'
import Casuals from './components/Casuals'
import CFEvent from './components/CFEvents'
import Dining from './components/Dining'
// import Events from './components/Events'
import ReadyEvents from './components/ReadyEvents'
import Somethingtodo from './components/Somethingtodo'
import TopSection from './components/TopSection'
import Vanues from './components/Vanues'
import Date from './components/Date'

const Home = () => {
    return (
        <>
            <TopSection />
            <Vanues />
            {/* <Events /> */}
            <Date />
            <CFEvent />
            <ReadyEvents />
            <Somethingtodo />
            <Casuals />
            <Dining />
            <Blog />
        </>
    )
}

export default Home