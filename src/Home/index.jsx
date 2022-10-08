import React from 'react'
import Header from '../components/Header'
import GridCardMovie from '../components/GridCardMovie'
import * as C from './styles'
const home = () => {
  return (
    <C.Container>
      <Header />
      <GridCardMovie />
    </C.Container>
  )
}

export default home