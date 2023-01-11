import React from "react";
import Slider from "react-slick";
import CustomButton from "../../../../components/form/CustomButton";
import { settings } from "../../../../config/helper";
import VanueCard from "../components/VanueCard";

const EditVenue = () => {
  return (
    <div className="edit-vanue">
 <div className="col-12" style={{ marginLeft: "8rem" }}>
      <div className="row vanue-style mt-5">
        <h2>MY VENUES (3)</h2>
        <div className="col-lg-12 edit-vane mt-3">
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <VanueCard />
            ))}
          </Slider>
        </div>
      </div>
      <div className="container-fluid main-login mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-11 col-12">
            <div className="row justify-content-center form-sec">
              <div className="col-11">
                <div className="row">
                  <div className="col-lg-6 col-11">
                    <h2>VENUE NAME</h2> 
                    <textarea className="form-control"></textarea>
                    {/* <input className="text" type="text" placeholder="Text" /> */}
                  </div>
                  <div className="col-lg-6 col-11">
                    <h2>Venue Information</h2> 
                    <input type="text" className="text" placeholder="Text" />
                  </div>

                  <div className="col-lg-8 col-11">
                    <h2>VENUE DESCRIPTION</h2>
                    {/* <input type="password" placeholder="Password" /> */}
                    <div className="pass-wrapper ">
                      <input className="text"  placeholder="DESCRIPTION" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default EditVenue;
