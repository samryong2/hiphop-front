import React from 'react';
import styles from '../big_banner/big_banner.module.css';

const BigBanner = ({imgSrc}) => {
    return(
        <div className={styles.container}>
            <img className={styles.img} src="../image/rise4_oygli_a.jpg" alt="" />
        </div>
    );
};

export default BigBanner;