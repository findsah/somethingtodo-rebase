import React from 'react'
import { Outlet } from "react-router-dom";
import LeftSidebar from '../pages/adminDashboard/left-sidebar/LeftSidebar';

const DashboardLayout = () => {
    return (
        <>
            <LeftSidebar className="col-md-2" />
            <main className='col-md-10'>
                <Outlet />
            </main>
        </>
    )
}

export default DashboardLayout