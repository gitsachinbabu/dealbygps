import React from "react";
import { Row, Col ,Image, Carousel,Form} from 'react-bootstrap';
import { FaAngleRight} from "react-icons/fa";
import imagePath from "../../../images/imagePath";
import "../register/register.scss";
import { NavLink, Link, Redirect, Route, withRouter } from 'react-router-dom';



function Register() {


    const renderRegister = () => {
        return <Row>
                <Col xxl={12}>
                <div className="wapperLogin">
                            <div className="screen">
                                <div className="screen__content">
                                    <form className="registerForm">
                                        <Row>
                                            <Col xl={12}>
                                            <Image className="logoGps" src={imagePath.IMG_DEALS_GPS_LOGO} />
                                            </Col>
                                            <Col xl={6} lg={6}>
                                            <div className="login__field">
                                                <input type="text" className="login__input" placeholder="First Name"/>
                                            </div>
                                            </Col>
                                            <Col xl={6} lg={6}>
                                            <div className="login__field">
                                                <input type="text" className="login__input" placeholder="Last Name"/>
                                            </div>
                                            </Col>
                                            <Col xl={6} lg={6}>
                                            <div className="login__field gender">
                                                <p>gender</p>
                                                <Form.Check 
                                                    type={'checkbox'}
                                                    label={'Male'}
                                                />
                                                <Form.Check 
                                                    type={'checkbox'}
                                                    label={'Female'}
                                                />
                                                <Form.Check 
                                                    type={'checkbox'}
                                                    label={'other'}
                                                />
                                            </div>
                                            </Col>
                                            <Col xl={6} lg={6}>
                                            <div className="login__field">
                                                <input type="date" className="login__input" placeholder="Date of birth"/>
                                            </div>
                                            </Col>
                                            <Col xl={6} lg={6}>
                                            <div className="login__field">
                                                <input type="text" className="login__input" placeholder="Mobile Number"/>
                                            </div>
                                            </Col>
                                            <Col xl={6} lg={6}>
                                            <div className="login__field">
                                                <input type="text" className="login__input" placeholder="City"/>
                                            </div>
                                            </Col>
                                            <Col xl={6} lg={6}>
                                            <div className="login__field">
                                                <input type="text" className="login__input" placeholder="Email Address"/>
                                            </div>
                                            </Col>
                                            <Col xl={6} lg={6}>
                                            <div className="login__field">
                                                <input type="text" className="login__input" placeholder="Password"/>
                                            </div>
                                            </Col>
                                            <Col xl={6} lg={6}>
                                            <div className="login__field">
                                                <input type="text" className="login__input" placeholder="Pick location"/>
                                            </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xl={12}>
                                                <p className="processing">
                                                    <span><Form.Check 
                                                        type={'checkbox'}
                                                        />
                                                    </span>
                                                    I consent to the processing of my personal data
                                                </p>
                                            </Col>
                                            <Col xl={12} className="text-center">
                                            <button className="button login__submit" style={{width:'220px', margin:'10px auto'}}>
                                                <span className="button__text">Create an account</span>
                                                <i className="button__icon"><FaAngleRight/></i>
                                            </button>	
                                            </Col>
                                            <Col xl={12}>
                                            <div className="signWithGoogle"> 
                                            <p>Sign in with  </p>
                                            <Image className="" src={imagePath.IMG_FACEBOOK} />
                                            <Image className="" src={imagePath.IMG_GOOGLE} />
                                            </div>
                                            </Col>
                                            <Col xl={12} className="termsCondition">
                                                <p>By registering you accept with Terms and Conditions</p>
                                                <p>Please read our Privacy Policy and Cookie Policy</p>
                                            </Col>
                                        </Row>
                                    
                                       
                                       
                                        			
                                    </form>
                                    
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


    return <section className='sectionLogin register'>
        {renderRegister()}
    </section>

}


export default Register;