import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import './LeftSidebar.scss';
import dashboard from '../../../assets/icons/dashboard.svg'
import editvanue from '../../../assets/icons/editvanue.svg'
import businessname from '../../../assets/icons/businessname.svg'
import whatsapp from '../../../assets/icons/whatsapp.svg'
import proemail from '../../../assets/icons/proemail.svg'
import proloction from '../../../assets/icons/proloction.svg'
import claimvanue from '../../../assets/icons/claimvanue.png'
import logo from '../../../assets/logo.png'
import dashprofile from '../../../assets/dashprofile.png'
import { GrFacebook } from "react-icons/gr";
import { ImTwitter } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { Button } from 'react-bootstrap';
import { BiEditAlt } from 'react-icons/bi';
const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <img src={dashboard} alt="" />,
        to: '/dashboard',
    },
    {
        display: 'Edit Venue',
        icon: <img src={editvanue} alt="" />,
        to: '/dashboard/edit-venue',
        section: '/edit-venue'
    },
    {
        display: 'Claim A Venue',
        icon: <img src={claimvanue} alt="" />,
        to: '/dashboard/claim-venue',
        section: '/claim-venue'
    },
    {
        display: 'Promotions',
        icon: <i className='bx bx-user'></i>,
        to: '/dashboard/promotions',
        section: '/promotions'
    },
    {
        display: 'On-going promotions',
        icon: <i className='bx bx-receipt'></i>,
        to: '/dashboard/on-going-promotions',
        section: '/on-going-promotions'
    },
    {
        display: 'Promotion Details',
        icon: <i className='bx bx-receipt'></i>,
        to: '/dashboard/promotion-details',
        section: '/promotion-details'
    },
    {
        display: 'Create Event',
        icon: <i className='bx bx-receipt'></i>,
        to: '/dashboard/event-create',
        section: '/event-create'
    },
    {
        display: 'Account',
        icon: <i className='bx bx-receipt'></i>,
        to: '/dashboard/account',
        section: '/account'
    },
    {
        display: 'My Event',
        icon: <i className='bx bx-receipt'></i>,
        to: '/dashboard/my-event',
        section: '/my-event'
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
        const curPath = window.location.pathname.split('/dashboard')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar__logo">
            <img src={logo} alt="" />
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-12  profile-box">

                <div className="row" >
                    <div className="col-4 mt-4" >
                        <img src={dashprofile} alt="" />
                    </div>
                    <div className="col-8" >

                        <div className="social-links" >
                            <div className="links2" >
                                <p className='heading' >INSERT NAME HERE</p>
                                <div className="col-10" >
                                    <img src={businessname} alt="" />
                                    <span>  Business Name</span>
                                </div>
                                <div className="col-10" >
                                    <img src={whatsapp} alt="" />
                                    <span> Phone</span>
                                </div>
                                <div className="col-10" >
                                    <img src={proemail} alt="" />
                                    <span>  Email</span>
                                </div>
                                <div className="col-10" >
                                    <img src={proloction} alt="" />
                                    <span>  Primary venue</span>
                                </div>
                                <div className="col-12" >
                                    <Button variant='outlined' className='outlined-btn'><BiEditAlt />EDIT PROFILE</Button>
                                </div>


                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        <div ref={sidebarRef} className="sidebar__menu mt-5">
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

