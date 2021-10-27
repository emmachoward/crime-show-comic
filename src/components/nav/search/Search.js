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

    const searchChangeHandler = (event) => {
        setEnteredSearch(event.target.value)
        if (enteredSearch.trim() === '') {
            setComicsList([]);
        } else {
            setComicsList(comicData);
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
    };

    return (
        <>
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
                <br /><br /><br /><br />
            </div>
        </>
    );
};

export default Search;