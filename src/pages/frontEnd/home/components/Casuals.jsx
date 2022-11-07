import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
const Casuals = () => {
    const [eventsData, setEventsData] = useState([]);

    useEffect(() => {
        Aos.init();
    }, []);


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 p-0">
                    <div className="sec6-bg-img1">
                        <div className="section1-content" style={{ overflowX: "hidden" }}>
                            <p className="sec6-para1" style={{ position: "relative", zIndex: "1" }}>
                                NEW IN TOWN AND DON'T ANYONE HERE YET?
                            </p>
                            <p className="sec6-para2">
                                Meet Someone who can show you around a little bit
                            </p>
                            <button className="sec6-button1"> SEE ALL CASUAL</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Casuals;
