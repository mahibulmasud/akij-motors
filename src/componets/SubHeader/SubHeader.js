import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
function SubHeader() {

    const [left, setLeft] = useState('cnm_left')

    const handleClick = () => {
        if (left === 'cnm_left') {
            setLeft('csm_right');
        }else{
            setLeft('cnm_left');
        }
    }
    return (
        <div className='SubHeader_main'>
            <div className='SubHeader_main_child_one'>
                <div>
                    <GiHamburgerMenu className='sub_d_ham' />
                    <GiHamburgerMenu className='sub_m_ham' onClick={handleClick} />
                    <span className='sub_cat_text'>categories</span>
                </div>
            </div>
            <div className='SubHeader_main_child_two'>
                <div className={`SubHeader_nav ${left}`}>
                    <ul className='list-unstyled mb-0'>
                        <li><a href="/">commercial vehicle</a></li>
                        <li><a href="/">private vehicle</a></li>
                        <li><a href="/">motor servicing</a></li>
                        <li><a href="/">garage equipments</a></li>
                        <li><a href="/">spare parts</a></li>
                        <li><a href="/">electronic motorcycle</a></li>
                        <li><a href="/">forklift/stacker</a></li>
                        <li><a href="/">construction machinery</a></li>
                        <li><a href="/">special vehicle</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SubHeader