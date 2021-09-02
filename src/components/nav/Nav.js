import React from 'react';

import classes from './Nav.module.css'

const Nav = props => {
    return (
        <div>
            <ul>
                <li><a href="#"><img src="http://satyr.io/50x50/black" /><br />Menu</a></li>
                <li><a href="#"><img src="http://satyr.io/50x50/black" /><br />Index</a></li>
                <li><a href="#"><img src="http://satyr.io/50x50/black" /><br />Search</a></li>
                <li><a href="#"><img src="http://satyr.io/50x50/black" /><br />Prev</a></li>
                <li><a href="#"><img src="http://satyr.io/50x50/black" /><br />Next</a></li>
            </ul>
        </div>
    );
};

export default Nav;