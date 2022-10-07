import React from 'react'
import MovieSearch from '../MovieSearch'
import * as C from './styles'
const Header = () => {
    return (
        <C.Container>
            <C.Title>Lançamento</C.Title>
            <MovieSearch />
        </C.Container>
    )
}

export default Header