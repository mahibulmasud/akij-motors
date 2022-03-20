import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel'
import Item from './Item'
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';
import img from '../../../../assets/images/section10/pic.png'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
];

class SCarrosal extends Component {
    render() {
        return (
            <div className='home_section10_carrosal'>
                <div className='hs10c_child1'>
                    <div>
                        <p className='hs10_leftpara1'>testomonials</p>
                        <h4>
                            What Our <br />
                            Customer Says
                        </h4>
                        <div className='hs10arrow_main'>
                            <div className='hs10_arrow left_arrow_main' onClick={() => this.carousel.slidePrev()}>
                                <RiArrowLeftSLine className='leftArrowIcon' />
                            </div>
                            <div className='hs10_arrow rigth_arrow_main' onClick={() => this.carousel.slideNext()}>
                                <RiArrowRightSLine className='rightArrowIcon' />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Carousel
                        ref={ref => (this.carousel = ref)}
                        pagination={false}
                        itemsToShow={2}
                        showArrows={false}
                        breakPoints={breakPoints}
                        enableAutoPlay
                    >
                        <Item>
                            <p className='hs10_number'>01/03</p>
                            <p className='para1'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto asperiores autem tempore quidem rem officia id ducimus doloribus optio, illum aspernatur maiores cupiditate porro, sunt expedita, iusto nostrum laborum!
                            </p>
                            <div className='hs10_card_footer'>
                                <div>
                                    <img src={img} className="hs10img" alt="" />
                                </div>
                                <div>
                                    <p>Mario Selia</p>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <p className='hs10_number'>01/03</p>
                            <p className='para1'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto asperiores autem tempore quidem rem officia id ducimus doloribus optio, illum aspernatur maiores cupiditate porro, sunt expedita, iusto nostrum laborum!
                            </p>
                            <div className='hs10_card_footer'>
                                <div>
                                    <img src={img} className="hs10img" alt="" />
                                </div>
                                <div>
                                    <p>Mario Selia</p>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <p className='hs10_number'>01/03</p>
                            <p className='para1'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto asperiores autem tempore quidem rem officia id ducimus doloribus optio, illum aspernatur maiores cupiditate porro, sunt expedita, iusto nostrum laborum!
                            </p>
                            <div className='hs10_card_footer'>
                                <div>
                                    <img src={img} className="hs10img" alt="" />
                                </div>
                                <div>
                                    <p>Mario Selia</p>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <p className='hs10_number'>01/03</p>
                            <p className='para1'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto asperiores autem tempore quidem rem officia id ducimus doloribus optio, illum aspernatur maiores cupiditate porro, sunt expedita, iusto nostrum laborum!
                            </p>
                            <div className='hs10_card_footer'>
                                <div>
                                    <img src={img} className="hs10img" alt="" />
                                </div>
                                <div>
                                    <p>Mario Selia</p>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <p className='hs10_number'>01/03</p>
                            <p className='para1'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto asperiores autem tempore quidem rem officia id ducimus doloribus optio, illum aspernatur maiores cupiditate porro, sunt expedita, iusto nostrum laborum!
                            </p>
                            <div className='hs10_card_footer'>
                                <div>
                                    <img src={img} className="hs10img" alt="" />
                                </div>
                                <div>
                                    <p>Mario Selia</p>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <p className='hs10_number'>01/03</p>
                            <p className='para1'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto asperiores autem tempore quidem rem officia id ducimus doloribus optio, illum aspernatur maiores cupiditate porro, sunt expedita, iusto nostrum laborum!
                            </p>
                            <div className='hs10_card_footer'>
                                <div>
                                    <img src={img} className="hs10img" alt="" />
                                </div>
                                <div>
                                    <p>Mario Selia</p>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <p className='hs10_number'>01/03</p>
                            <p className='para1'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto asperiores autem tempore quidem rem officia id ducimus doloribus optio, illum aspernatur maiores cupiditate porro, sunt expedita, iusto nostrum laborum!
                            </p>
                            <div className='hs10_card_footer'>
                                <div>
                                    <img src={img} className="hs10img" alt="" />
                                </div>
                                <div>
                                    <p>Mario Selia</p>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <p className='hs10_number'>01/03</p>
                            <p className='para1'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto asperiores autem tempore quidem rem officia id ducimus doloribus optio, illum aspernatur maiores cupiditate porro, sunt expedita, iusto nostrum laborum!
                            </p>
                            <div className='hs10_card_footer'>
                                <div>
                                    <img src={img} className="hs10img" alt="" />
                                </div>
                                <div>
                                    <p>Mario Selia</p>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <p className='hs10_number'>01/03</p>
                            <p className='para1'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto asperiores autem tempore quidem rem officia id ducimus doloribus optio, illum aspernatur maiores cupiditate porro, sunt expedita, iusto nostrum laborum!
                            </p>
                            <div className='hs10_card_footer'>
                                <div>
                                    <img src={img} className="hs10img" alt="" />
                                </div>
                                <div>
                                    <p>Mario Selia</p>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <p className='hs10_number'>01/03</p>
                            <p className='para1'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto asperiores autem tempore quidem rem officia id ducimus doloribus optio, illum aspernatur maiores cupiditate porro, sunt expedita, iusto nostrum laborum!
                            </p>
                            <div className='hs10_card_footer'>
                                <div>
                                    <img src={img} className="hs10img" alt="" />
                                </div>
                                <div>
                                    <p>Mario Selia</p>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <p className='hs10_number'>01/03</p>
                            <p className='para1'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto asperiores autem tempore quidem rem officia id ducimus doloribus optio, illum aspernatur maiores cupiditate porro, sunt expedita, iusto nostrum laborum!
                            </p>
                            <div className='hs10_card_footer'>
                                <div>
                                    <img src={img} className="hs10img" alt="" />
                                </div>
                                <div>
                                    <p>Mario Selia</p>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <p className='hs10_number'>01/03</p>
                            <p className='para1'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto asperiores autem tempore quidem rem officia id ducimus doloribus optio, illum aspernatur maiores cupiditate porro, sunt expedita, iusto nostrum laborum!
                            </p>
                            <div className='hs10_card_footer'>
                                <div>
                                    <img src={img} className="hs10img" alt="" />
                                </div>
                                <div>
                                    <p>Mario Selia</p>
                                </div>
                            </div>
                        </Item>
                        <Item>
                            <p className='hs10_number'>01/03</p>
                            <p className='para1'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi architecto asperiores autem tempore quidem rem officia id ducimus doloribus optio, illum aspernatur maiores cupiditate porro, sunt expedita, iusto nostrum laborum!
                            </p>
                            <div className='hs10_card_footer'>
                                <div>
                                    <img src={img} className="hs10img" alt="" />
                                </div>
                                <div>
                                    <p>Mario Selia</p>
                                </div>
                            </div>
                        </Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default SCarrosal;