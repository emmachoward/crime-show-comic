import React from 'react';

import classes from './DesktopNav.module.css'
import Logo from './Logo';

const DesktopNav = props => {
    return (
        <div className={classes.desktopNav}>
            <div className={classes.menu}><a href="#" ><img src="http://satyr.io/50x50/black" alt="" /><br />Menu</a></div>
            <Logo />
            <div className={classes.search}><a href="#" ><img src="http://satyr.io/50x50/black" alt="" /><br />Search</a></div>
        </div>
    );
};

export default DesktopNav;