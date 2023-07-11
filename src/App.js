import React from 'react';
import './App.css';
import Headers from './Header/Headers';
import Users from './Header/Users';
import Songs from './Header/Songs';
import SOND from './Second/SOND';

function App() {
  return (
    <>
     <div className="splitheader fixed top-0 left-0 w-full h-full flex items-start justify-between">
      <div className="firstheaders w-full h-full max-w-[400px]">
        <Headers/>
        <Users/>
        <Songs/>
      </div>
      <div className="sedcondparst w-full h-full">
        <SOND/>
      </div>
     </div>
    </>
  );
}

export default App;
