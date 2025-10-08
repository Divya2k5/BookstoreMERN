import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Deletebook from './pages/Deletebook';
import Editbook from './pages/Editbook';
import Showbook from './pages/Showbook';
import Createbook from './pages/Createbook'
const App = () => {
  return (
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/sample/delete/:id'element={<Deletebook/>}/>
      <Route path='/sample/Edit/:id'element={<Editbook/>}/>
      <Route path='/sample/show/:id'element={<Showbook/>}/>
      <Route path='/sample/create/'element={<Createbook/>}/>
    </Routes>
  )
}

export default App