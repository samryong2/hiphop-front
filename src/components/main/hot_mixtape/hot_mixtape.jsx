import React from 'react';
import HotMixtapeItem from '../hot_mixtape_item/hot_mixtape_item';

const HotMixtape = (props) => {
    return(
        <div>
            <h1>금주 HOT MIXTAPE</h1>
            <ul>
                <HotMixtapeItem/>
                <HotMixtapeItem/>
                <HotMixtapeItem/>
                <HotMixtapeItem/>
                <HotMixtapeItem/>
                <HotMixtapeItem/>
            </ul>
        </div>
    );
};

export default HotMixtape;