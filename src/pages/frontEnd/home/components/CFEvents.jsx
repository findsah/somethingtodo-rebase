import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Aos from "aos";
import "aos/dist/aos.css";
const CFEvent = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="container">
            <div className="row sec-2">
                <div
                    className="bg-img-2 col-lg-6 col-md-12 col-sm-12"
                    data-aos="fade-right"
                >
                    <div className="createDiv" style={{ width: "80%", margin: "auto" }}>
                        <p className="create">
                            <span className="cr">CREATE</span> AN EVENT
                        </p>
                        <p className="follow">
                            Follow 5 simple steps to create your own event
                        </p>

                        <button
                            className="create-but"
                            onClick={() => toast.dark("Kindly Login to create event")}
                        >
                            CREATE NOW
                        </button>

                    </div>
                </div>
                <div
                    className="bg-img-3 col-lg-6 col-md-12 col-sm-12"
                    data-aos="fade-left"
                >
                    <div
                        className="circle-2"
                        data-aos="zoom-in-up"
                        data-aos-duration="500"
                    >
                        <p className="oor"> OR</p>
                    </div>
                    <div className="findDiv" style={{ width: "80%", margin: "auto" }}>
                        <p className="find">
                            <span className="fr">FIND</span> AN EVENT
                        </p>
                        <p className="todo">
                            Have Somethingtodo in mind and want a large list of events to
                            choose from? View all the events here
                        </p>
                        <Link to="/find-events" style={{ textDecoration: "none" }}>
                            <button className="find-but"> FIND NOW </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CFEvent;
