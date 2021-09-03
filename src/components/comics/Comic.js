import React from 'react';

import classes from './Comic.module.css'

const Comic = props => {
    return (
        <div className={classes.comic}>
            <h2>Comic Title</h2>
            <p>Date Published</p>
            <img src="https://picsum.photos/id/1/500/2000" />
        </div>
    );
};

export default Comic;