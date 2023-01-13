import React from "react";
import Slider from "react-slick";
import CustomButton from "../../../../components/form/CustomButton";
import { settings } from "../../../../config/helper";
import VanueCard from "../components/VanueCard";
import dashboard from "../../../../assets/icons/dashboard.svg";
import editvanue from "../../../../assets/icons/editvanue.svg";
import businessname from "../../../../assets/icons/businessname.svg";
import whatsapp from "../../../../assets/icons/whatsapp.svg";
import proemail from "../../../../assets/icons/proemail.svg";
import proloction from "../../../../assets/icons/proloction.svg";
import claimvanue from "../../../../assets/icons/claimvanue.png";
import logo from "../../../../assets/logo.png";
import dashprofile from "../../../../assets/dashprofile.png";
import { GrFacebook } from "react-icons/gr";
import { ImTwitter } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { Button } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
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
        <div className=" main-login mt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-11 col-12">
              <div className="row justify-content-center form-sec">
                <div className="col-11">
                  <div className="row">
                    <div className="col-lg-6 col-11">
                      <h2>VENUE NAME</h2>
                      <input className="text" type="text" placeholder="Text" />
                      <div className="col-lg-8 col-11">
                      <h2>VENUE DESCRIPTION</h2>
                      {/* <input type="password" placeholder="Password" /> */}
                      <div className="pass-wrapper ">
                        {/* <input className="text"  placeholder="DESCRIPTION" type="text" /> */}
                        <textarea className="form-control textarea"></textarea>
                       
                      </div>
                      
                    </div>
                    <div className="col-11 d-flex">
                        <div className='feild'>
                                <div className='icon'>
                                    {/* <img src={locationIcon} alt="" /> */}
                                    <h3>EVENT ADDRESS</h3>
                                </div>
                                <div className='input_text_group'>
                                    <input type="text"
                                        name="city"
                                        id="city"
                                        placeholder='City'
                                        className='text'
                                        // value={city}
                                        // onChange={(e) => setCity(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        name="Street"
                                        id="Street"
                                        placeholder='Street'
                                        className='text'
                                        // value={street}
                                        // onChange={(e) => setStreet(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        name="Buildings"
                                        id="Buildings"
                                        placeholder='Buildings'
                                        className='text'
                                        // value={building}
                                        // onChange={(e) => setBuilding(e.target.value)}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-11">
                      <h2>Venue Information</h2>
                      <div className="col-12  profile-box">
                        <div className="row">
                          <div className="col-8">
                            <div className="social-links">
                              <div className="links2">
                                <div className="col-10 d-flex mt-3">
                                  <img src={businessname} alt=""  />
                                  <input type="text"  className="text" placeholder="www.webdesign.com" />

                                </div>
                                <div className="col-10 d-flex mt-4">
                                  <img src={whatsapp} alt="" />
                                  <input type="number"  className="text" placeholder="888-888-888 / 999-999-999" />
                                </div>
                                <div className="col-10 d-flex mt-4">
                                  <img src={proemail} alt="" />
                                  <input type="email"  className="text" placeholder="info@emailaddress/com" />
                                </div>
                                <div className="col-10 d-flex mt-4">
                                  <img src={proloction} alt="" />
                                  <input type="text"  className="text" placeholder="Lorem ipsum dolor sit amet" />
                                </div>
                               
                              </div>
                            </div>
                          </div>
                        </div>
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
