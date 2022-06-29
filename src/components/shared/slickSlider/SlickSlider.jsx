import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";
import styles from "./style.module.scss"


export default class SwipeToSlide extends Component {
    render() {
        const data = this.props.data;
        const settings = {
            className: "center",
            infinite: true,
            autoplay: true,
            centerPadding: "50px",
            slidesToShow: 3,
            swipeToSlide: true,
            afterChange: function(index) {
            }
        };
        return (
            <div className={styles.slickBlock}>
                <Slider {...settings}>
                    {data.map(elem => <div key={uuidv4()}><img src={elem} alt="img" className={styles.imgSlide}/></div>)}
                </Slider>
            </div>
        );
    }
}