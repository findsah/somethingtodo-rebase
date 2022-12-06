import React from 'react'
import Slider from 'react-slick'
import { settings } from '../../../../config/helper'
import blog1 from '../../../../assets/blog1.png'
export default function BlogCard() {
    return (
        <div className='container'>
            <div className="row  blog-card">
                <Slider {...settings}>
                    {
                        [1, 2, 3, 4, 5, 6].map(item => (
                            <div className="col-4 ">
                                <div className="row  ">
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
                </Slider>

            </div>
        </div>
    )
}
