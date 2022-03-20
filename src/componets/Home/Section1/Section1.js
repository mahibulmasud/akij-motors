import React from 'react'
import img from '../../../assets/images/section1/homesection1.jpg'
import img2 from '../../../assets/images/section1/homesection2.jpg'
import Carousel from 'react-elastic-carousel'
import Card from './Card'

function Section1() {
    return (
        <div className='hs1_caarosal'>
            <Carousel
                pagination={false}
                itemsToShow={1}
                showArrows={false}
                enableAutoPlay 
            >
                <Card>
                    <img src={img} className='home_banner_img' alt="" />
                </Card>
                <Card>
                    <img src={img2} className='home_banner_img' alt="" />
                </Card>
                <Card>
                    <img src={img} className='home_banner_img' alt="" />
                </Card>
                <Card>
                    <img src={img2} className='home_banner_img' alt="" />
                </Card>
                <Card>
                    <img src={img} className='home_banner_img' alt="" />
                </Card>
                <Card>
                    <img src={img2} className='home_banner_img' alt="" />
                </Card>
                <Card>
                    <img src={img} className='home_banner_img' alt="" />
                </Card>
                <Card>
                    <img src={img2} className='home_banner_img' alt="" />
                </Card>
            </Carousel>
        </div>
    )
}

export default Section1