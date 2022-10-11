import React from 'react'
import { Link } from 'react-router-dom'
import MovieSearch from '../MovieSearch'
import * as C from './styles'
const Header = () => {

    return (
        <C.Container>
          <C.Title><a href='/'>Lançamento</a></C.Title>
            <MovieSearch />
        </C.Container>
    )
}

export default Header