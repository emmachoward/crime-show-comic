import React from 'react';

import classes from './MobileHeader.module.css'

const MobileHeader = props => {
    return (
        <div className={classes.mobileHeader}>
            <h1>Crime Show</h1>
        </div>
    );
};

export default MobileHeader;