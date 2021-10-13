import React from 'react';
import { NavLink, BrowserRouter } from "react-router-dom";

import Comic from '../../comics/Comic';
import About from '../../about/About';

import classes from './Sidebar.module.css'

const Sidebar = (props) => {
    const { comicData } = props;

    return (
        <nav className={classes.sidebar}>
            <ul>
                <li>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/comics'>
                        Comics
                    </NavLink>
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
    );
};

export default Sidebar;