import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
} from "react-icons/bs";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imagesURL = import.meta.env.VITE_IMG;

import * as C from './styles'

const DetailsMovie = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const getMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovie(data)
    }

    const formatCurrency = (number) => {
        return number.toLocaleStrig("en-US", {
            style: "currency",
            currency: "USD",
        })
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`
        getMovie(movieUrl)
        console.log(movieUrl)
    }, [])

    return (

        <C.Container >
            {movie && (
                <>
                    <C.DivInform>
                        <img src={imagesURL + movie.poster_path} alt={movie.title} />
                        <C.H1>{movie.tagline}</C.H1>
                        <p>Star</p>
                        <p>description</p>
                    </C.DivInform>

                    <div>
                        <p><BsWallet2 />Orçamento:</p>
                      {/*   <p>{formatCurrency(movie.budget)}</p> */}
                        <p><BsGraphUp />Receita:</p>
                        {/* <p>{formatCurrency(movie.revenue)}</p> */}
                        <p><BsHourglassSplit />Duração:</p>
                       {/*  <p>{movie.runtime} minutos</p> */}
                        <p><BsFillFileEarmarkTextFill />Descrição:</p>
                      {/*   <p>{movie.overview}</p> */}
                    </div>
                </>
            )}
        </C.Container>
    )
}

export default DetailsMovie