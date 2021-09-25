import React from 'react';

import classes from './Comic.module.css'

const Comic = props => {
    const { comicData } = props;
    return (
        <div className={classes.comic}>
            {comicData.map(comic =>
                <div key={comic.id}>
                    <h2>{comic.title}</h2>
                    <p>{comic.date}</p>
                    <img src="https://picsum.photos/500/2000" alt={comic.title} />
                </div>
            )}
            
        </div>
    );
};

export default Comic;