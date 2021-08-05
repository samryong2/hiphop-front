import React, { useEffect, useState } from 'react';
import HotMixtape from './hot_mixtape/hot_mixtape';
import RecentMixtape from './recent_mixtape/recent_mixtape';
import RecommendVideo from './recommend_video/recommend_video';
import styles from './main.module.css';
import BigBanner from '../banner/big_banner/big_banner';
// import BigBanner from '../banner/big_banner/big_banner';



const Main = ({youtube}) => {
    const [videos, setVideos] = useState([]);
    
    useEffect(()=>{
        youtube
        .playList()
        .then(videos => {
            setVideos(videos)
        });
    },[youtube])
    return(
        <section className={styles.container}>
            <BigBanner/>
            {/* <RecentMixtape/> */}
            {/* <HotMixtape/> */}
            <RecommendVideo videos={videos} />
        </section>
    );
};

export default Main;