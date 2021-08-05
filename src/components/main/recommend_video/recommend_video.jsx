import React, { useEffect, useState } from 'react';
import RecommendItem from './recommend_video_item.jsx/recommend_item';
import styles from './recommend_video.module.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/swiper.scss';
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import MixtapeItem from '../recent_mixtape/mixtape_item/mixtape_item';

SwiperCore.use([Navigation, Pagination])

const RecommendVideo = ({videos}) => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>HIPHOP CONTENTS</h1>
            {/* <ul className={styles.list}>
                {videos.map(video => <RecommendItem key={video.id} video={video} />)}
            </ul> */}
            <>
            <Swiper
                    style={{ width:'100%'}}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    onSlideChange={() =>{
                        console.log('slide change');
                    }}
                    >
                    {videos.map((video) => ( 
                        <SwiperSlide key={video.id}>
                            <RecommendItem key={video.id} video={video} />
                        </SwiperSlide>
                    ))}
            </Swiper>
            </>
        </div>
    );
};

export default RecommendVideo;