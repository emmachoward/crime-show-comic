import React from 'react';

import classes from './Logo.module.css'

const Logo = props => {
    return (
        <h1 className={classes.logo}>
            <a href="#index">
                <img src="http://satyr.io/50x50/black" alt="" /> 
                Crime Show 
                <img src="http://satyr.io/50x50/black" alt="" />
            </a>
        </h1>
    );
};

export default Logo;