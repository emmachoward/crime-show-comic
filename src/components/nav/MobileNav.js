import React, { useState } from 'react';

import classes from './MobileNav.module.css'
import Search from './search/Search';
import Sidebar from './sidebar/Sidebar';

const MobileNav = props => {
    const { comicData } = props;
    const [displaySidebar, setDisplaySidebar] = useState(false);
    const [displaySearch, setDisplaySearch] = useState(false);

    const displaySidebarHandler = () => {
        setDisplaySidebar(!displaySidebar);
    };

    const displaySearchHandler = () => {
        setDisplaySearch(!displaySearch);
    };

    return (
        <>
            {displaySidebar && <Sidebar comicData={comicData} />}
            {displaySearch && <Search comicData={comicData} />}
            <div className={classes.mobileNav}>
                <ul>
                    <li><button onClick={displaySidebarHandler} >
                            <img src="http://satyr.io/50x50/black" alt="" /><br />Menu
                        </button>
                    </li>
                    <li><a href="#Prev"><img src="http://satyr.io/50x50/black" alt="" /><br />Prev</a></li>
                    <li><a href="#Next"><img src="http://satyr.io/50x50/black" alt="" /><br />Next</a></li>
                    <li><button onClick={displaySearchHandler} >
                            <img src="http://satyr.io/50x50/black" alt="" /><br />Search
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MobileNav;