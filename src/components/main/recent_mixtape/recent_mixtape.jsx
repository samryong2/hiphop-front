import React from 'react';
import MixtapeItem from '../mixtape_item/mixtape_item';

const RecentMixtape = (props) =>{
    return(
        <section>
            <ul>
                <MixtapeItem/>
                <MixtapeItem/>
                <MixtapeItem/>
                <MixtapeItem/>
                <MixtapeItem/>
            </ul>
        </section>
    );
};

export default RecentMixtape;