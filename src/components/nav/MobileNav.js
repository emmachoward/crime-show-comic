import React from 'react';

import classes from './MobileNav.module.css'

const MobileNav = props => {
    return (
        <div className={classes.mobileNav}>
            <ul>
                <li><a href="#"><img src="http://satyr.io/50x50/black" /><br />Menu</a></li>
                <li><a href="#"><img src="http://satyr.io/50x50/black" /><br />Prev</a></li>
                <li><a href="#"><img src="http://satyr.io/50x50/black" /><br />Next</a></li>
                <li><a href="#"><img src="http://satyr.io/50x50/black" /><br />Search</a></li>
            </ul>
        </div>
    );
};

export default MobileNav;