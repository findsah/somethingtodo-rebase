import React from 'react'
import Blog from './components/Blog'
import Casuals from './components/Casuals'
import CFEvent from './components/CFEvents'
import Dining from './components/Dining'
// import Events from './components/Events'
import ReadyEvents from './components/ReadyEvents'
import Somethingtodo from './components/Somethingtodo'
import TopVanues from './components/TopVanues'
import TopSection from './components/TopSection'
import DateSection from './components/DateSection'
import { Container } from 'react-bootstrap'

const Home = () => {
    return (
        <>
            <TopSection />
            <Container style={{
                filter: "drop-shadow(0px 6px 24px rgba(0, 0, 0, 0.2))",
            }}>
                <TopVanues />
                <DateSection />
            </Container>
             <CFEvent />
            <Somethingtodo />
           <ReadyEvents />
            <Casuals />
            <Dining />
            <Blog />
            {/*<CFEvent />
            <Blog /> */}
        </>
    )
}

export default Home