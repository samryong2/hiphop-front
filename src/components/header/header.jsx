import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {


    return(
        <nav>
            <div>
                <img src="" alt="" />
                <h1>힙찔</h1>
            </div>
            <ul>
                <li><Link>mixtape</Link></li>
                <li><Link>album</Link></li>
                <li><Link>rank</Link></li>
                <li><Link>artist</Link></li>
            </ul>
        </nav>
    )
};

export default Header;