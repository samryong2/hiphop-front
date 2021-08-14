import React from 'react';
import Board_list_item from '../board_list_item/board_list_item';
import styles from './board_list.module.css';

const Board_list = (props) => {

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>커뮤니티</h1>
            <div></div>
            <ul className={styles.list}>
                <Board_list_item/>
            </ul>
        </div>
    );
};

export default Board_list;