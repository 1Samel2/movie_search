import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as C from './styles'

const MovieSearch = () => {
    const [search, setSearch] = useState("");
/* const navigate = useNavigate()  */

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;

        navigate(`/search?q=${search}`);
        setSearch("");
    };
    console.log(search)

    return (
        <C.Container onSubmit={handleSubmit}>
            <C.InputSearch placeholder="Search movie" value={search} onChange={(e) => setSearch(e.target.value)} />
            <C.Button type="submit"><C.SearchImg /></C.Button>
        </C.Container>
    )
}

export default MovieSearch