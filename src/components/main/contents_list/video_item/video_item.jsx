import React, { memo } from 'react';
import styles from './video_item.module.css';

const Video_item = ({video, video:{snippet}, onVideoClick, display}) => {
    
        const displayType = display === 'list' ? styles.list : styles.grid;
        // console.log('video',video);
        return (
            
            <li className={`${styles.container} ${displayType}`} onClick={()=> onVideoClick(video)}>
                <div className={styles.video}>
                    <img 
                    className={styles.thumbnail}
                    src={snippet.thumbnails.medium.url} 
                    alt="video thumbnail" 
                    />
                    <div className={styles.metadata}>
                        <p className={styles.title}>{snippet.title}</p>
                        <p className={styles.channel}>{snippet.videoOwnerChannelTitle}</p>
                    </div>
                </div>
            </li>    
        )};
        // memo(
        // );

export default Video_item;