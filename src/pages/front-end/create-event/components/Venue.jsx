/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React, { useState } from 'react'
import dummy from '../../../../assets/dummy1.png'
import CustoModal from '../../components/CustomModal';
import websiteIcon from '../../../../assets/icons/website.svg'
import phoneIcon from '../../../../assets/icons/phone.svg'
import locationIcon from '../../../../assets/icons/location.svg'
import MapModal from '../../components/MapModal';
import Slider from 'react-slick';


const Venue = () => {

    // usestate for local state
    const [mapOrCarView, setMapOrCardView] = useState("mapview");
    const [mapOrcardTap, setMapOrCardTap] = useState("mapTap");
    const [open, setOpen] = useState(false);

    // get image list
    const [imageViewList, setImageViewList] = useState([
        {
            id: 1,
            url: dummy
        },
        {
            id: 2,
            url: dummy
        }
    ]);

    // a funtion to add image
    const addimage = (data) => {
        setImageViewList(prevState => [...prevState, { id: 3, url: dummy }])
    }

    // a function to delete image
    const deleteImage = (id) => {
        setImageViewList((current) =>
            current.filter((img) => img.id !== id)
        );
    };

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
                    <select name="catogories" id="catogories" className='select'>
                        <option>Categories</option>
                        <option value="1"> option one</option>
                    </select>
                    <select name="distance" id="distance" className='select'>
                        <option>Distance</option>
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
                {/* modal for create cutom venue */}
                <CustoModal open={open} close={setOpen} title="CREATE CUSTOM VENUE" size="lg">
                    <div className='create_custom_venue'>
                        <div className="form_feild">
                            <div className='feild'>
                                <h3>VENUE NAME</h3>
                                <input type="text" className='text' placeholder='text' />
                            </div>
                            <div className='feild'>
                                <h3>CATEGORY</h3>
                                <select name="category" id="category" className='select'>
                                    <option >Category</option>
                                    <option value="catogory one">one</option>
                                </select>
                            </div>
                            <div className='feild'>
                                <h3>SET TO PRIVATE</h3>
                                <div className='checkbox_group'>
                                    <div className="checkbox">
                                        <input type="checkbox" id='yes' name='yes' />
                                        <label htmlFor="yes">Yes</label>
                                    </div>
                                    <div className="checkbox">
                                        <input type="checkbox" id='no' name='no' />
                                        <label htmlFor="no">No</label>
                                    </div>
                                </div>
                            </div>
                            <div className='feild'>
                                <div className='icon'>
                                    <img src={locationIcon} alt="" />
                                    <h3>EVENT ADDRESS</h3>
                                </div>
                                <div className='input_text_group'>
                                    <input type="text" name="city" id="city" placeholder='City' className='text' />
                                    <input type="text" name="Street" id="Street" placeholder='Street' className='text' />
                                    <input type="text" name="Buildings" id="Buildings" placeholder='Buildings' className='text' />
                                </div>

                            </div>
                            <div className='feild'>
                                <div className='icon'>
                                    <img src={phoneIcon} alt="" />
                                    <h3>PHONE NUMBER</h3>
                                </div>
                                <input type="text" className='text' placeholder='888-888-888' />
                            </div>
                            <div className='feild'>
                                <div className='icon'>
                                    <img src={websiteIcon} alt="" />
                                    <h3>WEBSITE</h3>
                                </div>

                                <input type="text" className='text' placeholder='888-888-888' />
                            </div>
                            <div className='feild form-outline mb-4 textarea_move'>
                                <h3>DESCRIPTION</h3>
                                <textarea className='form-control' name="description" id="description" rows="6" cols="50" style={{ maxWidth: "100%" }}></textarea>
                            </div>


                        </div>
                        <div className="photo_of_venue">
                            <h3>Add Photos Of Your Event</h3>
                            <div className='image_container'>

                                <Slider
                                    slidesToShow={2}
                                    className='image_preview_slider'>
                                    {
                                        imageViewList?.map(item => (

                                            <div className='image_preview' >
                                                <img src={item?.url} alt="" />
                                                <div className='close_icon' onClick={() => deleteImage(item?.id)}>
                                                    <i class="fa fa-times" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Slider>

                                {/* <div className='image_preview'>
                                    <img src={dummy} alt="" />
                                    <div className='close_icon'>
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </div>
                                </div> */}

                                <div className='add_image' onClick={() => addimage()} >
                                    <div className='icon_cirlce'>
                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                    </div>
                                </div>
                                {/* <input type="file" name="imgUpload" id="imgUpload" /> */}
                            </div>
                        </div>


                    </div>
                    <div className='d-flex justify-content-center mt-4 mb-3'>
                        <button className='btn_primary'>CREATE</button>
                    </div>
                </CustoModal>
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

                        <MapModal latlng={[31.5204, 74.3587]} />
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