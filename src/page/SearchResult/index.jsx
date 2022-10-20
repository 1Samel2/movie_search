import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import GridCardMovie from '../../components/GridCardMovie'
const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY
import * as C from './styles'

const SearchResult = () => {
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")

  const getSearchMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setMovies(data.results)
  }

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`
    getSearchMovies(searchWithQueryURL)
  }, [query])

  return (
    <C.Container>
       <C.Title>Resultados encontrados: {query}</C.Title>
        {movies.length > 0 &&
          movies.map((movie) => <GridCardMovie key={movie.id} movie={movie} />
          )} 
    </C.Container>
  )
}

export default SearchResult 