import React from 'react';
import HotMixtape from './main/hot_mixtape/hot_mixtape';
import RecentMixtape from './main/recent_mixtape/recent_mixtape';
import styles from './mixtape.module.css';

const Mixtape = (props) => {
    return (
        <section className={styles.container}>
            <RecentMixtape/>
            <HotMixtape/>
        </section>
    );
};

export default Mixtape;