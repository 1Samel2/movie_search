import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import * as C from './styles'
const SearchMovie = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!search) return;
  
      navigate(`/search?q=${search}`);
      setSearch("");
    }


    return (
        <C.DivSearch onSubmit={handleSubmit}>
            <C.InputSearch placeholder="Search movie" onChange={(e) => setSearch(e.target.value)}
                value={search} />
            <C.Button type="submit"><C.SearchImg /></C.Button>
        </C.DivSearch>
    )
}

export default SearchMovie