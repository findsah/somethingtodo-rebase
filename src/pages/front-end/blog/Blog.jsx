import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import BlogList from './components/BlogList'
import BlogTopSection from './components/BlogTopSection'

export default function Blog() {

    // useEffect(() => {
    //     var myHeaders = new Headers();
    //     myHeaders.append("Accept", "application/json");

    //     var requestOptions = {
    //         method: 'GET',
    //         headers: myHeaders,
    //         redirect: 'follow'
    //     };



    //     try {
    //         fetch("https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJj83WIGKvEmsRuQACGqZdj48&key=AIzaSyBR962qKrR2IwdYUmk8J4diZVZuV_L9pWw", requestOptions)
    //             .then(response => response.text())
    //             .then(result => console.log(result))
    //             .catch(error => console.log('error', error));

    //     } catch (error) {
    //         console.log(error)
    //     }

    // }, [])

    return (
        <div>
            <div className='main-backgrond'>
                <BlogTopSection />
                <BlogList />
            </div>

        </div>
    )
}
