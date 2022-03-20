import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../../../assets/css/style.css'
import hs2Img1 from '../../../assets/images/section2/kamla.png'

function Section2() {
    return (
        <div className='hs2_part2'>
            <div className='hs2_child_one'>
                <h4 className='hs2_title'>all categories</h4>
                <ul className='list-unstyled mb-0 ps-4'>
                    <li>Pickup/Covered Van Diesel 4</li>
                    <li>Pickup Petrol/CNG/LPG 1</li>
                    <li>Human hauler/Tempu3</li>
                    <li>Light Duty Truck 3</li>
                    <li>Medium Duty Truck 3</li>
                    <li>Cargo Truck (6x4) 23 Ton</li>
                    <li>Cargo Truck (6x4) 45 Ton</li>
                    <li>Pickup/Covered Van Diesel 4</li>
                    <li>3.5 CBM Kamla</li>
                </ul>
            </div>
            <div className='hs2_child_two'>
                <Row className='g-4 px-4'>
                    <Col lg='3' md='6'>
                        <div className='hs2_child_two_card'>
                            <img src={hs2Img1} alt="" />
                            <p>Kamla</p>
                        </div>
                    </Col>
                    <Col lg='3' md='6'>
                        <div className='hs2_child_two_card'>
                            <img src={hs2Img1} alt="" />
                            <p>Kamla</p>
                        </div>
                    </Col>
                    <Col lg='3' md='6'>
                        <div className='hs2_child_two_card'>
                            <img src={hs2Img1} alt="" />
                            <p>Kamla</p>
                        </div>
                    </Col>
                    <Col lg='3' md='6'>
                        <div className='hs2_child_two_card'>
                            <img src={hs2Img1} alt="" />
                            <p>Kamla</p>
                        </div>
                    </Col>
                    <Col lg='3' md='6'>
                        <div className='hs2_child_two_card'>
                            <img src={hs2Img1} alt="" />
                            <p>Kamla</p>
                        </div>
                    </Col>
                    <Col lg='3' md='6'>
                        <div className='hs2_child_two_card'>
                            <img src={hs2Img1} alt="" />
                            <p>Kamla</p>
                        </div>
                    </Col>
                    <Col lg='3' md='6'>
                        <div className='hs2_child_two_card'>
                            <img src={hs2Img1} alt="" />
                            <p>Kamla</p>
                        </div>
                    </Col>
                    <Col lg='3' md='6'>
                        <div className='hs2_child_two_card'>
                            <img src={hs2Img1} alt="" />
                            <p>Kamla</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Section2