import React from 'react'
import loadericon from '../../../assets/loaders/loader.gif'

const FullPageLoader = () => {
    return (
        <div className='loader_container'>
            <div className="loader" style={{ zIndex: '500' }}>
                <img src={loadericon} alt="" width="50px" height="50px" />
            </div>

        </div>
    )
}

export default FullPageLoader