import React from 'react'
import Slider from 'react-slick'
import { settings } from '../../../config/helper'
import TopVanuesCard from './TopVanuesCard'
export default function SimilarVanues() {
    return (
        <div className="container">
            <div className="row similer-vanues" >
                <div className="col-lg-12 text-center  ">
                    {/* <div className="vanueHighlight aos-init aos-animate" data-aos="fade-right" data-aos-duration="2000"></div> */}
                    <h2> OTHER SIMILAR <span className='span1'>VENUES</span></h2>

                </div>
                <div className='col-lg-12 mt-3'>
                    <Slider {...settings} >
                        {
                            [1, 2, 3, 4, 5, 6, 7].map(item => (

                                <TopVanuesCard />

                            ))
                        }
                    </Slider>

                </div>


            </div>
        </div>
    )
}
