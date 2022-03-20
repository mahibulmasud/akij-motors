import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SubHeader from '../SubHeader/SubHeader'
import hs1logo1 from '../../assets/images/section1/logo1.png'
import hs1logo2 from '../../assets/images/section1/logo2.png'
import Section2 from './Section2/Section2'
import { Col, Container, Row } from 'react-bootstrap'
import hs3Img from '../../assets/images/section3/section3RightImg.png'
import hs4Img1 from '../../assets/images/section4/icon1.png'
import hs5Img from '../../assets/images/section5/hs5img.png'
import hs6img from '../../assets/images/section6/hs6img.png'
import hs7img from '../../assets/images/section7/hs7img.png'
import hs8img from '../../assets/images/section8/hs8CardImg.png'
import hs9img from '../../assets/images/section9/hs9Img.jpg'
import Section10 from './Section10/Section10'
import Section1 from './Section1/Section1'

function Home() {
    return (
        <>
            <Header />
            <SubHeader />
            {/* section1 */}
            <div className="home_section1">
                <img src={hs1logo1} className="hs1logo1 hs1logo" alt="" />
                <img src={hs1logo2} className="hs1logo2 hs1logo" alt="" />
                <Section1/>
            </div>
            {/* section1 */}
            {/* section2 */}
            <div className='home_section2'>
                <div className='title-header'>
                    <h1 className='title1 text-center'>Find Best Vehicles</h1>
                </div>
                <div className='hs2_container'>
                    <Section2 />
                    <div className='mt-5 text-center'>
                        <button className='Btn_red'>More</button>
                    </div>
                </div>
            </div>
            {/* section2 */}

            {/* section3 */}
            <div className='home_section3'>
                <Container className='g-5'>
                    <Row className='g-4 hs3_first_row'>
                        <Col lg='6'>
                            <div>
                                <h4 className='hs3_title'>New Release Vehicle</h4>
                                <Row className='g-3 mt-5 hs3_second_row'>
                                    <Col md='6'>
                                        <div>
                                            <ul className='list-unstyled mb-0'>
                                                <li>Stylish designs</li>
                                                <li>Stylish designs</li>
                                                <li>Stylish designs</li>
                                                <li>Stylish designs</li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col md='6'>
                                        <div>
                                            <ul className='list-unstyled'>
                                                <li>Stylish designs</li>
                                                <li>Stylish designs</li>
                                                <li>Stylish designs</li>
                                                <li>Stylish designs</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                                <p className='mt-5'>
                                    Conditional warranty: 6-month warranty for Battery, Motor and Controller.
                                </p>
                                <div className='text-center mt-5'>
                                    <button className='Btn_red'>Learn More</button>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6' className='d-flex align-items-center justify-content-center'>
                            <div>
                                <img src={hs3Img} className='hs3Img' alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* section3 */}

            {/* section4 */}
            <div className='home_section4'>
                <div className='text-center mb-5'>
                    <h4 className='title2'>Why People Love Us So Much</h4>
                </div>
                <p className='para1 text-center'>
                    Akij motors solely believes in total customer satisfaction with "Trust and Mutual Benefit". In low cost <br /> quality products selling is our commitment. There's many variety, design, comfort combinations for <br /> choosing the best product for the client. You can see the statistics of our happy client here.
                </p>
                <Container>
                    <Row className='g-5 hs4_row m-0'>
                        <Col lg='3' md='6'>
                            <div className='hs4_row_card'>
                                <img src={hs4Img1} alt="" />
                                <h5>1000+</h5>
                                <p>dealership</p>
                            </div>
                        </Col>
                        <Col lg='3' md='6'>
                            <div className='hs4_row_card'>
                                <img src={hs4Img1} alt="" />
                                <h5>1000+</h5>
                                <p>dealership</p>
                            </div>
                        </Col>
                        <Col lg='3' md='6'>
                            <div className='hs4_row_card'>
                                <img src={hs4Img1} alt="" />
                                <h5>1000+</h5>
                                <p>dealership</p>
                            </div>
                        </Col>
                        <Col lg='3' md='6'>
                            <div className='hs4_row_card'>
                                <img src={hs4Img1} alt="" />
                                <h5>1000+</h5>
                                <p>dealership</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* section4 */}

            <div className='p-5'></div>
            {/* section5 */}
            <div className='home_section5'>
                <div className='text-center mb-5'>
                    <h4 className='title2'>Our Top Rated Services</h4>
                </div>
                <p className='para1 text-center mb-5'>
                    Once people deal with us they are very eager to take the next servics. <br /> Our vehicles are qualityful which is easily chosen by the client.
                </p>
                <div className='hs5_row_main'>
                    <Row className='g-4 m-0'>
                        <Col lg='6'>
                            <div>
                                <img src={hs5Img} className='w-100' alt="" />
                            </div>
                        </Col>
                        <Col lg='6' className='hs5_col2'>
                            <div>
                                <Row className='g-4 p-4 m-0'>
                                    <Col md='6'>
                                        <div>
                                            <h5 className='hs5_inner_title mb-4'>Powerful engine,strong chasis</h5>
                                            <p>
                                                We use engines which follow garmany technologies. We also have original ichijo engines(japan), Nishan petrol pump engines (japan), single weichai engines e.tc.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md='6'>
                                        <div>
                                            <h5 className='hs5_inner_title mb-4'>Powerful engine,strong chasis</h5>
                                            <p>
                                                We use engines which follow garmany technologies. We also have original ichijo engines(japan), Nishan petrol pump engines (japan), single weichai engines e.tc.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md='6'>
                                        <div>
                                            <h5 className='hs5_inner_title mb-4'>Powerful engine,strong chasis</h5>
                                            <p>
                                                We use engines which follow garmany technologies. We also have original ichijo engines(japan), Nishan petrol pump engines (japan), single weichai engines e.tc.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md='6'>
                                        <div>
                                            <h5 className='hs5_inner_title mb-4'>Powerful engine,strong chasis</h5>
                                            <p>
                                                We use engines which follow garmany technologies. We also have original ichijo engines(japan), Nishan petrol pump engines (japan), single weichai engines e.tc.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* section5 */}

            {/* section6 */}
            <div className='home_section6'>
                <Container>
                    <Row className='g-4'>
                        <Col md='4'>
                            <div className='position-relative'>
                                <img src={hs6img} className='w-100' alt="" />
                                <h4 className='hs6_title'>Batteries</h4>
                            </div>
                        </Col>
                        <Col md='4'>
                            <div className='position-relative'>
                                <img src={hs6img} className='w-100' alt="" />
                                <h4 className='hs6_title'>Batteries</h4>
                            </div>
                        </Col>
                        <Col md='4'>
                            <div className='position-relative'>
                                <img src={hs6img} className='w-100' alt="" />
                                <h4 className='hs6_title'>Batteries</h4>
                            </div>
                        </Col>
                        <Col md='4'>
                            <div className='position-relative'>
                                <img src={hs6img} className='w-100' alt="" />
                                <h4 className='hs6_title'>Batteries</h4>
                            </div>
                        </Col>
                        <Col md='4'>
                            <div className='position-relative'>
                                <img src={hs6img} className='w-100' alt="" />
                                <h4 className='hs6_title'>Batteries</h4>
                            </div>
                        </Col>
                        <Col md='4'>
                            <div className='position-relative'>
                                <img src={hs6img} className='w-100' alt="" />
                                <h4 className='hs6_title'>Batteries</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* section6 */}

            {/* section7 */}
            <div className='home_section7'>
                <div className='text-center mb-5'>
                    <h4 className='title2'>Largest Selection of Vehicles</h4>
                </div>
                <p className='para1 text-center mb-5'>
                    Once people deal with us they are very eager to take the next servics. <br /> Our vehicles are qualityful which is easily chosen by the client.
                </p>
                <div>
                    <Container>
                        <div className='hs7_section7_row'>
                            <div className='hs7_section7_card'>
                                <div className='hs7_card_img_div'>
                                    <img src={hs7img} className="w-100" alt="" />
                                </div>
                                <p className='hs7_title'>Find Bikes</p>
                                <button className='hs7_btn'>11,542</button>
                            </div>
                            <div className='hs7_section7_card'>
                                <div className='hs7_card_img_div_two'>
                                    <img src={hs7img} className="w-100" alt="" />
                                </div>
                                <p className='hs7_title'>Find Bikes</p>
                                <button className='hs7_btn'>11,542</button>
                            </div>
                            <div className='hs7_section7_card'>
                                <div className='hs7_card_img_div'>
                                    <img src={hs7img} className="w-100" alt="" />
                                </div>
                                <p className='hs7_title'>Find Bikes</p>
                                <button className='hs7_btn'>11,542</button>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            {/* section7 */}

            {/* section8 */}
            <div className='home_section8'>
                <Container>
                    <Row className='m-0'>
                        <Col md='6'>
                            <div>
                                <h4>Start Today. Drive Today</h4>
                                <p>Best Private Vehicles</p>
                                <button className='Btn_More'>More</button>
                            </div>
                        </Col>
                        <Col md='6'>
                            <img src={hs8img} className='hs8img' alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* section8 */}

            {/* section9 */}
            <div className='home_section9'>
                <div className='text-center mb-5'>
                    <h4 className='title3'>From Our Blog</h4>

                    <div className='hs9button_div'>
                        <span className='hs9button_div_text'>Helpful Vehicle Buying</span>
                    </div>
                </div>
                <div>
                    <Container>
                        <Row className='m-0 g-4'>
                            <Col lg='4' md='6'>
                                <div className='hs9_card'>
                                    <img src={hs9img} className='hs9img mb-3' alt="" />
                                    <h4 className='title3'>Latest News</h4>
                                    <p className='para1 mt-4'>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima minus distinctio sit laborum autem dolore.
                                    </p>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className='hs9_card'>
                                    <img src={hs9img} className='hs9img mb-3' alt="" />
                                    <h4 className='title3'>Latest News</h4>
                                    <p className='para1 mt-4'>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima minus distinctio sit laborum autem dolore.
                                    </p>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className='hs9_card'>
                                    <img src={hs9img} className='hs9img mb-3' alt="" />
                                    <h4 className='title3'>Latest News</h4>
                                    <p className='para1 mt-4'>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima minus distinctio sit laborum autem dolore.
                                    </p>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className='hs9_card'>
                                    <img src={hs9img} className='hs9img mb-3' alt="" />
                                    <h4 className='title3'>Latest News</h4>
                                    <p className='para1 mt-4'>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima minus distinctio sit laborum autem dolore.
                                    </p>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className='hs9_card'>
                                    <img src={hs9img} className='hs9img mb-3' alt="" />
                                    <h4 className='title3'>Latest News</h4>
                                    <p className='para1 mt-4'>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima minus distinctio sit laborum autem dolore.
                                    </p>
                                </div>
                            </Col>
                            <Col lg='4' md='6'>
                                <div className='hs9_card'>
                                    <img src={hs9img} className='hs9img mb-3' alt="" />
                                    <h4 className='title3'>Latest News</h4>
                                    <p className='para1 mt-4'>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima minus distinctio sit laborum autem dolore.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            {/* section9 */}

            {/* section10 */}
            <div className='home_section10'>
                <Section10 />
            </div>
            {/* section10 */}

            <div className='p-5'></div>
            <Footer />
        </>
    )
}

export default Home