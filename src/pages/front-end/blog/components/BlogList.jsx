import React from 'react'
import blogimg from '../../../../assets/blog.png'
import micImg from '../../../../assets/mic.png'
import blog1 from '../../../../assets/blog1.png'
import Ellipse from '../../../../assets/Ellipse.png'
import CustomButton from '../../../../components/form/CustomButton'
import { RxDoubleArrowDown } from 'react-icons/rx'
import DateCard from '../../components/DateCard';
import { settings } from '../../../../config/helper'
import Slider from 'react-slick'
import TopVanuesCard from '../../components/TopVanuesCard'
import SimilarVanues from '../../components/SimilarVanues'

export default function BlogList() {
    return (
        <div className="container-fluid">

            <div className="row d-flex justify-content-around main-bloglist">
                <div className="col-4">
                    {/* <div className="blogHighlight"></div> */}
                    <h2>SOMETHING <span>TO </span>DO </h2>
                    <hr />
                    <h3>BLOG NAME</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.iscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </p>
                    <CustomButton text='Read More' />

                </div>
                <div className="col-4">
                    <img src={micImg} alt="" />
                </div>

                <div className="row mt-5 moreblog">
                    <hr />
                    {
                        [1, 2, 3].map(item => (
                            <div className="col-4 mt-5">
                                <div className="row ">
                                    <div className="col-11">
                                        <img src={blog1} alt="" />
                                    </div>
                                    <div className="col-11 mt-3">
                                        <div className="row justify-content-center">
                                            <div className="col-10">
                                                <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                                            </div>
                                            <div className="col-10">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <RxDoubleArrowDown className='arrow' />


                {/* <div className="col-12 text-center">
                    <div className="row">
                        <div className="col-3 mt-3 df"><hr /></div>
                        <div className="col-6"><h2>  Trending around the world  </h2></div>
                        <div className="col-3 mt-3 df"><hr /></div>
                    </div>

                </div>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                        <div className="col-6 justify-content-center list-sec mt-5">
                            <div className="row">
                                <div className="col-5">
                                    <img src={blogimg} alt="" />
                                </div>
                                <div className="col-4">
                                    <h2>The most haunted places in USA</h2>
                                    <p>
                                        All “Thriller”, no filter with our creepy countdownof the greatest ever Halloween song
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                } */}

            </div>
            <div className="row suggested-sec  ">
                <div className="highligt"></div>
                <div className="col-3">
                    <h2 className=''>SUGGESTED <br /> EVENTS FROM <br /><span className='spansomething'>  SOMETHINGTODO <br /> NEARBY </span></h2>
                </div>

                {
                    [1, 2, 3, 4, 5, 6, 7].map(item => (
                        <div className="col-3">
                            <div className="date-cards">
                                <DateCard />
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className="row justify-content-center">
                <div className="col-12">
                    <p className='text-center'>
                        <CustomButton text='VIEW MORE' />
                    </p>
                </div>
            </div>
            <div className='similar-vanue-style'>
                <SimilarVanues />
            </div>
        </div >
    )
}
