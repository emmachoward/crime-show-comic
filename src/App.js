import React, { useContext } from 'react';

import classes from './App.module.css'

import Nav from './components/nav/Nav';
import Comic from './components/comics/Comic';
import { SidebarContext } from './context/Sidebar-context'



function App() {

  const ctx = useContext(SidebarContext);

  return (
    
    <div className={classes.App}>
      <Nav />
      <div className={ctx.displaySidebar ? classes.desktopSidebarWrapper : null}>
        <Comic />
        <Comic />
        <Comic />
      </div>
    </div>
  );
}

export default App;
