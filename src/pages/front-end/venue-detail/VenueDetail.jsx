import React, { useEffect } from 'react'
import Logo from '../../../assets/logo/Logo.svg'
import starFill from '../../../assets/icons/starFill.svg'
import starNotFill from '../../../assets/icons/starUnFill.svg'
const VenueDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='venue_detail_event'>
                <div className="section_one_wrapper_light_blue">
                    <div className="section_one_wrapper_drak_blue">
                        <div className='inner_section'>
                            <img className='logo' src={Logo} alt="logo" />
                            <div className='inner_content'>
                                <h1>LOREM IPSUM DOLOR SIT AMET</h1>
                                <p>LOREM IPSUM DOLOR SIT AMET</p>
                            </div>
                        </div>
                    </div>
                    <div className='rating_card_container'>
                        <div className='star_rating'>
                            <span>4.2</span>
                            <div className='stars'>
                                <img src={starFill} alt="starFill" />
                                <img src={starNotFill} alt="starNotFill" />
                                <img src={starNotFill} alt="starNotFill" />
                                <img src={starNotFill} alt="starNotFill" />
                                <img src={starNotFill} alt="starNotFill" />
                            </div>
                        </div>
                        <div className='inline-item'>
                            <p>888</p>
                            <p>Google Reviews</p>
                        </div>
                        <div className='inline-item'>
                            <p>$$$</p>
                            <p>|</p>
                            <p>Pub</p>
                        </div>

                    </div>
                </div>
                <div className="slider_section">
                    slider

                </div>
                <div className="section_three">
                    venue detail
                </div>
                <div className="section_four">
                    carousel
                </div>
                <div className="section_five">
                    suggest event
                </div>
                <div className="section_six">
                    similar venue
                </div>

            </div>
        </>

    )
}

export default VenueDetail