import styled from 'styled-components'

import {BsSearch} from 'react-icons/bs'

export const Container = styled.div`
background-color: #1b1b1c;
padding: 10px;
border-radius: 8px;
align-items: center;
/* display: flex; */
`

export const SearchImg = styled(BsSearch)`
color: white;
`

export const InputSearch = styled.input`
border: none;
background: none;
box-shadow: none;
color: white;

&::placeholder{
    color: white;
}

&:focus, input:focus {
    box-shadow: 0 0 0 0;padding: 2rem 8rem;
    outline: 0;
}
`
export const Button = styled.button`
border: none;
background: none;
cursor: pointer;
padding-left: 10px;
height: 0;
`