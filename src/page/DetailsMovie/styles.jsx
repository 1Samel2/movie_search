import styled from 'styled-components'

import { AiFillStar } from 'react-icons/ai'

export const Container = styled.section`
background-color: #1b1b1c;
width: 100%;
min-height: 100vh;
padding: 20px;
`

export const DivInform = styled.div`
 margin: 0 auto;
 padding-top: 20px;
 width: 400px;

 @media(max-width: 800px) {
    width: 100%;
    height: 100%; 
 }
`
export const Image = styled.img`
width: 100%;
height: 100%; 
`
export const H1 = styled.h1`
color: white;
text-align: center;
margin-top: 10px;
`
export const Star = styled(AiFillStar)`
color: white;
`

export const ParagraphStar = styled.p`
color: white;
font-weight: white;
display: flex;
align-items: center;
font-size: 20px;
margin: 20px auto;

`
export const DivContent = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
padding-top: 20px;
width: 400px;
svg{
    margin-right: 15px;
}

@media(max-width: 800px) {
    width: 100%;
 }
`

export const Info = styled.p`
color: white;
font-weight: white;
display: flex;
align-items: center;
font-size: 20px;

`
export const Value = styled.p`
color: white;
word-break: break-all;
padding-top: 10px;
padding-bottom: 20px;
`