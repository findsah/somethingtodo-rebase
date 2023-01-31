import React from 'react'
import { Outlet } from "react-router-dom";
import FooterSection from '../pages/front-end/footer/FooterSection';
import Header from '../pages/front-end/header/Header';

const AppLayout = () => {
    return (
        <div className='AppLayout' >
            <Header />
            <main >
                <Outlet />
            </main>
            <FooterSection />
        </div>
    )
}

export default AppLayout