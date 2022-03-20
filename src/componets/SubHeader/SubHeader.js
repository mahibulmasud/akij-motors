import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
function SubHeader() {
    const [toggle, setToggle] = useState('left_infinte')
    const handleClickSub = () => {
        if(toggle === 'left_infinte'){
            setToggle('left_zero');
        }else{
            setToggle('left_infinte');
        }
    }

    return (
        <div className='position-relative'>
            <div className='SubHeader_mains'>
                <div className='SubHeader_main'>
                    <div>
                        <div>
                            <GiHamburgerMenu className='sub_d_ham' onClick={handleClickSub} />
                            <span className='sub_cat_text'>categories</span>
                        </div>
                    </div>
                    <div></div>
                    <div>
                        <a href="/">commercial vehicle</a>
                    </div>
                    <div>
                        <a href="/">private vehicle</a>
                    </div>
                    <div><a href="/">motor servicing</a></div>
                    <div><a href="/">garage equipments</a></div>
                    <div><a href="/">spare parts</a></div>
                    <div><a href="/">electronic motorcycle</a></div>
                    <div><a href="/">forklift/stacker</a></div>
                    <div><a href="/">construction machinery</a></div>
                    <div><a href="/">special vehicle</a></div>
                </div>
            </div>
            <div className={`subnav ${toggle}`}>
                <ul>
                    <li>
                        <AiFillHome className='subnavIcon' />
                        <a href="/" className='subnav_text'>Home</a>
                    </li>
                    <li>
                        <AiFillHome className='subnavIcon' />
                        <a href="/" className='subnav_text'>Home</a>
                    </li>
                    <li>
                        <AiFillHome className='subnavIcon' />
                        <a href="/" className='subnav_text'>Home</a>
                    </li>
                    <li>
                        <AiFillHome className='subnavIcon' />
                        <a href="/" className='subnav_text'>Home</a>
                    </li>
                    <li>
                        <AiFillHome className='subnavIcon' />
                        <a href="/" className='subnav_text'>Home</a>
                    </li>
                    <li>
                        <AiFillHome className='subnavIcon' />
                        <a href="/" className='subnav_text'>Home</a>
                    </li>
                    <li>
                        <AiFillHome className='subnavIcon' />
                        <a href="/" className='subnav_text'>Home</a>
                    </li>
                    <li>
                        <AiFillHome className='subnavIcon' />
                        <a href="/" className='subnav_text'>Home</a>
                    </li>
                    <li>
                        <AiFillHome className='subnavIcon' />
                        <a href="/" className='subnav_text'>Home</a>
                    </li>
                    <li>
                        <AiFillHome className='subnavIcon' />
                        <a href="/" className='subnav_text'>Home</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SubHeader