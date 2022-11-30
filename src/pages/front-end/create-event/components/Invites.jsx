import React, { useState } from 'react'
import profile from '../../../../assets/armanprofile.png'
import CustomRangeSlider from '../../components/CustomRangeSlider';

const Invites = ({ rtl }) => {

    const [values, setValues] = useState([25, 75]);


    return (
        <div className='create_event_invites'>

            {/* question */}
            <div className='question_date'>
                <h2>IS THIS A DATE ?</h2>
                <div className='question_option'>

                    <div className='checkbox'>
                        <input type="checkbox" id='yes' name='yes' />
                        <label htmlFor="yes">Yes</label>
                    </div>

                    <div className='checkbox'>
                        <input type="checkbox" id='no' name='no' />
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
                    <tr>
                        <td>
                            <input type="text" placeholder='text' />
                        </td>
                        <td className='checkbox'>
                            <div className='checkbox_group'>
                                <input type="checkbox" name='male' id='male' />
                                <label htmlFor="male">Male</label>
                            </div>
                            <div className='checkbox_group'>
                                <input type="checkbox" name='Female' id='Female' />
                                <label htmlFor="male">Female</label>
                            </div>
                            <div className='checkbox_group'>
                                <input type="checkbox" name='Both' id='Both' />
                                <label htmlFor="Both">Male</label>
                            </div>
                        </td>
                        <td>
                            {/* range */}
                            <CustomRangeSlider values={values} setValues={setValues} min={0} max={90} step={1} />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">

                            <div className='table_button'>
                                <button className='btn_secondary'> <i class="fa fa-plus" aria-hidden="true"></i> ADD  </button>
                                <button className='btn_error'><i class="fa fa-minus" aria-hidden="true"></i> RESET</button>
                            </div>
                        </td>
                    </tr>

                </tbody>

            </table>

            {/* question */}
            <div className='question_date'>
                <h2>WHO CAN JOIN ?</h2>
                <div className='question_option'>

                    <div className='checkbox'>
                        <input type="checkbox" id='Anyone' name='Anyone' />
                        <label htmlFor="Anyone">Anyone can join</label>
                    </div>

                    <div className='checkbox'>
                        <input type="checkbox" id='Request to join' name='Request to join' />
                        <label htmlFor="Request to join">Request to join</label>
                    </div>

                </div>

            </div>

            {/* invite friends */}
            <div className='invite_friends_group'>
                <div className='invite_friends'>
                    <h2>INVETE FRIENDS TO JOIN</h2>
                    <select name="location" id="location">
                        <option value="one">option one</option>
                    </select>
                    <button className='btn_secondary'><i class="fa fa-plus" aria-hidden="true"></i> ADD FRIEND </button>
                </div>
                <div className='mini_cards'>
                    {
                        [1, 2, 3, 4].map(item => (
                            <div className="mini_card">
                                <img src={profile} alt="" />
                                <p className='p_blue_size_20'>Name</p>
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </div>
                        ))
                    }

                </div>

            </div>

            {/* invite friends by email */}
            <div className='invite_friends_group'>
                <div className='invite_friends'>
                    <h2>INVITE FRIENDS BY EMAIL</h2>
                    <select name="location" id="location">
                        <option value="one">option one</option>
                    </select>
                    <button className='btn_secondary'><i class="fa fa-plus" aria-hidden="true"></i>INVITE </button>
                </div>
                <div className='mini_cards'>
                    {
                        [1, 2, 3, 4].map(item => (
                            <div className="mini_card">
                                <img src={profile} alt="" />
                                <p className='p_blue_size_20'>@Email</p>
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    )
}

export default Invites