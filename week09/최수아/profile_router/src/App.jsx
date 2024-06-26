import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Mbti from './pages/Mbti'
import Likes from './pages/Likes'
import Cats from './pages/Cats'
import Cat from './pages/Cat'
import Layout from './layout'
import NotFound from './pages/NotFound'
import React from 'react';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/mbti' element={<Mbti />} />
          <Route path='/likes/:dataname' element={<Likes />} />
          <Route path='/cats' element={<Cats />}>
            <Route path=':id' element={<Cat />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
