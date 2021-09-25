import React, { useState, useContext } from 'react';

import classes from './DesktopNav.module.css'
import Logo from './Logo';
import Sidebar from './sidebar/Sidebar';
import { SidebarContext } from '../../context/Sidebar-context';

const DesktopNav = props => {
    const ctx = useContext(SidebarContext);
    const { comicData } = props;
    
    return (
        <>
            {ctx.displaySidebar && <Sidebar comicData={comicData} />}  
            <div className={classes.desktopNav}>
                <div className={classes.menu}>
                    <button onClick={ctx.toggleSidebar} >
                        <img src="http://satyr.io/50x50/black" alt="" />
                        <br />Menu
                    </button>
                </div>
                <Logo />
                <div className={classes.search}><a href="#" ><img src="http://satyr.io/50x50/black" alt="" /><br />Search</a></div>
            </div>
        </>
    );
};

export default DesktopNav;