import styled from 'styled-components'


export const Container = styled.header`
display: flex;
justify-content: space-between;
padding: 2rem 8rem;
background-color: #000;
position: relative;


@media(max-width: 800px) {
    padding: 1rem 4rem;
    align-items: center;
    gap: 20px;
    padding: 1rem;
}

`

export const Title = styled.h2`
color: white;

a{
    text-decoration: none;
    color: white;
}
`

