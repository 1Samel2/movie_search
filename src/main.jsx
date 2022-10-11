import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header'
import Home from './Home'
import Details from './DetailsMovie'
import Search from './components/MovieSearch'
import GlobalStyle from './GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Details />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
)
