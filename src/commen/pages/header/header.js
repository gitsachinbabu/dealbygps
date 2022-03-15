import React from "react";
import { Row, Col ,Image, Carousel,Form} from 'react-bootstrap';
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaGoogle,FaYoutube,FaShoppingCart} from "react-icons/fa";
import imagePath from "../../../images/imagePath";
import "../header/header.scss";
import { NavLink, Link, Redirect, Route, withRouter } from 'react-router-dom';



function Header() {


    const renderHeader = () => {
        return <div className="headerTop">
            <div className="fixed-top">
                <Row >
                    <Col xxl={3} xl={3} lg={3}>
                        <Image className="logoGps" src={imagePath.IMG_DEALS_GPS_LOGO} />
                    </Col>
                    <Col xxl={9} xl={9} lg={9}>
                        <Row>
                            <Col xxl={12}>
                                <div className="loginRegisterheader">
                                    <button className="loginBtn"><NavLink exact className="nav-link" to="/login">Login</NavLink></button>
                                    <button className="loginBtn"><NavLink exact className="nav-link" to="/register">register</NavLink></button>
                                    <button className="cartBtn"><FaShoppingCart/><span>01</span></button>
                                </div>
                            </Col>
                            <Col xxl={12}>
                                <Row>
                                    <Col xxl={9} xl={9} lg={9}>
                                        <ul className="webMenu">
                                            <li key="1"><NavLink exact className="nav-link" to="/">Home</NavLink></li>
                                            <li key="2"><NavLink exact className="nav-link" to="#">Search</NavLink></li>
                                            <li key="3"><NavLink className="nav-link" to="#">browse Deals</NavLink></li>
                                            <li key="4"><NavLink className="nav-link" to="#">Flash Deals</NavLink></li>
                                            <li key="5"><NavLink className="nav-link" to="#">browse property</NavLink></li>
                                            <li key="6"><NavLink className="nav-link" to="#">business Directory</NavLink></li>
                                            <li key="7"><NavLink className="nav-link" to="#">Rejister you business</NavLink></li>
                                        </ul>
                                    </Col>
                                    <Col xxl={3} xl={3} lg={3}>
                                        <ul className="headerMedia">
                                            <li><FaFacebookF/></li>
                                        <li><FaTwitter/></li>
                                        <li><FaInstagram/></li>
                                        <li><FaLinkedinIn/></li>
                                        <li><FaGoogle/></li>
                                        <li><FaYoutube/></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    
                </Row>
                </div>
                <div className="headerFixback"></div>
                </div>
    }


    return <section className='sectionHeader'>
        {renderHeader()}
    </section>

}


export default Header;