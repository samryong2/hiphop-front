/* eslint-disable react/jsx-pascal-case */

import React from 'react';
import styles from './video_list.module.css';
import Video_item from '../video_item/video_item';
import Youtube_item from '../youtube_item/youtube_item';



const VideoList = ({videos, onVideoClick, display}) => {
    console.log('video : ',videos);
    return  ( 
        <ul className={styles.videos}>
            {videos.map(video => <Youtube_item key={video.id} video={video} onVideoClick={onVideoClick} display={display}/>)}
        </ul>
    )};

export default VideoList;