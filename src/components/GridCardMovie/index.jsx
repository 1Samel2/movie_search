import React, { useEffect, useState } from 'react'
import * as C from './styles'

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

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
            <C.ImgMovie src="https://miro.medium.com/max/1400/1*AIMRcE2kVKCFlx8vVSrU9w.jpeg" alt='' />

            <C.TitleCard>{movie.title}</C.TitleCard>

            <C.Star>Star</C.Star>
            <C.ButtonDetails type="button">Detalhes</C.ButtonDetails>
          </C.ContainerContent>
        )}
      </C.ContainerCard>
    </section>
  )
}

export default GridCardMovie