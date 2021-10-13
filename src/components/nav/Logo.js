import React from 'react';
import { Link } from "react-router-dom";

import classes from './Logo.module.css'

const Logo = props => {
    return (
        <h1 className={classes.logo}>
            
            <Link to="/index">
                <img src="http://satyr.io/50x50/black" alt="" /> 
                Crime Show 
                <img src="http://satyr.io/50x50/black" alt="" />
            </Link>
            
        </h1>
    );
};

export default Logo;