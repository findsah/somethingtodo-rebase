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
import BlogTopSection from './BlogTopSection'
import BlogCard from './BlogCard'

export default function BlogPost() {
    return (
        <>
            <div className="main-blog-post">
                <BlogTopSection />
                <div className="container-fluid">
                    <div className="row d-flex justify-content-around">
                        <div className="col-5">
                            <div className="blog-bgImg">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-10">
                                        <h3>LOREM IPSUM DOLOR SIT AMET</h3>

                                    </div>
                                    <div className="col-10">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 sec-2">
                            <div className="row justify-content-center ">
                                <div className="col-12">
                                    <h2 className='text-centr'>SUGGESTED  EVENTS FROM <span className='span1'>  SOMETHINGTODO  NEARBY </span></h2>

                                </div>
                                <div className="col-12">
                                    <div className="date-cards">
                                        <DateCard />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="date-cards">
                                        <DateCard />
                                    </div>
                                </div>
                            </div>




                            {/* <CustomButton text='Read More' /> */}

                        </div>

                        <div className="row mt-5 justify-content-center ">
                            <div className="col-10"><hr /></div>
                        </div>

                    </div>
                    <BlogCard />
                </div >
            </div>
        </>
    )
}
