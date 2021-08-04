import React from 'react';
import RecommendItem from './recommend_video_item.jsx/recommend_item';
import styles from './recommend_video.module.css';

const RecommendVideo = ({videos}) => {

    console.log(`videos : ${videos}`);
    // const [, ]

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>HIPHOP CONTENTS</h1>
            <ul className={styles.list}>
                {videos.map(video => <RecommendItem key={video.id} info={video.snippet} />)}
                {/* <RecommendItem/>
                <RecommendItem/>
                <RecommendItem/>
                <RecommendItem/>
                <RecommendItem/> */}
            </ul>
        </div>
    );
};

export default RecommendVideo;