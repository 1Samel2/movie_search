import React from 'react'
import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import * as C from './styles'

const imagesURL = import.meta.env.VITE_IMG;

const GridCardMovie = ({ movie, showLink = true }) => {

  return (
      <C.ContainerCard>

        <C.ContainerContent>
          <C.ImgMovie src={imagesURL + movie.poster_path} alt={movie.title} />
          <C.TitleCard>{movie.title}</C.TitleCard>
          <C.Star>
            <FaStar /> {movie.vote_average}
          </C.Star>
          {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </C.ContainerContent>
        
      </C.ContainerCard>
  )
}

export default GridCardMovie