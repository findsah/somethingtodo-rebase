import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsPersonCircle } from 'react-icons/bs'
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='navbar navbar-light'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <BsPersonCircle className='profile-icon' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navbar-nav mobileStyle">
                        <Nav.Link href="#features">HOME</Nav.Link>
                        <Nav.Link href="#pricing">CREATE EVENT</Nav.Link>
                        <Nav.Link href="#pricing">FIND EVENTS</Nav.Link>
                        <Nav.Link href="#pricing">MY EVENTS</Nav.Link>
                        <Nav.Link href="#pricing">BLOG</Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                        <Button className='signup'>
                            <BsPersonCircle />
                            sign up/login
                        </Button>
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