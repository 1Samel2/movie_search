import styled from 'styled-components'

export const Title = styled.h1`
text-align: center;
color: white;
padding: 30px;
`

export const ContainerCard = styled.div`
  justify-content: center;
  gap: 20px;
  display: grid;
  grid-template-columns: 400px 400px 400px;


  @media(max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
}
`

export const ContainerContent = styled.div`

`

export const ImgMovie = styled.img`
height: 100%;
width: 100%;
`