import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home'
import Search from "./components/MovieSearch"
import GlobalStyle from './GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
)
