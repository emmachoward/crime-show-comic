import React from 'react';

import classes from './MobileHeader.module.css'
import Logo from './Logo';

const MobileHeader = props => {
    return (
        <div className={classes.mobileHeader}>
            <Logo />
        </div>
    );
};

export default MobileHeader;