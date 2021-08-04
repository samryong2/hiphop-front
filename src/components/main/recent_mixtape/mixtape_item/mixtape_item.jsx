import React from 'react';
import styles from './mixtape_item.module.css';

const MixtapeItem = (props) => {

    return(
        <li className={styles.wrap}>
            {/* 믹스테입 썸네일 */}
            <img className={styles.thumbnail} src="https://i1.sndcdn.com/artworks-000160849305-rzt5bk-t200x200.jpg" alt="" />
            {/* 노래 제목 */}
            <h1 className={styles.title}>01. 그릇의 차이 3</h1>
            {/* 랩퍼명 */}
            <h3 className={styles.artist}>swings</h3>
        </li>
    );
};

export default MixtapeItem;