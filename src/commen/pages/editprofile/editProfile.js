import React from "react";
import { Row, Col ,Image, Carousel,Form} from 'react-bootstrap';
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaGoogle,FaYoutube,FaShoppingCart} from "react-icons/fa";
import imagePath from "../../../images/imagePath";
import "../editprofile/editprofile.scss";
import { NavLink, Link, Redirect, Route, withRouter } from 'react-router-dom';



function EditProfile() {


    const renderEditProfile = () => {
        return <Row>
                <Col xxl={6} xl={6} lg={6}>
                    <h1>EditProfile</h1>
                </Col>
        </Row>
    }


    return <section className='sectionFooter'>
        {renderEditProfile()}
    </section>

}


export default EditProfile;