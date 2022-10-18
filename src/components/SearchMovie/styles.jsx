import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'

export const DivSearch = styled.form`
background-color: #1b1b1c;
padding: 10px;
border-radius: 8px;
align-items: center;

@media(max-width: 800px) {
   
    
}
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
    box-shadow: 0 0 0 0;
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