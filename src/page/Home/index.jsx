import React, {useState, useEffect} from 'react'
import GridCardMovie from '../../components/GridCardMovie'
import Loader from '../../components/Loader'
import * as C from './styles'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setTopMovies(data.results)

  }

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
    getTopRatedMovies(topRatedUrl)
  }, [])


  return (
    <C.Container>
      <C.Title>Melhores filmes</C.Title>
      
      {topMovies.length > 0 &&
        topMovies.map((movie) =>
          <GridCardMovie key={movie.id} movie={movie} />
        )}
    </C.Container>
  )
}

export default Home 