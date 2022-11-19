import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import dmmyimg from '../../../../assets/dmmy.png'
import pn from '../../../../assets/p.png'
import glass from '../../../../assets/glass.png'
import { MdSavedSearch } from 'react-icons/md';
import { settings2 } from '../../../../config/helper'
import CustomButton from '../../../../components/form/CustomButton'
import Aos from "aos";
import "aos/dist/aos.css";
export default function Blog() {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <div className="container-fluid main-blog" style={{ position: "relative", overflowX: "hidden" }}>
                <div className="blogHighlight aos-init aos-animate" data-aos="fade-left" data-aos-duration="2000"></div>
                <p className="checkout">checkout our blog for more updates </p>
                <div className="row justify-content-center ">
                    <div className="col-12 col-md-12">
                        <Slider {...settings2} >
                            <div className="card111"><img src={dmmyimg} />
                                <div className="info">
                                    <h1>LOREM IPSUM DOLOR SIT AMET1</h1>
                                    <div className="search-icon">
                                        <span><MdSavedSearch className='icon' /></span>
                                    </div>
                                    <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                                </div>
                            </div>
                            <div className="card111"><img src={glass} />
                                <div className="info">
                                    <h1>LOREM IPSUM DOLOR SIT AMET1</h1>
                                    <div className="search-icon">
                                        <span><MdSavedSearch className='icon' /></span>
                                    </div>
                                    <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                                </div>
                            </div>
                            <div className="card111"><img src={dmmyimg} />
                                <div className="info">
                                    <h1>LOREM IPSUM DOLOR SIT AMET1</h1>
                                    <div className="search-icon">
                                        <span><MdSavedSearch className='icon' /></span>
                                    </div>
                                    <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                                </div>
                            </div>
                            <div className="card111"><img src={pn} />
                                <div className="info">
                                    <h1>LOREM IPSUM DOLOR SIT AMET1</h1>
                                    <div className="search-icon">
                                        <span><MdSavedSearch className='icon' /></span>
                                    </div>
                                    <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                                </div>
                            </div>
                            <div className="card111"><img src={dmmyimg} />
                                <div className="info">
                                    <h1>LOREM IPSUM DOLOR SIT AMET1</h1>
                                    <div className="search-icon">
                                        <span><MdSavedSearch className='icon' /></span>
                                    </div>
                                    <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                                </div>
                            </div>

                        </Slider>
                        <Link to="/blog">
                            <div className="custom-button mt-3" style={{ textAlign: 'center' }}>
                                <CustomButton text='SEE ALL BLOG POST' />
                                {/* <button className="see-but">SEE ALL BLOG POST</button> */}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
