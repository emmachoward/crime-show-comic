import React, { useState } from 'react';

import classes from './Search.module.css'

const Search = (props) => {
    const { comicData } = props;
    const [enteredSearch, setEnteredSearch] = useState('');
    const [comicsList, setComicsList] = useState(comicData);

    const filterComics = (comics, query) => {
        console.log(comics);
        return comics.filter(
            comic => comic.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }

    const searchChangeHandler = (event) => {
        setEnteredSearch(event.target.value)
        console.log(enteredSearch);
        setComicsList(filterComics(comicsList, enteredSearch));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(enteredSearch);
        setComicsList(filterComics(comicsList, enteredSearch));
    };

    return (
        <div className={classes.search}>
            <form onSubmit={submitHandler}>
                <label htmlFor="search">Search:</label>
                <input 
                    type="text" 
                    placeholder="Comic Title" 
                    id="search" 
                    name="search"
                    value={enteredSearch}
                    onChange={searchChangeHandler}
                />
                <input type="submit" value="Search" />
            </form>
            <ul>
                {comicsList.map(comic => (
                    <li key={comic.id}>
                        {comic.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;