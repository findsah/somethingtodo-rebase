import React from 'react'
import micImg from '../../../../assets/mic.png'
import blog1 from '../../../../assets/blog1.png'
import recentpost1 from '../../../../assets/recentpost1.png'
import arrowForwardIcon from '../../../../assets/arrow_forward_ios.svg'
import CustomButton from '../../../../components/form/CustomButton'
import { RxDoubleArrowDown } from 'react-icons/rx'
import DateCard from '../../components/DateCard';
import TopVanuesCard from '../../components/TopVanuesCard'
import SimilarVanues from '../../components/SimilarVanues'

export default function BlogList() {
    return (
        <div className="container-fluid">

            {/* <div className="row d-flex justify-content-around main-bloglist">
                <div className="col-4 ">
                    <div className="blogHighlight"></div>
                    <h2>SOMETHING <span>TO </span>DO </h2>
                    <hr />
                    <h3>BLOG NAME</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.iscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </p>
                    <CustomButton text='Read More' />

                </div>
                <div className="col-4">
                    <img src={micImg} alt="" className='micimg' />
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-10"><hr /></div>
                </div>
                <div className="row mt-5 moreblog">
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

            </div> */}
            {/* <div className="row circle-img  ">
            </div> */}
            {/* <div className="row justify-content-center suggested-sec">
                <div className="col-12 mt-5">
                    <div className="row first-row">
                        <div className="highligt"></div>
                        <div className="col-3">
                            <h2 className=''>SUGGESTED  EVENTS FROM <span className='spansomething'>  SOMETHINGTODO  NEARBY </span></h2>
                        </div>
                        <div className="col-3 ">
                            <div className="date-cards">
                                <DateCard />
                            </div>
                        </div>
                        <div className="col-3 ">
                            <div className="date-cards">
                                <DateCard />
                            </div>
                        </div>
                        <div className="col-3 ">
                            <div className="date-cards">
                                <DateCard />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <div className="row ">
                        <div className="col-4 ">
                            <div className="date-cards">
                                <DateCard />
                            </div>
                        </div>
                        <div className="col-4 ">
                            <div className="date-cards">
                                <DateCard />
                            </div>
                        </div>
                        <div className="col-4 ">
                            <div className="date-cards">
                                <DateCard />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center button-style">
                    <div className="col-12">
                        <p className='text-center'>
                            <CustomButton text='VIEW MORE' />
                        </p>
                    </div>
                </div>
            </div> */}
            {/* <div className="row mt-5 justify-content-center">
                <div className="col-9"><hr /></div>
            </div> */}
            {/* <div className="row  justify-content-center recent-blog">
                <div className="recentBlogHighlight"></div>
                <div className="col-4">
                    <div className="row ">
                        <div className="col-12 mt-4">
                            <h2>SOMETHING <span className='span-color'>TO</span> DO</h2>
                        </div>
                        <div className="recent-blog-img mt-3">
                            <div className="row">
                                <div className="col-12">
                                    <h3>BLOG NAME</h3>

                                </div>
                                <div className="col-11">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit ame</p>

                                </div>
                                <div className="row mb-3">
                                    <div className="col-11">
                                        <span className='span2'>Friday, Oct 2020</span>
                                    </div>
                                    <div className="col-1">
                                        <img src={arrowForwardIcon} className="arrow-forward" alt="" />

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1 text-center">
                    <div class="vr vr-blurry " ></div>
                </div>
                <div className="col-4 second-sec">
                    <div className="row justify-content-center ">
                        <div className="col-12">
                            <h2>RESENT POSTS</h2>
                        </div>
                        <div className="col-12 mt-5 text-center">
                            <div className="row">
                                <div className="col-8">
                                    <img src={recentpost1} alt="" />

                                </div>
                                <div className="col-10 mt-2">
                                    <h3>BLOG NAME</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-5 text-center">
                            <div className="row">
                                <div className="col-8">
                                    <img src={recentpost1} alt="" />

                                </div>
                                <div className="col-10 mt-2">
                                    <h3>BLOG NAME</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div> */}
            {/* <div className='similar-vanue-style'>
                <div className="similarVanueHighlight"></div>
                <SimilarVanues />
            </div> */}
        </div >
    )
}
