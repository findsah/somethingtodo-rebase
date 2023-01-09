import React from 'react'
import { Outlet } from "react-router-dom";
import LeftSidebar from '../pages/adminDashboard/left-sidebar/LeftSidebar';

const DashboardLayout = () => {
    return (
        <>
            <LeftSidebar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default DashboardLayout