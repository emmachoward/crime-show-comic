import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';

import classes from './DesktopNav.module.css'
import Logo from './Logo';
import Search from './search/Search';
import Sidebar from './sidebar/Sidebar';
import { SidebarContext } from '../../context/Sidebar-context';

const DesktopNav = props => {
    const ctx = useContext(SidebarContext);
    const { comicData } = props;
    const [displaySearch, setDisplaySearch] = useState(false);

    const displaySearchHandler = () => {
        setDisplaySearch(!displaySearch);
    };
    
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
            {ctx.displaySidebar && <Sidebar comicData={comicData} />}  
            {displaySearch && <Search comicData={comicData} />}
            
            <div className={classes.desktopNav}>
                <div  className={classes.menu}>
                    <Button variant="link" onClick={ctx.toggleSidebar} >
                        <img src="images/icons/menu_icon.svg" width="50px" alt="Menu" />
                        <br />Menu
                    </Button>
                </div>
                <Logo />
                <div className={classes.search}>
                    <Button variant="link" onClick={displaySearchHandler} >
                        <img src="images/icons/search_icon.svg" width="50px" alt="Search" /><br />Search
                    </Button>
                </div>
            </div>
        </>
    );
};

export default DesktopNav;