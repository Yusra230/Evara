import { FaRegHeart } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from "react";

function Header() {
    const cartItems = useSelector(store => store.cart);
    const wishListItems = useSelector(store => store.wishList);
    const [activeClass, setActiveClass] = useState('home');
    const [showOffcanvas, setShowOffcanvas] = useState(false); // Add state to control offcanvas visibility

    const handleCloseOffcanvas = () => setShowOffcanvas(false);

    return (
        <div className="container mt-3">
            <Navbar expand="lg" className="mb-3">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/Evara/"> <img src="logo.svg" alt="Bootstrap" width="90" height="24" />   </Navbar.Brand>

                    <div className="text-end display-none">
                        <Link to='/Evara/wishlist' className="position-relative text-black header-icons" onClick={() => setActiveClass('')}>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-color">
                                {wishListItems.length}
                            </span>
                            <FaRegHeart className="icon-style" /></Link>

                        <Link to='/Evara/cart' className="position-relative text-black" onClick={() => setActiveClass('')}>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-color">
                                {cartItems.length}
                            </span>
                            <BsBag className="icon-style" /></Link>

                    </div>

                    <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setShowOffcanvas(true)} />
                    <Navbar.Offcanvas
                        show={showOffcanvas}
                        onHide={handleCloseOffcanvas}
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel"> <img src="logo.svg" alt="Evara" width="90" height="24" /> </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-start flex-grow-1 pe-3">
                                <Nav.Link as={Link} to="/Evara/" onClick={() => { setActiveClass('home'); handleCloseOffcanvas(); }} className={`fw  ${activeClass === 'home' && 'activeClass'}`} >Home</Nav.Link>
                                <Nav.Link as={Link} to="/Evara/shop" onClick={() => { setActiveClass('shop'); handleCloseOffcanvas(); }} className={`fw  ${activeClass === 'shop' && 'activeClass'}`} >Shop</Nav.Link>
                                <Nav.Link as={Link} to="/Evara/" className="fw ">My Account</Nav.Link>
                                <Nav.Link as={Link} to="/Evara/" className="fw ">Compare</Nav.Link>
                                <Nav.Link as={Link} to="/Evara/login" onClick={() => { setActiveClass('login'); handleCloseOffcanvas(); }} className={`fw ${activeClass === 'login' && 'activeClass'}`}>Login</Nav.Link>

                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />

                            </Form>

                            <div className="text-end display-none-mob">
                                <Link to='/Evara/wishlist' className="position-relative text-black header-icons" onClick={() => setActiveClass('')}>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-color">
                                        {wishListItems.length}
                                    </span>
                                    <FaRegHeart className="icon-style" /></Link>

                                <Link to='/Evara/cart' className="position-relative text-black" onClick={() => setActiveClass('')}>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-color">
                                        {cartItems.length}
                                    </span>
                                    <BsBag className="icon-style" /></Link>

                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container >
            </Navbar >
        </div >
    );
}

export default Header;
