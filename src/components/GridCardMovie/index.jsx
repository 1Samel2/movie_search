import React from 'react'
import * as C from './styles'
const GridCardMovie = () => {
  return (
    <section>
      <C.Title>Lista de filmes:</C.Title>

      <C.ContainerCard>
        <C.ContainerContent>
          <C.ImgMovie src="https://miro.medium.com/max/1400/1*AIMRcE2kVKCFlx8vVSrU9w.jpeg" alt='' />
        </C.ContainerContent>
        <C.ContainerContent>
          <C.ImgMovie src="https://miro.medium.com/max/1400/1*AIMRcE2kVKCFlx8vVSrU9w.jpeg" alt='' />
        </C.ContainerContent>
        <C.ContainerContent>
          <C.ImgMovie src="https://miro.medium.com/max/1400/1*AIMRcE2kVKCFlx8vVSrU9w.jpeg" alt='' />
        </C.ContainerContent>
      </C.ContainerCard>
    </section>
  )
}

export default GridCardMovie