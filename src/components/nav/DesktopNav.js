import React, { useState, useContext } from 'react';

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
            {ctx.displaySidebar && <Sidebar comicData={comicData} />}  
            {displaySearch && <Search comicData={comicData} />}
            
            <div className={classes.desktopNav}>
                <div className={classes.menu}>
                    <button onClick={ctx.toggleSidebar} >
                        <img src="http://satyr.io/50x50/black" alt="" />
                        <br />Menu
                    </button>
                </div>
                <Logo />
                <div className={classes.search}>
                    <button onClick={displaySearchHandler} >
                        <img src="http://satyr.io/50x50/black" alt="" /><br />Search
                    </button>
                </div>
            </div>
        </>
    );
};

export default DesktopNav;