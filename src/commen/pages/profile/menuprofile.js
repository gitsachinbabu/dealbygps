import React from "react";
import { Row, Col ,Image, Carousel,Form,Modal, Button,Container } from 'react-bootstrap';
import { FaUserAlt,FaClipboardList,FaShoppingCart,FaBusinessTime,FaAddressCard,FaMoneyCheckAlt} from "react-icons/fa";
import { BiPurchaseTag,BiCoinStack,BiCrown,BiUser} from "react-icons/bi";
import { TiBusinessCard} from "react-icons/ti";
import { AiFillSetting} from "react-icons/ai";
import imagePath from "../../../images/imagePath";
import "../profile/profile.scss";
import { NavLink, Link, Redirect, Route, withRouter } from 'react-router-dom';
// import {ForgotPassword} from "../forgotpassword/forgotPasword"
import Header from "../header/header";



function MenuProfile() {

  


    return <div className="profileMenubox">
            <ul className="profilemenu">
                <li key="301"><NavLink exact className="nav-link" to="#"><BiUser/> Profile</NavLink></li>
                <li key="302"><NavLink className="nav-link" to="#"><FaClipboardList/> Favourite List</NavLink></li>
                <li key="303"><NavLink className="nav-link" to="#"><FaShoppingCart/> My Cart</NavLink></li>
                <li key="304"><NavLink className="nav-link" to="#"><BiPurchaseTag/> My Purchase</NavLink></li>
                <li key="305"><NavLink className="nav-link" to="#"><FaBusinessTime/> My Business</NavLink></li>
                <li key="306"><NavLink className="nav-link" to="#"><TiBusinessCard/> My Business Earnings</NavLink></li>
                <li key="307"><NavLink className="nav-link" to="#"><FaAddressCard/> Affiliate Report</NavLink></li>
                <li key="308"><NavLink className="nav-link" to="#"><BiCoinStack/>My Earnings</NavLink></li>
                <li key="309"><NavLink className="nav-link" to="#"><BiCrown/>My Offers/Promotion</NavLink></li>
                <li key="309"><NavLink className="nav-link" to="#"><AiFillSetting/> Setttings</NavLink></li>
            </ul>
        
    </div>

}


export default MenuProfile;



