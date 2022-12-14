import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsPersonCircle } from 'react-icons/bs'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='navbar navbar-light'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <BsPersonCircle className='profile-icon' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navbar-nav mobileStyle">
                        <Link to="/">HOME</Link>
                        <Link to="/create-event">CREATE EVENT</Link>
                        <Link to="#pricing">FIND EVENTS</Link>
                        <Link to="#pricing">MY EVENTS</Link>
                        <Link to="/blog">BLOG</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/login">

                            <Button className='signup'>
                                <BsPersonCircle />
                                sign up/login
                            </Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;



{/* <div
                                className="nav-link signup"

                            >
                                <FaUserCircle style={{ width: "1.5rem", height: "1.5rem" }} className="mb-0.5" /> Sign up/ Login
                            </div> */}
{/* <Dropdown className="signup">
                                <Dropdown.Toggle className="signup" id="dropdown-basic">
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    
                                    <Dropdown.Item>
                                        <Link to="/user-view" style={{ textDecoration: "none", color: "black", }}>
                                            Profile
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link to="/logout" style={{ textDecoration: "none", color: "black", }}>
                                            Logout
                                        </Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> */}