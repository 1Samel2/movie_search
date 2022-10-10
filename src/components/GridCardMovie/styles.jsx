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
    margin: 10px;
}
`

export const ContainerContent = styled.div`
 display: flex;
 flex-direction: column;
 background-color: black;
 padding: 10px;
 gap: 20px;
`

export const ImgMovie = styled.img`
height: 100%;
width: 100%;
`

export const TitleCard = styled.p`
color: white;
`

export const Star = styled.p`
color: white;
`

export const ButtonDetails = styled.button`
height: 50px;
border: none;
background: #540F12;
color: white;
border-radius: 8px;
margin-bottom: 10px;
cursor: pointer;
`