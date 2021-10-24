import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import classes from './MobileNav.module.css'
import Search from './search/Search';
import Sidebar from './sidebar/Sidebar';
// import { HashLink } from 'react-router-hash-link';

const MobileNav = props => {
    const { comicData } = props;
    const [displaySidebar, setDisplaySidebar] = useState(false);
    const [displaySearch, setDisplaySearch] = useState(false);
    // const [currentComic, setCurrentComic] = useState(comicData[0]);
    // console.log(comicData[0]); //returns entire object
    // console.log(comicData.title); //undefined
    //console.log(comicData[2].title); //error

    const displaySidebarHandler = () => {
        setDisplaySidebar(!displaySidebar);
    };

    const displaySearchHandler = () => {
        setDisplaySearch(!displaySearch);
    };

    // const nextHandler = () => {
    //     console.log(currentComic);
    //     setCurrentComic(comicData[1].title)
    //     return currentComic.title;
    // };



    return (
        <>
            <style type="text/css">
                {`
                .btn-link {
                    color: #696980;
                    font-family: "Special Elite", monospace;
                }
                `}
            </style>
            {displaySidebar && <Sidebar comicData={comicData} />}
            {displaySearch && <Search comicData={comicData} />}
            <div className={classes.mobileNav}>
                <ul>
                    <li>
                        <Button variant="link" onClick={displaySidebarHandler} >
                            <img src="images/icons/menu_icon.svg" width="50px" alt="Menu" />
                            <br />Menu
                        </Button>
                    </li>
                    {/* How do you know where on the page the user currently is? */}
                    {/* <li><HashLink to="/"><img src="http://satyr.io/50x50/black" alt="Previous" /><br />Prev</HashLink></li>
                    <li><HashLink to={`/comics#${nextHandler}`}><img src="http://satyr.io/50x50/black" alt="Next" /><br />Next</HashLink></li>
                    <li><button onClick={nextHandler} >
                            <img src="http://satyr.io/50x50/black" alt="" /><br />Next
                        </button>
                    </li> */}
                    <li> 
                        <Button variant="link" onClick={displaySearchHandler} >
                            <img src="images/icons/search_icon.svg" width="50px" alt="Search" /><br />Search
                        </Button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MobileNav;