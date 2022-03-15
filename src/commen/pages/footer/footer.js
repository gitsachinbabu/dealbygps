import React from "react";
import { Row, Col ,Image, Carousel,Form} from 'react-bootstrap';
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaGoogle,FaYoutube,FaShoppingCart} from "react-icons/fa";
import imagePath from "../../../images/imagePath";
import "../footer/footer.scss";
import { NavLink, Link, Redirect, Route, withRouter } from 'react-router-dom';



function Footer() {


    const renderFooter = () => {
        return <Row>
                <Col xxl={6} xl={6} lg={6}>
                <Image className="img-fluid mb-5" src={imagePath.IMG_DEALS_GPS_LOGO_WHIT} />
                </Col>
                <Col xxl={6} xl={6} lg={6}></Col>
                <Col xxl={12}>
                    <Row>
                    <Col xxl={6} xl={6} lg={6}>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget 
                            dictum turpis, vel malesuada quam. Aenean aliquet suscipit justo, 
                            pretium blandit lacus</p>
                    </Col>
                    <Col xxl={3} xl={3} lg={3}>
                        <ul className="footerLink">
                            <li>home</li>
                            <li>Search</li>
                            <li>browse Deals</li>
                            <li>Flash Deals</li>
                            <li>browse property</li>
                            <li>business Directory</li>
                        </ul>
                    </Col>
                    <Col xxl={3} xl={3} lg={3}>
                    <ul className="footerLink">
                            <li>Contact Us</li>
                            <li>Rejister you business</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>FAQ</li>
                        </ul></Col>
                    </Row>
                </Col>
        </Row>
    }


    return <section className='sectionFooter'>
        {renderFooter()}
    </section>

}


export default Footer;