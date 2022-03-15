import React from "react";
import { Row, Col ,Image, Carousel,Form,Modal, Button,Container } from 'react-bootstrap';
import { FaAngleRight} from "react-icons/fa";
import imagePath from "../../../images/imagePath";
import "../profile/profile.scss";
import { NavLink, Link, Redirect, Route, withRouter } from 'react-router-dom';
import { FaFacebookF,FaGoogle,} from "react-icons/fa";
// import {ForgotPassword} from "../forgotpassword/forgotPasword"
import Header from "../header/header";
import MenuProfile from "./menuprofile";



function Profile() {

    const renderProfile = () => {
        return  <div className="profileBg">
                       <Row>
                           <Col xl={5} className="text-center">
                           <Image className="profileImage" src={imagePath.IMG_HOME_BANNER} />
                           <button class="btnBig">Update profile</button>
                           </Col>
                           <Col xl={7} className="mt-5">
                               <p><strong>Name:</strong> Sachin Babu</p>
                               <p><strong>Gender:</strong> Male</p>
                               <p><strong>DOB:</strong> 09/07/1997</p>
                               <p><strong>Mobile No:</strong> 0987654321</p>
                               <p><strong>City:</strong> Gwalior</p>
                               <p><strong>Email:</strong> abcd@gmail.com</p>
                               <p><strong>Address:</strong> 2239 NW 36th St, Oklahoma City, OK 73112</p>
                            </Col>
                       </Row>
                   </div>
       
    }


    return <section className='sectionProfile'>
        <Header/>
        <Container>
            <Row>
            <Col xl={3} lg={3}>
                <MenuProfile/>
            </Col>
            <Col xl={9} lg={9}>
                {renderProfile()}
            </Col>
            </Row>
        </Container>
        
    </section>

}


export default Profile;



