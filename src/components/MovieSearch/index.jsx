import React from 'react'
import * as C from './styles'
const MovieSearch = () => {
    return (
        <C.Container>
            <C.InputSearch placeholder="Search movie" />
            <C.Button type="button"><C.SearchImg /></C.Button>
        </C.Container>
    )
}

export default MovieSearch