import React from 'react';
import HotMixtapeItem from './hot_mixtape_item/hot_mixtape_item';
import styles from '../hot_mixtape/hot_mixtape.module.css';

const HotMixtape = (props) => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>HOT MIXTAPE</h1>
            <ul className={styles.list}>
                <HotMixtapeItem/>
                <HotMixtapeItem/>
                <HotMixtapeItem/>
                <HotMixtapeItem/>
            </ul>
        </div>
    );
};

export default HotMixtape;