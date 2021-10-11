import React from 'react';
import { Route, Switch, Redirect, NavLink, Link, Router } from "react-router-dom";

import classes from './Sidebar.module.css'

const Sidebar = (props) => {
    const { comicData } = props;

    return (
        <Router>
            <nav className={classes.sidebar}>
                <ul>
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/comics'>
                            Comics
                        </Link>
                        <ol>
                            {comicData.map(comic =>
                                <li key={comic.id}>
                                    {comic.title}
                                </li>
                            )}
                        </ol>
                    </li>
                </ul>

                
            </nav>
        </Router>
    );
};

export default Sidebar;