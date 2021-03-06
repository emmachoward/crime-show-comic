import React from 'react';
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

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
                    </li>
                    <ol>
                        {comicData.map(comic =>
                            <li key={comic.id}>
                                <HashLink to={`/comics#${comic.link}`}>
                                    {comic.title}
                                </HashLink>
                            </li>
                            
                        )}
                    </ol>
                
                <li>
                    <NavLink to='/contact'>
                        Contact
                    </NavLink>
                </li>
            </ul>
            <br /><br /><br /><br />
        </nav>
    );
};

export default Sidebar;