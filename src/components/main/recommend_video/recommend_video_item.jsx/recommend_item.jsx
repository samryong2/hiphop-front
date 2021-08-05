import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './recommend_item.module.css';


const RecommendItem = ({video, video:{snippet}}) => {
    const history = useHistory();
    const onClick = () =>{
        history.push(`/video/${snippet.resourceId.videoId}`);
    }
    
    return(
        <li className={styles.container} onClick={onClick}>
            <img className={styles.img} src={snippet.thumbnails.medium.url} alt="" />
            <h1 className={styles.title}>{snippet.title}</h1>
        </li>
    );
};

export default RecommendItem;