import React, { useState } from 'react';

export const SidebarContext = React.createContext({
    displaySidebar: true,
    toggleSidebar: () => {},
  });

  export const SidebarContextProvider = (props) => {
    const [displaySidebar, setDisplaySidebar] = useState(true);

    const toggleSidebarHandler = () => {
      setDisplaySidebar(!displaySidebar);
  };

  return (
    <SidebarContext.Provider value={{
      displaySidebar: displaySidebar,
      toggleSidebar: toggleSidebarHandler,
    }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
  };
export default SidebarContext;