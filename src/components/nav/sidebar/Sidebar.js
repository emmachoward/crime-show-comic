import React from 'react';
import MediaQuery from 'react-responsive'

import classes from './Sidebar.module.css'

const Sidebar = (props) => {
    const { comicData } = props;

    return (
        <>
        <div className={classes.sidebar}>
            <ol>
            {comicData.map(comic =>
                <li key={comic.id}>
                    {comic.title}
                </li>
            )}
            </ol>
        </div>
        </>
    );
};

export default Sidebar;