import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import './LeftSidebar.scss';

const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <i className='bx bx-home'></i>,
        to: '/dashboard',
        section: 'dashboard'
    },
    {
        display: 'Edit Venue',
        icon: <i className='bx bx-star'></i>,
        to: '/edit-venue',
        section: 'edit-venue'
    },
    {
        display: 'Claim A Venue',
        icon: <i className='bx bx-calendar'></i>,
        to: '/claim-venue',
        section: 'claim-venue'
    },
    {
        display: 'Promotions',
        icon: <i className='bx bx-user'></i>,
        to: '/promotions',
        section: 'promotions'
    },
    {
        display: 'On-going promotions',
        icon: <i className='bx bx-receipt'></i>,
        to: '/on-going-promotions',
        section: 'on-going-promotions'
    },
    {
        display: 'Promotion Details',
        icon: <i className='bx bx-receipt'></i>,
        to: '/promotion-details',
        section: 'promotion-details'
    },
    {
        display: 'Create Event',
        icon: <i className='bx bx-receipt'></i>,
        to: '/event-create',
        section: 'event-create'
    },
    {
        display: 'Account',
        icon: <i className='bx bx-receipt'></i>,
        to: '/account',
        section: 'account'
    },
    {
        display: 'My Event',
        icon: <i className='bx bx-receipt'></i>,
        to: '/my-event',
        section: 'my-event'
    },
    {
        display: 'Logout',
        icon: <i className='bx bx-receipt'></i>,
        to: '/logout',
        section: 'logout'
    },
]

export default function LeftSidebar() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar__logo">
            Somethingtodo
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

