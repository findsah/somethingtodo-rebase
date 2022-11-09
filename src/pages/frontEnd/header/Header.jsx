import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from "react-bootstrap/Dropdown";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>

            <Navbar collapseOnSelect expand="lg" className='navbar navbar-light'>
                <Container className="d-flex flex-row-reverse ">
                    <Navbar.Brand href="#home"><FaUserCircle
                        style={{ width: "4rem", height: "2.5rem", border: "none", color: "orange" }}
                        className="navbar-toggler mb-1"

                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navbar-nav me-auto mb-2 mb-lg-0 jus mx-auto">
                            <Nav.Link className='nav-item' href="#features">HOME</Nav.Link>
                            <Nav.Link className='nav-item' href="#pricing">CREATE EVENT</Nav.Link>
                            <Nav.Link className='nav-item' href="#pricing">FIND EVENTS</Nav.Link>
                            <Nav.Link className='nav-item' href="#pricing">MY EVENTS</Nav.Link>
                            <Nav.Link className='nav-item' href="#pricing">BLOG</Nav.Link>
                            <Nav.Link className='nav-item' href="#pricing">FAQ</Nav.Link>
                            <div
                                className="nav-link signup"

                            >
                                <FaUserCircle style={{ width: "1.5rem", height: "1.5rem" }} className="mb-0.5" /> Sign up/ Login
                            </div>
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
                        </Nav>


                    </Navbar.Collapse>



                </Container>


            </Navbar>
        </>
    );
}

export default Header;