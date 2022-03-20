import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SubHeader from '../SubHeader/SubHeader'
import img from '../../assets/images/section1/homesection1.jpg'
import hs1logo1 from '../../assets/images/section1/logo1.png'
import hs1logo2 from '../../assets/images/section1/logo2.png'
import Section2 from './Section2/Section2'
import { Col, Container, Row } from 'react-bootstrap'
import hs3Img from '../../assets/images/section3/section3RightImg.png'
import hs4Img1 from '../../assets/images/section4/icon1.png'
import hs5Img from '../../assets/images/section5/hs5img.png'
import hs6img from '../../assets/images/section6/hs6img.png'

function Home() {
    return (
        <>
            <Header />
            <SubHeader />
            {/* section1 */}
            <div className="home_section1">
                <img src={hs1logo1} className="hs1logo1" alt="" />
                <img src={hs1logo2} className="hs1logo2" alt="" />
                <img src={img} className='w-100' alt="" />
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
                    <Row className='g-5 hs4_row'>
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
                    <Row className='g-4'>
                    <Col lg='6'>
                        <div>
                            <img src={hs5Img} className='w-100' alt="" />
                        </div>
                    </Col>
                    <Col lg='6' className='hs5_col2'>
                        <div>
                            <Row className='g-4 p-4'>
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
            {/* section7 */}
            <Footer />
        </>
    )
}

export default Home