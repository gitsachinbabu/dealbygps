import React from "react";
import { Row, Col ,Image, Carousel,Form,Modal, Button, } from 'react-bootstrap';
import { FaAngleRight} from "react-icons/fa";
import imagePath from "../../../images/imagePath";
import "../login/login.scss";
import { NavLink, Link, Redirect, Route, withRouter } from 'react-router-dom';




function OTP() {

    const renderOTP = () => {
        return <Row>
                <Col xxl={12}>
                    <div className="wapperLogin">
                            <div className="screen">
                                <div className="screen__content">
                                    <form className="login">
                                    <Image className="logoGps" src={imagePath.IMG_DEALS_GPS_LOGO} />
                                        <div className="login__field">
                                            <input type="password" className="login__input" placeholder="Enter OTP"/>
                                        </div>
                                        
                                        <NavLink exact className="nav-link p-0" to="/confirmPassword" >
                                        <button className="button login__submit">
                                            <span className="button__text">Submit</span>
                                            <i className="button__icon"><FaAngleRight/></i>
                                        </button>
                                        </NavLink>				
                                    </form>
                                    <div className="social-login">
                                        <h3>OTP in via</h3>
                                        
                                    </div>
                                </div>
                                <div className="screen__background">
                                    <span className="screen__background__shape screen__background__shape4"></span>
                                    <span className="screen__background__shape screen__background__shape3"></span>		
                                    <span className="screen__background__shape screen__background__shape2"></span>
                                    <span className="screen__background__shape screen__background__shape1"></span>
                                </div>		
                            </div>
                        </div>

                </Col>
        </Row>
    }


    return <section className='sectionLogin'>
        {renderOTP()}
    </section>

}


export default OTP;



