import { FaFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import { RiVisaLine } from "react-icons/ri";
import { FaGooglePay } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return <div className="container">
        <footer className="py-5">
            <div className="row">
                <div className="col-6 col-md-5 mb-3">
                    <a className="navbar-brand" href="#">
                        <img src="logo.svg" alt="Bootstrap" width="90" height="24" />
                    </a>
                    <ul className="nav flex-column">
                        <p className="contact">Contact</p>
                        <p className="text-secondary"><span className="fw">Address :</span> 562 Willingston Road Street 32 San Fransisco </p>
                        <p className="text-secondary"><span className="fw">Phone :</span> 003355661188</p>
                        <p className="text-secondary"><span className="fw">Hours :</span> 10:00 - 18:00, Mon - Sat</p>
                        <p className="follow-me">Follow Me</p>

                        <ul className="list-unstyled d-flex">
                            <li className=""><a className="link-body-emphasis"
                                href="https://www.facebook.com/profile.php?id=100087329830889" target="_blank"> <FaFacebook />
                            </a></li>
                            <li className="ms-3"><a className="link-body-emphasis"
                                href="https://instagram.com/its._.me._.yusra?utm_source=qr&igshid=OGIxMTE0OTdkZA=="
                                target="_blank"> <FiInstagram />
                            </a></li>
                            <li className="ms-3"><a className="link-body-emphasis"
                                href="https://www.linkedin.com/in/yusra-tariq-6868b7262" target="_blank"> <GrLinkedin />
                            </a></li>
                        </ul>

                    </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h5>Quick Links</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link to={'/'} className="nav-link p-0 text-secondary fw">Home</Link></li>
                        <li className="nav-item mb-2"><Link to={'/shop'} className="nav-link p-0 text-secondary fw">Shop</Link></li>
                        <li className="nav-item mb-2"><Link href="#features" className="nav-link p-0 text-secondary fw">My Account</Link></li>
                        <li className="nav-item mb-2"><Link href="#Arrivals" className="nav-link p-0 text-secondary fw">Compare</Link></li>
                        <li className="nav-item mb-2"><Link to={'/login'} className="nav-link p-0 text-secondary fw">Login</Link></li>

                    </ul>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h5>My Account</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link to={'/login'} className="nav-link p-0 text-secondary fw">Sign In</Link>
                        </li>
                        <li className="nav-item mb-2"><Link to={'/cart'} className="nav-link p-0 text-secondary fw">View Cart</Link>
                        </li>
                        <li className="nav-item mb-2"><Link to={'/wishlist'} className="nav-link p-0 text-secondary fw ">My Whishlist
                        </Link></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary fw">Track My Order
                        </a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary fw">Help</a>
                        </li>
                    </ul>
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <h5>Secured Payment GateWays</h5>

                    <ul className="list-unstyled d-flex">
                        <li className=""><a className="link-body-emphasis"
                            href="https://www.facebook.com/profile.php?id=100087329830889" target="_blank"> <RiVisaLine className="icons" />
                        </a></li>

                        <li className="ms-3"><a className="link-body-emphasis"
                            href="https://www.linkedin.com/in/yusra-tariq-6868b7262" target="_blank"> <FaGooglePay className="icons" />
                        </a></li>
                        <li className="ms-3"><a className="link-body-emphasis"
                            href="https://www.linkedin.com/in/yusra-tariq-6868b7262" target="_blank"> <FaAmazonPay className="icons" />
                        </a></li>
                    </ul>
                </div>

            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>© 2024 Yusra, Inc. All rights reserved.</p>
            </div>
        </footer>
    </div>
}

export default Footer;