import React, {Component} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {v4 as uuidv4} from "uuid";
import styles from "./style.module.scss"


export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
        };
        const {data} = this.props
        return (
            <div className={styles.brandsBlock}>
                <h2 className={styles.title}>Favourite Brands</h2>
                <Slider {...settings}>
                    {data.map(elem => <div key={uuidv4()} className={styles.brandsLogoBlock}>
                        <img src={elem} alt="img"/>
                    </div>)}
                </Slider>
            </div>
        );
    }
}