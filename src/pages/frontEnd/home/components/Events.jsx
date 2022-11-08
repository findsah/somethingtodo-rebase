import React, { useEffect, useState } from 'react'
// import PlacesAutocomplete from 'react-places-autocomplete';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

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
                        <div className="col-lg-4 col-sm-12" style={{ overflowX: "hidden" }}>
                            <div data-aos="fade-right" className="aos-init aos-animate">
                                <div className="happen">
                                    What's Happening Right Now in
                                    <span className="tron">TORONTO</span>
                                </div>
                            </div>
                            <div className="autocompleteDiv">
                                {/* <select
                                    className="form-control form-select cities"
                                    value={address}
                                /> */}
                                <Dropdown>
                                    <Dropdown.Toggle variant="" className='cities' id="dropdown-basic">
                                        Change Loction
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
