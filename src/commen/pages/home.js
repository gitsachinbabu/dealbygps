import React from "react";
// import imagePath from "./images/imagePath";
import { Row, Col ,Image, Carousel,Form} from 'react-bootstrap';
import { BsSearch ,BsHeartFill,BsFillStarFill,BsPlayCircle} from "react-icons/bs";
import { ImLocation2} from "react-icons/im";
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaGoogle,FaYoutube} from "react-icons/fa";
import imagePath from "../../images/imagePath";
import Header from "../../commen/pages/header/header.js";
import Footer from "./footer/footer";
// import ScrollMenu from "react-horizontal-scrolling-menu";
// import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle,} from "react-icons/io";


function Home() {


    const renderBanner = () => {
        return <Row key={118}>
                <Col xxl={2} xl={2} lg={2}></Col>
                    <Col xxl={8} xl={8} lg={8}>
                        <div className="inputSearchBanner">
                            <h1>are you ready to grow your business ?</h1>
                            <div className="inputSearchBox">
                                <input className="searchInput" placeholder="Search Your business"></input>
                                <input className="inputNear" placeholder="Near By Search"></input>
                                <div className="searchIcon"><BsSearch/></div>
                                {/* <Image className="img-fluid" src={imagePath.IMG_HOME_BANNER} /> */}
                            </div>
                         </div>
                    </Col>
                </Row>
    
    }

    const renderExtraDiscount = () => {
        return <Row key={119}>
                    <Col xxl={12}>
                         <div className="ExtraDiscountBox">
                            <div className="ExtraDiscountHeading">
                                <h2>Extra 20% Off</h2>
                            </div>
                            <div className="ExtraDiscounBgimg">
                                <h5>20% Extra Off  Any Madichines</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                         </div>
                         
                    </Col>
                    <Col xxl={12} className="text-center">
                        <button className="btnBig">Download Deals By GPS</button>
                    </Col>
                </Row>
    }

    const renderShopCatogery = () => {
        return<Row key={101}>
                <Col xxl={6} xl={6} lg={6}>
                    <h3 className="allHeading">Dining</h3>  
                        <div className="ShopCatogery">
                                <Image className="img-fluid" src={imagePath.IMG_HOME_BANNER} />
                                <div className="ShopCatogeryDetail">
                                <h4 className="allHeadingInner">Appollo Pharmacy</h4>  
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                                    is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6}>
                    <h3 className="allHeading">THINGS TO DO</h3>  
                        <div className="ShopCatogery">
                                <Image className="img-fluid" src={imagePath.IMG_HOME_BANNER} />
                                <div className="ShopCatogeryDetail">
                                <h4 className="allHeadingInner">Appollo Pharmacy</h4>  
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                                    is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6}>
                    <h3 className="allHeading">HEALTH + BEAUTY</h3>  
                        <div className="ShopCatogery">
                                <Image className="img-fluid" src={imagePath.IMG_HOME_BANNER} />
                                <div className="ShopCatogeryDetail">
                                <h4 className="allHeadingInner">Appollo Pharmacy</h4>  
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                                    is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6}>
                    <h3 className="allHeading">SHOP + STYLE</h3>  
                        <div className="ShopCatogery">
                                <Image className="img-fluid" src={imagePath.IMG_HOME_BANNER} />
                                <div className="ShopCatogeryDetail">
                                <h4 className="allHeadingInner">Appollo Pharmacy</h4>  
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                                    is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
    }

    
  function productBox(){
    let arr = [1,2,3,4]
    return arr.map((item,index) =>
    <Col kye={index} xxl={3} xl={3} lg={3}>
            <div className="allItemBox">
                <div className="itemImg">
                    <Image className="img-fluid" src={imagePath.IMG_HOME_BANNER} />
                    <div className="heartIcon"><BsHeartFill/></div>
                </div>
                <div className="allItemDetails">
                    <p>3 Bed, 2 Bath, 1,547sqft 1,547 square feet 7,501sqft lot</p>
                    <div className="shortRate">
                        <strong>Addresh:</strong>
                        <p>2239 NW 36th St, Oklahoma City, OK 73112</p>
                    </div>
                    <div className="shortRate">
                        <del><strong>MRP:1.75.000 $</strong></del>
                    </div>
                    <div className="shortRate">
                        <strong>MRP:1.00.000 $</strong>
                    </div>
                    <div className="rating"><BsFillStarFill/> 4.5</div>
                </div>
            </div>
        </Col>
    ) 
  }
  
    const renderAllItem = () => {
        return<Row key={102}>
                <Col xxl={12}>
                <h3 className="allHeading">REAL ESTATE</h3>  
                </Col>
               {productBox()}
        </Row>
    }


    function localShoppingBox(){
        let arr = [1,2,3,4,5,6]
        return arr.map((item,index) =>
        <Col kye={index} xxl={6} xl={6} lg={6}>
                <div className="localShopping">
                    <div className="localShoppingItemImg">
                        <Image className="img-fluid" src={imagePath.IMG_HOME_BANNER} />
                    </div>
                    <div className="localShoppingDetails">
                        <p><strong>MRP: <del>29.8$</del> 19.9$</strong></p>
                        <p>30 Tablets</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button>Details</button>
                    </div>
                </div>
            </Col>
        ) 
      }


    const renderLocalShopping = () => {
        return<Row key={103}>
                <Col xxl={12}>
                <h3 className="allHeading">Local Shopping</h3>  
                </Col>
               {localShoppingBox()}
               <Col xxl={12} className="text-center">
               <button className="btnBig mt-0">See  More</button>
               </Col>
        </Row>
    }

    function ObituariesBox(){
        let arr = [1,2,3,4]
        return arr.map((item,index) =>
        <Col kye={index} xxl={3} xl={3} lg={3}>
                <div className="obituariesBox">
                    <div className="obituariesBoxImg">
                        <Image className="img-fluid" src={imagePath.IMG_HOME_BANNER} />
                    </div>
                    <div className="obituariesDetails">
                        <p>SATURDAY, JANUARY 22, 2022</p>
                        <p>Carl Angeloff</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <p><i>Anthony Funeral Chapel</i></p>
                        <p><ImLocation2/> Palm Beach Gardens, FL</p>
                    </div>
                </div>
            </Col>
        ) 
      }

    const renderObituaries = () => {
        return<Row key={104}>
                <Col xxl={12}>
                <h3 className="allHeading">obituaries</h3>  
                </Col>
               {ObituariesBox()}
        </Row>
    }



    function OponsoredBox(){
        let arr = [1,2,3,4,5,6]
        return arr.map((item,index) =>
        <Col kye={index} xxl={6} xl={6} lg={6}>
                <div className="localShopping">
                    <div className="localShoppingItemImg">
                        <Image className="img-fluid" src={imagePath.IMG_HOME_BANNER} />
                    </div>
                    <div className="localShoppingDetails">
                        <p><strong><i>Northwesterly ahead of a cold front in area </i></strong></p>
                        <p>LAKE WORTH  <span>(6:33 p.m. ET Jan. 23)</span></p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                            industry.</p>
                        <button>Read More</button>
                    </div>
                </div>
            </Col>
        ) 
      }
      

    const renderSponsored = () => {
        return<Row key={105}>
                <Col xxl={12}>
                <h3 className="allHeading">sponsored</h3>  
                </Col>
               {OponsoredBox()}
               <Col xxl={12} className="text-center">
               <button className="btnBig mt-0">See  More</button>
               </Col>
        </Row>
    }


    function BestBusinessBox(){
        let arr = [1,2,3,4]
        return arr.map((item,index) =>
        <Col kye={index} xxl={3} xl={3} lg={3}>
                <div className="bestBusinessBox">
                    <Image className="img-fluid" src={imagePath.IMG_HOME_BANNER} />
                    <h5>Hotels</h5>
                </div>
            </Col>
        ) 
      }

    const renderBestBusiness = () => {
        return<Row key={106}>
                <Col xxl={12}>
                <h3 className="allHeading">Best Businesses in Your City</h3>  
                </Col>
               {BestBusinessBox()}
        </Row>
    }


    const renderPromotionalCampaigns  = () => {
        return<Row key={107}>
                <Col xxl={12}>
                <h3 className="allHeading">Best Businesses in Your City</h3>  
                </Col>
                <Col xxl={3} xl={3} lg={3}>
                    <div className="allItemBox">
                        <div className="itemImg">
                            <Image className="img-fluid" src={imagePath.IMG_HOME_BANNER} />
                            <div className="heartIcon"><BsHeartFill/></div>
                        </div>
                        <div className="allItemDetails">
                            <h5>Real Estate</h5>
                            <p>3 Bed, 2 Bath, 1,547 square feet</p>
                            <div className="shortRate">
                                <strong>Addresh:</strong>
                                <p>2239 NW 36th St, Oklahoma City, OK 73112</p>
                            </div>
                            <div className="shortRate">
                                <del><strong>MRP:1.75.000 $</strong></del>
                            </div>
                            <div className="shortRate">
                                <strong>MRP:1.00.000 $</strong>
                            </div>
                            <div className="rating"><BsFillStarFill/> 4.5</div>
                        </div>
                    </div>
                </Col>
                <Col xxl={3} xl={3} lg={3}>
                    <div className="allItemBox">
                        <div className="itemImg">
                            <Image className="img-fluid" src={imagePath.IMG_HOME_BANNER} />
                            <div className="heartIcon"><BsHeartFill/></div>
                        </div>
                        <div className="allItemDetails">
                            <h5>Morya Fitness</h5>
                            <p>one Year Gym Membership</p>
                            <div className="shortRate">
                                <strong>Addresh:</strong>
                                <p>2239 NW 36th St, Oklahoma City, OK 73112</p>
                            </div>
                            <div className="shortRate">
                                <del><strong>MRP:1.75.000 $</strong></del>
                            </div>
                            <div className="shortRate">
                                <strong>MRP:1.00.000 $</strong>
                            </div>
                            <div className="rating"><BsFillStarFill/> 4.5</div>
                        </div>
                    </div>
                </Col>
                <Col xxl={3} xl={3} lg={3}>
                    <div className="allItemBox">
                        <div className="itemImg">
                            <Image className="img-fluid" src={imagePath.IMG_HOME_BANNER} />
                            <div className="heartIcon"><BsHeartFill/></div>
                        </div>
                        <div className="allItemDetails">
                            <h5>Restorent Hunger</h5>
                            <p>Pizza</p>
                            <div className="shortRate">
                                <strong>Addresh:</strong>
                                <p>2239 NW 36th St, Oklahoma City, OK 73112</p>
                            </div>
                            <div className="shortRate">
                                <del><strong>MRP:1.75.000 $</strong></del>
                            </div>
                            <div className="shortRate">
                                <strong>MRP:1.00.000 $</strong>
                            </div>
                            <div className="rating"><BsFillStarFill/> 4.5</div>
                        </div>
                    </div>
                </Col>
                <Col xxl={3} xl={3} lg={3}>
                    <div className="allItemBox">
                        <div className="itemImg">
                            <Image className="img-fluid" src={imagePath.IMG_HOME_BANNER} />
                            <div className="heartIcon"><BsHeartFill/></div>
                        </div>
                        <div className="allItemDetails">
                            <h5>Shopping Mart</h5>
                            <p>T-shirt</p>
                            <div className="shortRate">
                                <strong>Addresh:</strong>
                                <p>2239 NW 36th St, Oklahoma City, OK 73112</p>
                            </div>
                            <div className="shortRate">
                                <del><strong>MRP:1.75.000 $</strong></del>
                            </div>
                            <div className="shortRate">
                                <strong>MRP:1.00.000 $</strong>
                            </div>
                            <div className="rating"><BsFillStarFill/> 4.5</div>
                        </div>
                    </div>
                </Col>
        </Row>
    }


    const renderYourHealth = () => {
        return<Row key={108}>
                <Col xxl={12}>
                <h3 className="allHeading">Focus On Your Health</h3>  
                </Col>
                <Col xxl={6} xl={6} lg={6}>
                    <div className="YourHealthBox">
                        <Image className="img-fluid" src={imagePath.IMG_HOME_BANNER} />
                    </div>
                </Col>
                <Col xxl={6}xl={6} lg={6}>
                    <Row>
                        <Col xxl={6} xl={6} lg={6}>
                            <div className="YourHealthBox">
                                <Image className="FourImg" src={imagePath.IMG_HOME_BANNER} />
                            </div>
                        </Col>
                        <Col xxl={6} xl={6} lg={6}>
                            <div className="YourHealthBox">
                                <Image className="FourImg" src={imagePath.IMG_HOME_BANNER} />
                            </div>
                        </Col>
                        <Col xxl={6} xl={6} lg={6}>
                            <div className="YourHealthBox">
                                <Image className="FourImg" src={imagePath.IMG_HOME_BANNER} />
                            </div>
                        </Col>
                        <Col xxl={6} xl={6} lg={6}>
                            <div className="YourHealthBox">
                                <Image className="FourImg" src={imagePath.IMG_HOME_BANNER} />
                            </div>
                        </Col>
                    </Row>
                    
                </Col>
        </Row>
    }

    const renderDownloadApp = () => {
        return<Row key={110}>
                <Col xxl={6} xl={6} lg={6}>
                    <div className="downloadBoxBg">
                        <Row>
                            <Col xxl={4} xl={4} lg={4}>
                                <Image className="img-fluid" src={imagePath.IMG_DEAL_BY_GPS_APP} />
                            </Col>
                            <Col xxl={8} xl={8} lg={8}>
                                <Row>
                                    <Col lg={12}> 
                                        <div className="ourAppBox bg1 mb-4">
                                            <h4>Download Our App</h4>
                                            <p>Recieve Local Deals On The go!</p>
                                            <button className="WwiteBtnBg">Get The App</button>
                                        </div>
                                        <div className="ourAppBox bg1">
                                            <h4>SIgn up for emails</h4>
                                            <button className="WwiteBtnBg">sign up</button>
                                        </div>
                                    </Col>
                                </Row>
                            </Col> 
                        </Row>
                    </div>
                </Col>
                <Col xxl={6} xl={6} lg={6}>
                    <Row>
                        <Col xxl={12}>
                            <div className="ourAppBox bg2 mb-4">
                                <h4>want your business to be featured on bocaraton.com</h4>
                                <button className="WwiteBtnBg">Contact us</button>
                            </div>
                        </Col>
                        <Col xxl={12}>
                        <div className="YourHealthBox">
                                <Image className="FourImg" src={imagePath.IMG_OFFER} />
                            </div>
                        </Col>
                    </Row>
                </Col>
        </Row>
    }

    const renderVideo = () => {
        return<Row key={111}>
                <Col xxl={12}>
                <h3 className="allHeading">video</h3>  
                </Col>
               <Col xxl={12} className="text-center">
                    <div className="viedoBox">
                        <Image className="img-fluid" src={imagePath.IMG_HOME_BANNER}/>
                        <BsPlayCircle/>
                    </div>
               </Col>
        </Row>
    }

    
    function trandingDealSliderBox(){
        let arr = [1,2,3,4]
        return arr.map((item,index) =>
                    <Carousel.Item kye={index}>
                         <div className="allItemBox">
                                <div className="itemImg">
                                    <Image className="img-fluid" src={imagePath.IMG_HOME_BANNER} />
                                    <div className="heartIcon"><BsHeartFill/></div>
                                </div>
                                <div className="allItemDetails">
                                    <p>3 Bed, 2 Bath, 1,547sqft 1,547 square feet 7,501sqft lot</p>
                                    <div className="shortRate">
                                        <strong>Addresh:</strong>
                                        <p>2239 NW 36th St, Oklahoma City, OK 73112</p>
                                    </div>
                                    <div className="shortRate">
                                        <del><strong>MRP:1.75.000 $</strong></del>
                                    </div>
                                    <div className="shortRate">
                                        <strong>MRP:1.00.000 $</strong>
                                    </div>
                                    <div className="rating"><BsFillStarFill/> 4.5</div>
                                </div>
                            </div>
                    </Carousel.Item>
        ) 
      }


    
        const renderTrendingDeal = () => {
            return<Row key={112}>
                    <Col xxl={12}>
                    <h3 className="allHeading">Trending Deals for You</h3>  
                    </Col>
                    <Col xxl={12}>
                        <Carousel className="slderCarouselDeal">
                                {trandingDealSliderBox()}
                        </Carousel>
                    </Col>
                    <Col xxl={12} className="text-center">
                        <button className="btnBig mt-0">Download Deals By GPS</button>
                    </Col>
            </Row>
        }


        function shoppingSliderBox(){
            let arr = [1,2,3,4]
            return arr.map((item,index) =>
                        <Carousel.Item kye={index}>
                             <div className="allItemBox">
                                    <div className="itemImg mb-0">
                                        <Image className="img-fluid" src={imagePath.IMG_HOME_BANNER} />
                                        <div className="heartIcon"><BsHeartFill/></div>
                                    </div>
                                </div>
                        </Carousel.Item>
            ) 
          }
    

        const renderSliderShopping = () => {
            return<Row key={113}>
                    <Col xxl={12}>
                    <h3 className="allHeading">shopping</h3>  
                    </Col>
                   <Col xxl={12}>
                        <Carousel className="slderCarouselDeal">
                        {shoppingSliderBox()}
                        </Carousel>
                   </Col>
            </Row>
        }

        const renderfeaturedBusiness = () => {
            return<Row key={114}>
                   <Col xxl={12}>
                        <Form.Select size="lg" aria-label="Default select example" className="selectFuturebusiness">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                   </Col>
            </Row>
        }

        const renderbusinessDirectory = () => {
            return<Row key={115}>
                    <Col xxl={12}>
                    <h3 className="allHeading">Business Directory</h3>  
                    </Col>
                   <Col xxl={12}>
                        <ul className="listBusinessDirectory">
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                        </ul>
                   </Col>
            </Row>
        }

        const rendergoogleAdd = () => {
            return<Row key={116}>
                    <Col xxl={12}>
                       <div className="googleAddBox">
                            <Image className="img-fluid" src={imagePath.IMG_GOOGLE_ADD} />
                            <button className="addCloseBtn">X</button>
                        </div>  
                    </Col>
            </Row>
        }
        const renderMediaIconList = () => {
            return<Row key={117}>
                    <Col xxl={12}>
                       <ul className="mediaIconList">
                           <li><FaFacebookF/></li>
                           <li><FaTwitter/></li>
                           <li><FaInstagram/></li>
                           <li><FaLinkedinIn/></li>
                           <li><FaGoogle/></li>
                           <li><FaYoutube/></li>
                        </ul>  
                    </Col>
            </Row>
        }
        

        // renderLeftArrow() {
        //     return (
        //       <div className="product-list-arrow">
        //         <IoIosArrowDropleftCircle size={"25px"} color={"#400a0e"} />
        //       </div>
        //     );
        //   }
        
        //   renderRightArrow() {
        //     return (
        //       <div className="product-list-arrow">
        //         <IoIosArrowDroprightCircle size={"25px"} color={"#400a0e"} />
        //       </div>
        //     );
        //   }


        


    return <div className="wrapper">
                {/* <section className='sectionHeader'>
                    {renderHeader()}
                </section> */}
                <Header/>
                <section className='SectionBanner'>
                    {renderBanner()}
                </section>
                <section className='sectionExtraDiscount'>
                    {renderExtraDiscount()}
                </section>
                <section className="scrollMenu">
                      {/* <ScrollMenu
                        data={this.recentOffers()}
                        arrowLeft={this.renderLeftArrow()}
                        arrowRight={this.renderRightArrow()}
                        alignCenter={false}
                        clickWhenDrag={true}
                        dragging={true}
                        wheel={false}
                        scrollBy={2}
                        show={4}
                    /> */}
                     <ul>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                        <li><button>Dining</button></li>
                      
                    </ul>
                </section>
                <section className='sectionleftAndRight'>
                    <Row>
                        <Col xxl={9} xl={9} lg={9}>
                               {renderShopCatogery()}
                               {renderAllItem()}
                               {renderLocalShopping()}
                               {renderObituaries()}
                               {renderSponsored()}
                               {renderBestBusiness()}
                               {renderPromotionalCampaigns()}
                               {renderYourHealth()}
                               {renderDownloadApp()}
                        </Col>
                        <Col xxl={3}  xl={3} lg={3}>
                                {renderVideo()}
                                {renderTrendingDeal()}
                                {renderSliderShopping()}
                                {renderfeaturedBusiness()}
                                {renderbusinessDirectory()}
                                {rendergoogleAdd()}
                                {renderMediaIconList()}
                        </Col>
                    </Row>
                    <Footer/>
                </section>
    </div>
}


export default Home;