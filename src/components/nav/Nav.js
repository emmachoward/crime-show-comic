import React from 'react';
import MediaQuery from 'react-responsive'

import classes from './Nav.module.css';
import MobileHeader from './MobileHeader';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';


const Nav = props => {
    const { comicData } = props;

    return (
        <div className={classes.nav}>
            <MediaQuery maxWidth={700}>
                <MobileHeader />
                <MobileNav comicData={comicData}/>
            </MediaQuery>
            <MediaQuery minWidth={701}>
                <DesktopNav comicData={comicData} />
            </MediaQuery>
        </div>
    );
};

export default Nav;