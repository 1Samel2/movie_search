import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* import App from './page/App' */
import Header from './components/Header'
import Home from './page/Home'
import Details from './page/DetailsMovie'
import Search from './page/SearchResult'
import GlobalStyle from './GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Details />} />         
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
)
