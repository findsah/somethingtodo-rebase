import React, { useEffect, useState } from 'react'
// import PlacesAutocomplete from 'react-places-autocomplete';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Events() {
    const [address, setAddress] = useState("Lahore");

    useEffect(() => {
        AOS.init({ duration: 3000 });
    }, [])

    return (
        <div>
            <div className="events">
                <div className="container">
                    <div className="row mb-5 justify-content-between">
                        <div className="col-lg-2 col-sm-12" style={{ overflowX: "hidden" }}>
                            <div data-aos="fade-right" className="aos-init aos-animate">
                                <div className="happen">
                                    What's Happening Right Now in
                                    <span className="tron">Lahore</span>
                                </div>
                            </div>
                            <div className="autocompleteDiv">
                                <input
                                    placeholder="Search Venue / Location"
                                    className="form-control cities"
                                    value={address}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
