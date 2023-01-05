import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../left-sidebar/LeftSidebar';
export default function SideBarLayout({ children, title }) {
    const [clicked, SetClicked] = useState(sessionStorage.getItem('sidebar-clicked') === 'true');

    useEffect(() => {
        sessionStorage.setItem('sidebar-clicked', clicked);
    }, [clicked]);

    const handleClick = () => {
        SetClicked(!clicked);
    }
    return (
        <section className='main-layout'>
            <div className='container-fluid'>
                <div className='row g-0'>
                    <div className='col-md-12'>
                        {/* <div className={clicked ? 'd-flex content-expand' : 'd-flex'}> */}
                        <div className='d-flex'>
                            {/* <LeftSidebar handleClick={handleClick} /> */}
                            <div className='main-content flex-grow-1 ps-3'>
                                {/* <Topbar title={title} /> */}
                                <div className='d-flex'>
                                    <div className='page-content custom-scrollbar flex-grow-1'>
                                        {children}
                                    </div>
                                    <LeftSidebar handleClick={handleClick} />
                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
