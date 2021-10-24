import React, { useState, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import classes from './App.module.css'

import Nav from './components/nav/Nav';
import Comic from './components/comics/Comic';
import About from './components/about/About';
import { SidebarContext } from './context/Sidebar-context'
import { Route, Switch, Redirect } from "react-router-dom";



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
        <Switch>
          <Route path="/" exact>
            <Redirect to="/comics" />
          </Route>
          <Route path="/index">
            <Redirect to="/comics" />
          </Route>
          <Route path="/comics">
            <Comic comicData={staticComicData} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
