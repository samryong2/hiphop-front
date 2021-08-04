import React from 'react';
import MixtapeItem from './mixtape_item/mixtape_item';
import styles from '../recent_mixtape/recent_mixtape.module.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination])

const RecentMixtape = (props) =>{
    return(
            <div className={styles.container}>
                <h1 className={styles.title}>NEW TRACK</h1>
                {/* <ul className={styles.list}> */}

                    <Swiper
                        style={{ width:'100%'}}
                        spaceBetween={20}
                        slidesPerView={5}
                        navigation
                        pagination={{ clickable: true }}
                        onSlideChange={() =>{
                            console.log('slide change');
                        }}
                        >
                    <SwiperSlide><MixtapeItem/></SwiperSlide>
                    <SwiperSlide><MixtapeItem/></SwiperSlide>
                    <SwiperSlide><MixtapeItem/></SwiperSlide>
                    <SwiperSlide><MixtapeItem/></SwiperSlide>
                    <SwiperSlide><MixtapeItem/></SwiperSlide>
                    <SwiperSlide><MixtapeItem/></SwiperSlide>
                    </Swiper>
                {/* </ul> */}
            </div>
    );
};

export default RecentMixtape;