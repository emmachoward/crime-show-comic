import React, { useState } from 'react';

import classes from './MobileNav.module.css'
import Search from './search/Search';
import Sidebar from './sidebar/Sidebar';
import { HashLink } from 'react-router-hash-link';

const MobileNav = props => {
    const { comicData } = props;
    const [displaySidebar, setDisplaySidebar] = useState(false);
    const [displaySearch, setDisplaySearch] = useState(false);
    const [currentComic, setCurrentComic] = useState(comicData[0]);
    console.log(comicData[0]);
    console.log(comicData.title);
    //console.log(comicData[2].title);

    const displaySidebarHandler = () => {
        setDisplaySidebar(!displaySidebar);
    };

    const displaySearchHandler = () => {
        setDisplaySearch(!displaySearch);
    };

    const nextHandler = () => {
        console.log(currentComic);
        setCurrentComic(comicData[1].title)
        return currentComic.title;
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
                    {/* How do you know where on the page the user currently is? */}
                    <li><HashLink to="/"><img src="http://satyr.io/50x50/black" alt="Previous" /><br />Prev</HashLink></li>
                    <li><HashLink to={`/comics#${nextHandler}`}><img src="http://satyr.io/50x50/black" alt="Next" /><br />Next</HashLink></li>
                    <li><button onClick={nextHandler} >
                            <img src="http://satyr.io/50x50/black" alt="" /><br />Next
                        </button>
                    </li>
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