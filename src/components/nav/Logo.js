import React from 'react';
import { Link } from "react-router-dom";

import classes from './Logo.module.css'

const Logo = props => {
    return (
        <h1 className={classes.logo}>
            
            <Link to="/index">
                <img src="images/icons/lisa_icon.png" alt="Lisa Copper" /> 
                Crime Show 
                <img src="images/icons/franklin_icon.png" alt="Franklin Fuzz" />
            </Link>
            
        </h1>
    );
};

export default Logo;