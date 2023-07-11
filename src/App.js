import React from 'react';
import './App.css';
import Headers from './Header/Headers';
import Users from './Header/Users';

function App() {
  return (
    <>
     <div className="splitheader">
      <div className="firstheaders">
        <Headers/>
        <Users/>
      </div>
      <div className="sedcondparst">
        Second part.
      </div>
     </div>
    </>
  );
}

export default App;
