import React, { useState } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Drawer from './components/Drawer';

function App() {
  const [isDrawerOpen, setDrawer] = useState(false);
  const toggleDrawer = (drawerStatus) => {
    setDrawer(drawerStatus);
  };
  return (
    <>
      <TopBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}

export default App;
