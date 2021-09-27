import React, { useState, useContext, useEffect } from 'react';

import classes from './App.module.css'

import Nav from './components/nav/Nav';
import Comic from './components/comics/Comic';
import { SidebarContext } from './context/Sidebar-context'



function App() {
  const ctx = useContext(SidebarContext);
  const [staticComicData, setStaticComicData] = useState([]);

  useEffect(() => {
    fetch("data/comicData.json")
      .then(response => response.json())
      .then(data => { 
        setStaticComicData(data);
      })
      .catch(err =>{ console.error(err => console.error(err))}); 
    }, []);


  return (
    
    <div className={classes.App}>
      <Nav comicData={staticComicData} />
      <div className={ctx.displaySidebar ? classes.desktopSidebarWrapper : null}>
        <Comic comicData={staticComicData} />
      </div>
    </div>
  );
}

export default App;
