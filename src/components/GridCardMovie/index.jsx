import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import * as C from './styles'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const imagesURL = import.meta.env.VITE_IMG;

const GridCardMovie = () => {

  const [topMovies, setTopMovies] = useState([])
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setTopMovies(data.results)
  }

  console.log(topMovies)

  useEffect(() => {
    const topRateUrl = `${moviesURL}top_rated?${apiKey}`
    getTopRatedMovies(topRateUrl)

  }, [])

  return (
    <section>
      <C.Title>Lista de filmes:</C.Title>
      <C.ContainerCard>
        {topMovies.lenght === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) =>
          <C.ContainerContent key={movie.id}>
            <C.ImgMovie src={imagesURL + movie.poster_path} alt={movie.title} />
            <C.TitleCard>{movie.title}</C.TitleCard>
            <C.Star>
              <FaStar /> {movie.vote_average}
            </C.Star>
            <Link to={`/movie/${movie.id}`}>Detalhes</Link>
          </C.ContainerContent>
        )}
      </C.ContainerCard>
    </section>
  )
}

export default GridCardMovie