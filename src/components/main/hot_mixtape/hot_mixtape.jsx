import React from 'react';
import HotMixtapeItem from './hot_mixtape_item/hot_mixtape_item';
import styles from '../hot_mixtape/hot_mixtape.module.css';
import ReactPlayer from 'react-player';

const HotMixtape = (props) => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>HOT TRACK</h1>
            <ul className={styles.list}>
                {/* <HotMixtapeItem/>
                <HotMixtapeItem/>
                <HotMixtapeItem/>
                <HotMixtapeItem/> */}
                <ReactPlayer 
                    className={styles.palyer}
                    width="100%"
                    url="https://soundcloud.com/coogie0123/coogie-namchin-remix"
                />
                <ReactPlayer 
                    className={styles.palyer}
                    width="100%"
                    url="https://soundcloud.com/2u3ivt9iv6xt/superbee-uneducated-kid-full-ver"
                />
                <ReactPlayer 
                    className={styles.palyer}
                    width="100%"
                    url="https://soundcloud.com/officialbeenzino/monet"
                />
                <ReactPlayer 
                    className={styles.palyer}
                    width="100%"
                    url="https://soundcloud.com/paloaltongue/paloalto-no-love-feat-justhis"
                />


            </ul>
        </div>
    );
};

export default HotMixtape;