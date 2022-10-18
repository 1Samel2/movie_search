import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './page/Home'
import Details from './page/DetailsMovie'
import Search from './page/SearchResult'
import Header from "./App";

function conexãoEntrePages() {

    return (

        <Router>
            <Routes>
                <Route element={<Header />}>
                    <Route path="/" element={<Home />} />
                    <Route path="movie/:id" element={<Details />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default conexãoEntrePages;