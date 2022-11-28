import React from 'react'

const Invites = () => {
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
                        <td></td>
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
            <br />
            invite frieds
            {/* filters tag*/}
            <br />
            filters tag
            {/* invite friends by email */}
            <br />
            invite by email

        </div>
    )
}

export default Invites