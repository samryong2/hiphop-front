/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({video, video:{snippet}}) => (
    <section className={styles.detail}>
        <iframe 
            className={styles.video} 
            type="text/html" 
            title="youtube video player"
            width="100%" 
            height="500px"
            src={`https://www.youtube.com/embed/${snippet.resourceId.videoId}`}
            frameBorder="0" 
            allowFullscreen>
            </iframe>
            <h2>{snippet.title}</h2>
            <h2>{snippet.videoOwnerChannelTitle}</h2>
            <pre className={styles.description}>{snippet.description}</pre>
    </section>
);

export default VideoDetail;