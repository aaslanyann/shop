import Header from "../header/Header";
import styles from "./style.module.scss"
import SwipeToSlide from "../shared/slickSlider/SlickSlider";
import {collection, getDocs} from "firebase/firestore";
import {useEffect, useState} from "react";
import {db} from "../../FireBase/firebase-config";
import Range from "./rangeAlco/Range";
import FavouriteBrands from "./favourite/FavouriteBrands";
import {useDispatch, useSelector} from "react-redux";
import  {fetchHomeSliderPhotos} from "../../redux/common/home/thunk"
import {selectSliderPhotos} from "../../redux/common/home/selectors";

export default function Home() {

    const sliderList = useSelector(selectSliderPhotos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHomeSliderPhotos());
    },[])

    return (
        <>
            <Header />
            <div className="containerWithHeader">
                <div className={styles.homeContent}>
                    <div>
                        {sliderList[0] && <SwipeToSlide data={sliderList[0].links} />}
                    </div>
                    <div>
                        {sliderList[0] && <Range data={sliderList[0].range} />}
                    </div>
                    <div>
                        {sliderList[0] && <FavouriteBrands  data={sliderList[0].favouriteBrands}/>}
                    </div>
                </div>
            </div>
        </>

    )
}