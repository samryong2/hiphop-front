import React from 'react';
import styles from '../hot_mixtape_item/hot_mixtape_item.module.css';

const HotMixtapeItem = (props) => {
        return(
            <li className={styles.container}>
                <img className={styles.thumbnail} src="https://i1.sndcdn.com/artworks-000276234470-0clgd5-t200x200.jpg" alt="" />
                <div className={styles.infoWrap}>
                    <h1 className={styles.title}>JUSTHIS - UNKNOWN VERSE CYPHER</h1>
                    <h3 className={styles.artist}>JUSTHIS</h3>
                </div>
            </li>
        );
};

export default HotMixtapeItem;