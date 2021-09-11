import React, { useState } from 'react';

import classes from './DesktopNav.module.css'
import Logo from './Logo';
import Sidebar from './sidebar/Sidebar';

const DesktopNav = props => {
    const [displaySidebar, setDisplaySidebar] = useState(true);

    const displaySidebarHandler = () => {
        setDisplaySidebar(!displaySidebar);
    };

    return (
        <>
            {displaySidebar && <Sidebar />}
            <div className={classes.desktopNav}>
                <div className={classes.menu}><button onClick={displaySidebarHandler} ><img src="http://satyr.io/50x50/black" alt="" /><br />Menu</button></div>
                <Logo />
                <div className={classes.search}><a href="#" ><img src="http://satyr.io/50x50/black" alt="" /><br />Search</a></div>
            </div>
        </>
    );
};

export default DesktopNav;