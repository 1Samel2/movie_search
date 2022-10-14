import styled from 'styled-components'

import { AiFillStar } from 'react-icons/ai'

export const Container = styled.section`
background-color: #1b1b1c;
width: 100%;
min-height: 100vh;
`

export const DivInform = styled.div`
 margin: 0 auto;
 padding-top: 20px;
 width: 400px;
`
export const Image = styled.img`
width: 100%;
height: 100%; 
`
export const H1 = styled.h1`
color: white;
`
export const Star = styled(AiFillStar)`
color: white;
`

export const DivContent = styled.div`
width: 400px;
margin: 0 auto;
padding-top: 20px;

svg{
    margin-right: 15px;
}
`

export const Info = styled.p`
color: white;
font-weight: white;
display: flex;
align-items: center;

`
export const Value = styled.p`
color: white;
word-break: break-all;
padding-top: 10px;
padding-bottom: 20px;
`