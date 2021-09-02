import React, { useState } from 'react';
import MediaQuery from 'react-responsive'

import classes from './Nav.module.css'
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Nav = props => {


    return (
        <div>
            <MediaQuery maxWidth={700}>
                Mobile
                <MobileNav />
            </MediaQuery>
            <MediaQuery minWidth={701}>
                desktop
                <DesktopNav />
            </MediaQuery>
        </div>
    );
};

export default Nav;