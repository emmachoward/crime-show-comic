import React from 'react';

import classes from './Comic.module.css'

const Comic = props => {
    const { comicData } = props;
    return (
        <>
            {comicData.map(comic =>
                <div className={classes.comic} key={comic.id}  id={comic.link}>
                    <h2>{comic.title}</h2>
                    <p>{comic.date}</p>
                    <img src="https://picsum.photos/500/2000" alt={comic.title} />
                </div>
            )}
            
        </>
    );
};

export default Comic;