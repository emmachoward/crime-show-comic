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

                    <img src={`images/comics/${comic.image}`} 
                    onError={(e)=>{e.target.onerror = null; 
                    e.target.src="images/comics/not_released.png"}} 
                    alt={comic.title} /> 
                    {/* Uses filler image when there's no matching image in the folder */}
                </div>
            )}
            
        </>
    );
};

export default Comic;