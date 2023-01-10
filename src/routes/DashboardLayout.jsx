import React from 'react'
import { Outlet } from "react-router-dom";
import LeftSidebar from '../pages/adminDashboard/left-sidebar/LeftSidebar';

const DashboardLayout = () => {
    return (
        <>
        <div className="row" style={{overflowX:'hidden'}}>
            <div className="col-lg-2 col-12">
            <LeftSidebar />

            </div>
            <div className="col-lg-9 col-12">
            <main>
                <Outlet />
            </main>
            </div>
        </div>
          
        </>
    )
}

export default DashboardLayout