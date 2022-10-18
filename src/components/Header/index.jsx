import React from 'react'
import SearchMovie from '../SearchMovie'
import * as C from './styles'

const Header = () => {

    return (
        <C.Container>
            <C.Title><a href='/'>Lançamento</a></C.Title>
            <SearchMovie/> 
        </C.Container>
    )
}

export default Header