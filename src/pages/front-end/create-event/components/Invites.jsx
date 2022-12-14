/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React, { useState } from 'react'
import Slider from 'react-slick';
import profile from '../../../../assets/armanprofile.png'
import CustomRangeSlider from '../../components/CustomRangeSlider';

const Invites = ({ age, gender, number, setAge, setNumber, setGender, isthisDate, setIsthisDate,
    whocanjoin,
    setWhocanjoin
}) => {





    // const [tableList, setTableList] = useState([])

    // const addList = () => {

    //     const rowsInput = {
    //         id: tableList?.length + 1,
    //         number: tableList?.number,
    //         male: tableList?.male,
    //         female: tableList?.female,
    //         both: tableList?.both,
    //         age: [12, 45]
    //     }
    //     setTableList([...tableList, rowsInput])
    // }

    // const handleChange = (id, e) => {


    //     const { name, value } = e.target;
    //     const rowsInput = [...tableList];
    //     rowsInput[id][name] = value
    //     setTableList(rowsInput)

    // }
    // const resetList = () => {
    //     setTableList([])
    // }

    var settings = {
        slidesToShow: 4,
        className: "center",
        centerMode: true,

        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            }]
    }


    return (
        <div className='create_event_invites'>

            {/* question */}
            <div className='question_date'>
                <h2>IS THIS A DATE ?</h2>
                <div className='question_option'>

                    <div className='checkbox'>
                        <input type="checkbox" id='yes' name='yes'
                            value={isthisDate}
                            checked={isthisDate}
                            onChange={() => { setIsthisDate(true) }}
                        />
                        <label htmlFor="yes">Yes</label>
                    </div>

                    <div className='checkbox'>
                        <input type="checkbox" id='no' name='no'
                            value={isthisDate}
                            checked={!isthisDate}
                            onChange={() => { setIsthisDate(false) }}
                        />
                        <label htmlFor="no">No</label>
                    </div>

                </div>

            </div>

            {/* table */}
            <table className="table">
                <thead>
                    <tr>
                        <th>NUMBER</th>
                        <th>GENDER</th>
                        <th>AGE</th>
                    </tr>
                </thead>
                <tbody>

                    {/* {
                        tableList?.map((item, index) => {

                            return ( */}
                    <tr >
                        <td>
                            <input
                                type="text"
                                placeholder='text'
                                className='text'
                                name='number'
                                value={number}
                                onChange={(e) => setNumber(e.target?.value)}
                            // value={tableList[item?.id]?.number}
                            // onChange={(e) => { handleChange(item?.id, e) }}

                            />
                        </td>
                        <td className='checkbox'>
                            <div className='checkbox_group'>
                                <input
                                    type="checkbox"
                                    name='male'
                                    id='male'
                                    checked={gender === "male"}
                                    value={gender}
                                    onChange={(e) => setGender("male")}
                                // value={tableList[item?.id]?.male}
                                // onChange={(e) => { handleChange(item?.id, e) }}
                                />
                                <label htmlFor="male">Male</label>
                            </div>
                            <div className='checkbox_group'>
                                <input
                                    type="checkbox"
                                    name='female'
                                    id='Female'
                                    value={gender}
                                    checked={gender === "female"}
                                    onChange={(e) => setGender("female")}
                                // value={tableList[item?.id]?.female}
                                // onChange={(e) => { handleChange(item?.id, e) }}
                                />
                                <label htmlFor="Female">Female</label>
                            </div>
                            <div className='checkbox_group'>
                                <input
                                    type="checkbox"
                                    name='both'
                                    id='Both'
                                    value={gender}
                                    checked={gender === "both"}
                                    onChange={(e) => setGender("both")}
                                // value={tableList[item?.id]?.both}
                                // onChange={(e) => { handleChange(item?.id, e) }}
                                />
                                <label htmlFor="Both">Both</label>
                            </div>
                        </td>
                        <td>
                            {/* range */}
                            <CustomRangeSlider
                                // values={tableList[item?.id]?.age}
                                values={age}
                                name="age"
                                setValues={setAge}
                                // onChange={(e) => { handleChange(item?.id, e) }}
                                min={0} max={90}
                                step={1} />
                        </td>
                    </tr>
                    {/* )
                        })
                    } */}
                    <tr>
                        <td colspan="3">

                            <div className='table_button'>
                                <button className='btn_secondary' > <i className="fa fa-plus" aria-hidden="true"></i> ADD  </button>
                                <button className='btn_error' ><i className="fa fa-minus" aria-hidden="true"></i> RESET</button>
                            </div>
                        </td>
                    </tr>

                </tbody>

            </table>
            {
                isthisDate &&
                <>
                    {/* question */}
                    <div className='question_date'>
                        <h2>WHO CAN JOIN ?</h2>
                        <div className='question_option'>

                            <div className='checkbox'>
                                <input type="checkbox" id='Anyone' name='Anyone'
                                    value={whocanjoin}
                                    checked={whocanjoin === "anyone"}
                                    onChange={() => setWhocanjoin("anyone")}
                                />
                                <label htmlFor="Anyone">Anyone can join</label>
                            </div>

                            <div className='checkbox'>
                                <input type="checkbox" id='Request to join' name='Request to join'
                                    value={whocanjoin}
                                    checked={whocanjoin === "request"}
                                    onChange={() => setWhocanjoin("request")}
                                />
                                <label htmlFor="Request to join">Request to join</label>
                            </div>

                        </div>

                    </div>

                    {/* invite friends */}
                    <div className='invite_friends_group'>
                        <div className='invite_friends'>
                            <h2>INVETE FRIENDS TO JOIN</h2>
                            <div className='invite_friends_right'>
                                <select name="location" id="location" className='select' placeholder='Search City / Current Location'>
                                    <option value="one">option one</option>
                                </select>
                                <button className='btn_secondary'><i class="fa fa-plus" aria-hidden="true"></i> ADD FRIEND </button>
                            </div>

                        </div>

                        <Slider {...settings} className='mini_cards' >
                            {
                                [1, 2, 3, 4, , 5, 6, 7, 8, 9, 10].map(item => (
                                    <div className="mini_card">
                                        <img src={profile} alt="" />
                                        <p className='p_blue_size_20'>Name</p>
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </div>
                                ))
                            }
                        </Slider>

                    </div>

                    {/* invite friends by email */}
                    <div className='invite_friends_group'>
                        <div className='invite_friends'>
                            <h2>INVITE FRIENDS BY EMAIL</h2>
                            <div className='invite_friends_right'>
                                <input type="text" name="inviteEmail" id="inviteEmail" placeholder='Text' className='text' />
                                <button className='btn_secondary'><i class="fa fa-plus" aria-hidden="true"></i>INVITE </button>
                            </div>
                        </div>
                        <Slider {...settings} className='mini_cards' >
                            {
                                [1, 2, 3, 4, , 5, 6, 7, 8, 9, 10].map(item => (
                                    <div className="mini_card">
                                        <img src={profile} alt="" />
                                        <p className='p_blue_size_20'>@Email</p>
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                    </div>
                                ))
                            }
                        </Slider>

                    </div>
                </>
            }

        </div>
    )
}

export default Invites