import React, { useState } from 'react';

import classes from './MobileNav.module.css'
import Sidebar from './sidebar/Sidebar';

const MobileNav = props => {
    const [displaySidebar, setDisplaySidebar] = useState(false);

    const displaySidebarHandler = () => {
        setDisplaySidebar(!displaySidebar);
    };

    return (
        <>
            {displaySidebar && <Sidebar />}
            <div className={classes.mobileNav}>
                <ul>
                    <li><button onClick={displaySidebarHandler} ><img src="http://satyr.io/50x50/black" alt="" /><br />Menu</button></li>
                    <li><a href="#"><img src="http://satyr.io/50x50/black" alt="" /><br />Prev</a></li>
                    <li><a href="#"><img src="http://satyr.io/50x50/black" alt="" /><br />Next</a></li>
                    <li><a href="#"><img src="http://satyr.io/50x50/black" alt="" /><br />Search</a></li>
                </ul>
            </div>
        </>
    );
};

export default MobileNav;