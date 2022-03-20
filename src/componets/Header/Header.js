import React from 'react'
import logo from '../../assets/images/logo.png'
import '../../assets/css/style.css'
import '../../assets/css/responsive.css'
import { FiSearch } from 'react-icons/fi';
import { Dropdown } from 'react-bootstrap';

function Header() {
    return (
        <div className='custom_nav'>
            <div className='custom_nav_child_one'>
                <img src={logo} className='logo_img' alt="" />
            </div>
            <div className='custom_nav_child_two'>
                <div className={`custom_nav_main`}>
                    <ul className='list-unstyled'>
                        <li>
                            <Dropdown className='h_dropdown'>
                                <Dropdown.Toggle className='h_dropdown_btn'>
                                    En
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Bn</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">En</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Cn</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <FiSearch className='FiSearch' />
                        </li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">about us</a></li>
                        <li><a href="/">akij group</a></li>
                        <li><a href="/">dealer</a></li>
                        <li><a href="/">contact</a></li>
                    </ul>
                </div>
                {/* <div className='custom_humberger'>
                    <div className='humberger_Line_one'></div>
                    <div className='humberger_Line_two'></div>
                    <div className='humberger_Line_three'></div>
                </div> */}
            </div>
        </div>
    )
}

export default Header