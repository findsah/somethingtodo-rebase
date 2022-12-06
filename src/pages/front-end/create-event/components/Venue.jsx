import React, { useState } from 'react'
import dummy from '../../../../assets/dummy1.png'
import CustoModal from '../../components/CustomModal';


const Venue = () => {

    const [mapOrCarView, setMapOrCardView] = useState("mapview");
    const [mapOrcardTap, setMapOrCardTap] = useState("mapTap");
    const [open, setOpen] = useState(false);

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
                <button className='btn_secondary mobile_create_event '
                    style={{ width: "233px", height: "48px" }}
                    onClick={() => setOpen(true)}
                >
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    CREATE CUSTOM VENUE
                </button>
                {/* modal */}
                <CustoModal open={open} close={setOpen} title="CREATE CUSTOM VENUE" >
                    dklfjkldsj
                </CustoModal>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* card and map button for mobile*/}
            <div className='mobile_btn_switch_card_and_map'>
                <button
                    className={mapOrcardTap === "mapTap" ? "btn_default btn_current" : "btn_default"}
                    onClick={() => { setMapOrCardView("mapview"); setMapOrCardTap("mapTap") }}>
                    MAP VIEW
                </button>
                <button
                    className={mapOrcardTap === "listTap" ? "btn_default btn_current" : "btn_default"}
                    onClick={() => { setMapOrCardView("listview"); setMapOrCardTap("listTap") }}>
                    LIST VIEW
                </button>
            </div>
            {/* card and map  */}
            <div className='card_and_map_container'>
                {/* card */}

                <div className={mapOrCarView === "listview" ? "width" : "disable_list"}>
                    <div className="card_container">
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
                </div>
                {/* map */}
                <div className={mapOrCarView === "mapview" ? "width" : "disable_map"}>
                    <div className="event_map">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=346&amp;height=850&amp;hl=en&amp;q=lahore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                </iframe>
                                <a href="https://piratebay-proxys.com/">Piratebay</a>
                            </div>

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
                <h2 className='disable_mobile'>ADDED VENUES</h2>
                <h2 className='disable_desktop'>SEARCH VENUES:</h2>
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
                                        {/* while integrating api you must pass all attribute same on the button */}
                                        <button className='btn_error desktop_btn'>
                                            <i class="fa fa-minus" aria-hidden="true"></i>
                                            REMOVE VENUE
                                        </button>
                                        <button className='btn_error mobile_btn'>
                                            <i class="fa fa-minus" aria-hidden="true"></i>
                                            REMOVE
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