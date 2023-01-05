/* 
author: arman ali
github: https://github.com/Arman-Arzoo
whatsapp: +923430048341
*/
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { toast } from 'react-toastify';
import profile from '../../../../assets/images/defaultuser.png'
import CustoModal from '../../components/CustomModal';
import CustomRangeSlider from '../../components/CustomRangeSlider';
import { GetFriendList } from '../service/CreateEventApi';
import { AiFillDelete } from 'react-icons/ai';
import uuid from 'react-uuid'

const Invites = ({ age, gender, number, setAge, setNumber, setGender, isthisDate, setIsthisDate,
    whocanjoin,
    setWhocanjoin,
    peopleInfo,
    setpeopleInfo
}) => {

    // hook importer
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);


    console.log(gender)

    // useSlector to get State from store
    const { getVenueList } = useSelector((state) => state?.createEventSlice)

    const reset = () => {
        setAge([0, 100])
        setGender("")
        setNumber("")

    }
    const AddPeopleInfo = () => {

        const data = {
            id: uuid(),
            number,
            gender,
            age
        }

        if (age?.length && gender && number) {
            if (Number(number)) {
                setpeopleInfo((prevState) => [...prevState, data])
                reset()
            } else {
                toast.warn("number should not be a string")
            }

        } else {
            toast.warn("Please Fill the field")
        }



    }

    const DeleteInfoById = (id) => {
        alert(id)
        const remove = peopleInfo?.filter(item => item.id != id)
        setpeopleInfo(remove)
    }
    // console.log(peopleInfo)

    const resetList = () => {
        setpeopleInfo([])
    }

    var settings = {
        slidesToShow: 4,
        className: "center",
        centerMode: true,

        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                }
            },

            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    }

    // useEffect
    useEffect(() => {
        dispatch(GetFriendList())
    }, [])

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
                        <th style={{ width: '25%' }}>NUMBER</th>
                        <th>GENDER</th>
                        <th>AGE</th>
                        <th style={{ width: '10%' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        peopleInfo?.map((item, index) => {

                            return (
                                <tr key={index}>
                                    <td>
                                        <input
                                            // style={{ width: "60%" }}
                                            type="text"
                                            placeholder='text'
                                            className='text'
                                            name='number'
                                            value={item?.number}
                                            disabled

                                        />
                                    </td>
                                    <td className='checkbox'>
                                        <div className='checkbox_group'>
                                            <input
                                                type="checkbox"
                                                name='male'
                                                id='male'
                                                checked={item?.gender === "male"}
                                                value={item?.gender}
                                                disabled

                                            />
                                            <label htmlFor="male">Male</label>
                                        </div>
                                        <div className='checkbox_group'>
                                            <input
                                                type="checkbox"
                                                name='female'
                                                id='Female'
                                                checked={item?.gender === "female"}
                                                value={item?.gender}
                                                disabled
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
                                                checked={item?.gender === "both"}
                                                value={item?.gender}
                                                disabled
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
                                            values={item?.age}
                                            name="age"
                                            // setValues={}
                                            // onChange={(e) => { handleChange(item?.id, e) }}
                                            min={0} max={90}
                                            step={1} />
                                    </td>
                                    <td>
                                        <AiFillDelete
                                            className='icon_delete'
                                            onClick={() => {
                                                DeleteInfoById(item?.id)
                                            }}
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    }

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
                        <td  >
                            <select
                                name="gender"
                                id="gender"
                                className='select width'
                                style={{ margin: "0 auto", width: "60%" }}
                                value={gender}

                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option >Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="both">Both</option>
                            </select>
                        </td>
                        {/* <td className='checkbox'>
                                <div className='checkbox_group'>
                                    <input
                                        type="checkbox"
                                        name='male'
                                        id='male'
                                        value={gender}
                                        checked={gender === "male"}
                                        // onClick={setGender("male")}
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
                                        id='female'
                                        checked={gender === "female"}
                                        value={gender}
                                    // onClick={setGender("female")}
                                    // onChange={(e) => setGender("female")}
                                    // value={tableList[item?.id]?.female}
                                    // onChange={(e) => { handleChange(item?.id, e) }}
                                    />
                                    <label htmlFor="Female">Female</label>
                                </div>
                                <div className='checkbox_group'>
                                    <input
                                        type="checkbox"
                                        name='both'
                                        id='both'
                                        checked={gender === "both"}
                                        value={gender}
                                        // onClick={setGender("both")}
                                        onChange={(e) => setGender("both")}
                                    // value={tableList[item?.id]?.both}
                                    // onChange={(e) => { handleChange(item?.id, e) }}
                                    />
                                    <label htmlFor="Both">Both</label>
                                </div>
                            </td> */}
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
                    <tr>
                        <td colSpan="3">

                            <div className='table_button'>
                                <button className='btn_secondary'
                                    onClick={() => {
                                        AddPeopleInfo();
                                        //  setOpen(true)
                                    }}>
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                    ADD  </button>
                                <button className='btn_error' onClick={() => resetList()}>
                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                    RESET
                                </button>
                            </div>
                        </td>
                    </tr>

                </tbody>

            </table>
            {
                !isthisDate &&
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
                            <h2>INVITE FRIENDS TO JOIN</h2>
                            <div className='invite_friends_right'>
                                <select name="location" id="location" className='select' placeholder='Search City / Current Location'>
                                    <option value="one">option one</option>
                                </select>
                                <button className='btn_secondary'><i className="fa fa-plus" aria-hidden="true"></i> ADD FRIEND </button>
                            </div>

                        </div>

                        <Slider {...settings} className='mini_cards' >
                            {
                                [1, 2, 3, 4, , 5, 6, 7, 8, 9, 10].map(item => (
                                    <div className="mini_card">
                                        <img src={profile} alt="" />
                                        <p className='p_blue_size_20'>Name</p>
                                        <i className="fa fa-times" aria-hidden="true"></i>
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
                                <button className='btn_secondary'><i className="fa fa-plus" aria-hidden="true"></i>INVITE </button>
                            </div>
                        </div>
                        <Slider {...settings} className='mini_cards' >
                            {
                                [1, 2, 3, 4, , 5, 6, 7, 8, 9, 10].map(item => (
                                    <div className="mini_card">
                                        <img src={profile} alt="" />
                                        <p className='p_blue_size_20'>@Email</p>
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </div>
                                ))
                            }
                        </Slider>

                    </div>
                </>
            }

            {/* <CustoModal open={open} close={setOpen} title="ADD People Information" size="md">
                <table className="table_popup">
                    <thead>
                        <tr>
                            <th>NUMBER</th>
                            <th>GENDER</th>
                            <th>AGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>
                                <input
                                    type="text"
                                    placeholder='text'
                                    className='text'
                                    name='number'
                                    value={number}
                                    onChange={(e) => setNumber(e.target?.value)}
                              

                                />
                            </td>
                            <td >
                                <select
                                    name="gender"
                                    id="gender"
                                    className='select width'

                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option >Chooce Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="both">Both</option>
                                </select>
                            </td>
                            
                            <td>
                                
                                <CustomRangeSlider
                                    
                                    values={age}
                                    name="age"
                                    setValues={setAge}
                                    // onChange={(e) => { handleChange(item?.id, e) }}
                                    min={0} max={90}
                                    step={1} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="3">

                                <div className='table_button'>
                                    <button className='btn_secondary' onClick={() => {
                                        AddPeopleInfo();
                                        setOpen(false)
                                    }}
                                    >
                                        <i className="fa fa-plus" aria-hidden="true"></i>
                                        ADD
                                    </button>

                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </CustoModal> */}
        </div>
    )
}

export default Invites