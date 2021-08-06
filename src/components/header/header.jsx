import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../header/header.module.css';

const Header = (props) => {


    return(
        <nav className={styles.nav}>
            <Link to="/">
                <div className={styles.logoWrap}>
                    <img className={styles.logoImg} src="" alt="" />
                    <h1 className={styles.logoName}>HIPHOP</h1>
                </div>
            </Link>
            <ul className={styles.menuList}>
                <Link to="/mixtape"><li className={styles.menuItem}>mixtape</li></Link>
                <Link to="/album"><li className={styles.menuItem}>album</li></Link>
                <Link to="/community"><li className={styles.menuItem}>community</li></Link>
            </ul>
            <div></div>
        </nav>
    )
};

export default Header;