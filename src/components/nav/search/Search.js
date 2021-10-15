import React, { useState , useEffect} from 'react';
import { HashLink } from 'react-router-hash-link';

import classes from './Search.module.css'

const Search = (props) => {
    const { comicData } = props;
    const [enteredSearch, setEnteredSearch] = useState('');
    const [comicsList, setComicsList] = useState([]);

    useEffect(() => {
        
        if (enteredSearch.trim() !== '') {
            setComicsList(comicData.filter(
            (comics) => comics.title.toLowerCase().indexOf(enteredSearch.toLowerCase().trim()) !== -1));
        } else {
            setComicsList([]);
        };
    }, [enteredSearch, comicData]);


    // const filterComics = (comics, query) => {
    //     //console.log(comics);
    //     if (query.trim() === '') {
    //         return [];
    //     }
    //     return comics.filter(
    //         comic => comic.title.toLowerCase().indexOf(query.toLowerCase().trim()) !== -1);
    // }

    const searchChangeHandler = (event) => {
        setEnteredSearch(event.target.value)
        if (enteredSearch.trim() === '') {
            setComicsList([]);
        } else {
            setComicsList(comicData);
        }
        //console.log(enteredSearch);
        //setComicsList(filterComics(comicData, enteredSearch));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        //console.log(enteredSearch);
        //setComicsList(filterComics(comicData, enteredSearch));
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
                <input type="submit" value="Search" onChange={searchChangeHandler} />
            </form>
            <ul>
                {comicsList.map(comic =>
                    <li key={comic.id}>
                        <HashLink to={`/comics#${comic.link}`}>
                            {comic.title}
                        </HashLink>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Search;