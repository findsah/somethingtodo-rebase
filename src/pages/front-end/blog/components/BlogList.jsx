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
import Slider from 'react-slick'
import { settings } from '../../../../config/helper'
import { Link } from 'react-router-dom'
import BlogCard from './BlogCard'
import { GetBlogList } from '../service/BlogApi'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function BlogList() {

    const dispatch = useDispatch()

    // useSlector to get State from store
    const { getBlogList } = useSelector((state) => state?.blogSlice);
    console.log(getBlogList)

    // useEffect to call function
    useEffect(() => {
        dispatch(GetBlogList())
    }, [])
    return (
        <div className="container-fluid">
            <div className="row  justify-content-center mobilescreenstyle">
                <Slider {...settings}>
                    {
                        [1, 2, 3, 4, 5, 6].map(item => (

                            <div className="recent-blog-img2 mt-3">
                                <div className="row justify-content-center content-sec">
                                    <div className="col-11">
                                        <h3>BLOG NAME</h3>

                                    </div>
                                    <div className="col-11">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit ame</p>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
                <div className="row mt-5  justify-content-center">
                    <div className="col-12"><hr /></div>
                </div>
            </div>
            <div className="row d-flex justify-content-around main-bloglist">
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
                <div className="col-4 ">
                    <img src={micImg} alt="" className='micimg' />
                </div>
                <div className="col-11" style={{ padding: '2.3rem' }}><hr /></div>
                {/* <div className="row mt-5 justify-content-center ">
                    <div className="col-10"><hr /></div>
                </div> */}
                <div className="row mt-5">
                    <BlogCard />
                </div>
                <RxDoubleArrowDown className='arrow' />
            </div>
            <div className="row circle-img  ">
            </div>
            <div className="row justify-content-center suggested-sec">
                <div className="col-12 mt-5">
                    <div className="row justify-content-center  align-items-center first-row">
                        <div className="highligt"></div>
                        <div className="col-lg-3 col-12">
                            <h2>SUGGESTED  EVENTS FROM <span className='spansomething'>  SOMETHINGTODO  NEARBY </span></h2>
                        </div>
                        <div className="col-lg-9 col-12">
                            <div className="date-cards">
                                <Slider {...settings}>
                                    {
                                        [1, 2, 3, 4, 5, 6].map(item => (
                                            <DateCard />
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-10 d-none d-sm-none d-md-block">
                    <div className="row  ">
                        <div className="date-cards ">
                            <Slider {...settings}>
                                {
                                    [1, 2, 3, 4, 5, 6].map(item => (
                                        <DateCard />
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center button-style ">
                    <div className="col-12">
                        <p className='text-center'>
                            <CustomButton text='VIEW MORE' />
                        </p>
                    </div>
                </div>
                <div className="col-9 d-none d-sm-none d-md-block" style={{ marginLeft: '-101px' }}><hr /></div>
            </div>
            {/* <div className="row mt-5 justify-content-center ">
                <div className="col-9 d-none d-sm-none d-md-block"><hr /></div>
            </div> */}
            <div className="row   recent-blog ">
                <div className="recentBlogHighlight"></div>
                <div className="col-6">
                    <div className="row  justify-content-end">
                        <div className="col-10 mt-4">
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
                                <Link to='/blog-post'>
                                    <div className="col-8">
                                        <img src={recentpost1} alt="" />

                                    </div>
                                </Link>
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

            </div>
            <div className='similar-vanue-style'>
                <div className="similarVanueHighlight"></div>
                <SimilarVanues />
            </div>
        </div >
    )
}
