/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './video_detail.module.css';

const VideoDetail = (props) => {

    const {videokey} = useParams();

    return (
    <section className={styles.detail}>
        <iframe 
            className={styles.video} 
            type="text/html" 
            title="youtube video player"
            width="70%" 
            height="700px"
            src={`https://www.youtube.com/embed/${videokey}`}
            frameBorder="0" 
            allowFullscreen>
            </iframe>
            {/* <h2>{snippet.title}</h2>
            <h2>{snippet.channelTitle}</h2>
            <pre className={styles.description}>{snippet.description}</pre> */}
    </section>
    );
};

export default VideoDetail;