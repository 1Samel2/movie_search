import styled from 'styled-components'

export const Container = styled.main`
background-color: #1b1b1c;
width: 100%;
min-height: 100vh;
`

export const Title = styled.h1`
text-align: center;
color: white;
padding: 30px;
word-wrap: break-word;

@media(max-width: 800px) {
    font-size: 20px;
}
`
