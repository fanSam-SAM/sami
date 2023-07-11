import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Conn } from './Conn'
import Home from './Page/Home'

function SOND() {
  return (
    <>
     <Conn.Provider value={{}}>
        <BrowserRouter>
        <Routes>
            <Route path='/*' element={<Home/>}/>
        </Routes>
        </BrowserRouter>
     </Conn.Provider>
    </>
  )
}

export default SOND
