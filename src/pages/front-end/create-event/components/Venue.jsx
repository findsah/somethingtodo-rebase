import React from 'react'
import dummy from '../../../../assets/dummy1.png'

const Venue = () => {
    return (
        <div className='create_event_venue'>
            {/* header */}
            <div className='header'>
                <h2>SEARCH VENUES: </h2>
                <div class="right-inner-icon">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input type="search" placeholder="Search City / Current Location" />
                </div>
            </div>

            {/* filter */}

            <div className='filter_group'>
                <div className='filter_group_left'>
                    <h2>ALL</h2>
                    <select name="catogories" id="catogories">
                        <option value="1"> option one</option>
                    </select>
                    <select name="distance" id="distance">
                        <option value="1"> option one</option>
                    </select>
                </div>
                <button className='btn_secondary' style={{ width: "233px", height: "48px" }}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    CREATE CUSTOM VENUE
                </button>
            </div>

            {/* card and map */}

            <div className='card_and_map_container'>
                {/* card */}
                <div className='card_container'>
                    {
                        [1, 2, 3, 4, 5, 6].map(item => (
                            <div className='event_card'>
                                <img src={dummy} alt="" />
                                <h5 >LOREM IPSUM DOLOR SIT AMET</h5>
                                <p className='p_gray_10 '>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <div className='btn-container'>
                                    <button className='btn_secondary '>
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                        ADD  VENUE
                                    </button>
                                </div>

                            </div>
                        ))
                    }





                </div>
                {/* map */}
                <div className='event_map'>
                    <div class="mapouter">
                        <div class="gmap_canvas">
                            <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=346&amp;height=850&amp;hl=en&amp;q=lahore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            </iframe>
                            <a href="https://piratebay-proxys.com/">Piratebay</a>
                        </div>

                    </div>
                </div>
            </div>

            {/* divider */}

            <div className='divider_container'>
                <div className='divider'></div>
                <button className='btn_blue'>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    VIEW MORE
                </button>
            </div>

            {/* added venue */}
            <div className='add_venue_container'>
                <h2>ADDED VENUES</h2>
                <div className='venue_card_container'>

                    <div className='venue_cards'>
                        {
                            [1, 2].map(item => (
                                <div className='venue_card'>
                                    <img src={dummy} alt="" />
                                    <h5 >LOREM IPSUM DOLOR SIT AMET</h5>
                                    <p className='p_gray_10 '>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                    <div className='btn-container'>
                                        <button className='btn_error'>
                                            <i class="fa fa-minus" aria-hidden="true"></i>
                                            ADD  VENUE
                                        </button>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                    <div className='add_venue'>
                        <div className='create'>
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Venue