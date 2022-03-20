import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../../assets/images/logo.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <div className='footer'>
            <Container >
                <Row className='footer_inner'>
                    <Col lg='3' md='6'>
                        <div>
                            <img src={logo} className='w-100' alt="" />
                            <div className='footer_social_main '>
                                <ul className='list-unstyled'>
                                    <li><a href="/" target='_blank'><FaFacebookF className='footer_social_icon' /></a></li>
                                    <li><a href="/" target='_blank'><FaTwitter className='footer_social_icon' /></a></li>
                                    <li><a href="/" target='_blank'><FaInstagram className='footer_social_icon' /></a></li>
                                    <li><a href="/" target='_blank'><FaYoutube className='footer_social_icon' /></a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg='3' md='6'>
                        <div className='footer_col'>
                            <h4 className='footer_title mb-4'>Support</h4>
                            <ul className='list-unstyled'>
                                <li><a href="/" className='text-white'>Blog</a></li>
                                <li><a href="/" className='text-white'>FAQ</a></li>
                                <li><a href="/" className='text-white'>Calculator</a></li>
                                <li><a href="/" className='text-white'>Powerpoint(PPTX)</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg='3' md='6'>
                        <div className='footer_col'>
                            <h4 className='footer_title mb-4'>Dealership</h4>
                            <ul className='list-unstyled'>
                                <li><a href="/" className='text-white'>Apply</a></li>
                                <li><a href="/" className='text-white'>Required Document</a></li>
                                <li><a href="/" className='text-white'>Career</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg='3' md='6'>
                    <div className='footer_col'>
                            <h4 className='footer_title mb-4'>links</h4>
                            <ul className='list-unstyled'>
                                <li><a href="/" className='text-white'>terms</a></li>
                                <li><a href="/" className='text-white'>privacy</a></li>
                                <li><a href="/" className='text-white'>dealer</a></li>
                                <li><a href="/" className='text-white'>career</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer