import React from "react";
import dashboarloction from "../../../assets/images/dashboarloction.png";
import promotion from "../../../assets/images/promotion.png";
import avialpro from "../../../assets/images/avialpro.png";
import disputlist from "../../../assets/images/disputlist.png";
import Slider from "react-slick";
import { settings } from "../../../config/helper";
import DateCard from "../../front-end/components/DateCard";
import TopVanuesCard from "../../front-end/components/TopVanuesCard";
import { Button, Card } from "react-bootstrap";
import vanueImg from "../../../assets/Rectangle 11.jpg";
import { MdLocationPin } from "react-icons/md";
import VanueCard from "./components/VanueCard";
export default function Dashboard() {
  return (
    <div className="mt-4 dashboard">
      <div className="row ">
        <div className="col-9 " style={{ marginLeft: "8rem" }}>
          <h2>Dashboard</h2>
          <div className="row d-flex justify-content-around">
            <div className="col-6 vanue-clamid mt-3">
              <div className="row d-flex justify-contnet-center">
                <div className="col-6 ">
                  <h2>3</h2>

                  <p>Venues Claimed</p>
                </div>
                <div className="col-5">
                  <img src={dashboarloction} alt="" />
                </div>
              </div>
            </div>

            <div className="col-6 ongoing-promotion mt-3">
              <div className="row d-flex justify-contnet-center">
                <div className="col-7 ">
                  <h2>3</h2>

                  <p>On - going Promotions</p>
                </div>
                <div className="col-4">
                  <img src={promotion} alt="" />
                </div>
              </div>
            </div>
            <div className="col-6 available-promotion mt-4">
              <div className="row d-flex justify-contnet-center">
                <div className="col-7 ">
                  <h2>2</h2>

                  <p>Available Promotions Plans</p>
                </div>
                <div className="col-4">
                  <img src={avialpro} alt="" />
                </div>
              </div>
            </div>
            <div className="col-6 dispute-list mt-4">
              <div className="row d-flex justify-contnet-center">
                <div className="col-7 ">
                  <h2>3</h2>

                  <p>Veues In Dispute List</p>
                </div>
                <div className="col-4">
                  <img src={disputlist} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12" style={{ marginLeft: "8rem" }}>
          <div className="row  mt-5">
            <h2>MY VENUES (3)</h2>
            <div className="col-lg-12 mt-3">
              <Slider {...settings}>
                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                  <VanueCard/>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
