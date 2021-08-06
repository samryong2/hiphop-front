import React from 'react';
import MixtapeItem from './mixtape_item/mixtape_item';
import styles from '../recent_mixtape/recent_mixtape.module.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import ReactPlayer from 'react-player';

SwiperCore.use([Navigation, Pagination])

const RecentMixtape = (props) =>{
    return(
            <div className={styles.container}>
                <h1 className={styles.title}>NEW TRACK</h1>
                {/* <ul className={styles.list}> */}

                    <Swiper
                        style={{ width:'100%'}}
                        spaceBetween={20}
                        slidesPerView={4}
                        navigation
                        pagination={{ clickable: true }}
                        onSlideChange={() =>{
                            console.log('slide change');
                        }}
                        >
                            <SwiperSlide>
                                <ReactPlayer 
                                className={styles.palyer}
                                width="100%"
                            url="https://soundcloud.com/thisisjusthis/justhis-illinit-bmw"
                            /></SwiperSlide>
                            <SwiperSlide>
                                <ReactPlayer 
                                className={styles.palyer}
                                width="100%"
                                    url="https://soundcloud.com/thisisjusthis/justhis-unknown-verse-cypher"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ReactPlayer 
                                className={styles.palyer}
                                width="100%"
                                    url="https://soundcloud.com/itsjustswings/prod-swings"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ReactPlayer 
                                className={styles.palyer}
                                url="https://soundcloud.com/itsjustswings/08a"
                                width="100%"
                                />
                            </SwiperSlide>
                    {/* <SwiperSlide><MixtapeItem/></SwiperSlide>
                    <SwiperSlide><MixtapeItem/></SwiperSlide>
                    <SwiperSlide><MixtapeItem/></SwiperSlide>
                    <SwiperSlide><MixtapeItem/></SwiperSlide>
                    <SwiperSlide><MixtapeItem/></SwiperSlide>
                    <SwiperSlide><MixtapeItem/></SwiperSlide> */}
                    </Swiper>
                {/* </ul> */}
            </div>
    );
};

export default RecentMixtape;