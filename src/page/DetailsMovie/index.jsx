import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader'
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill,
} from "react-icons/bs"


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imagesURL = import.meta.env.VITE_IMG;

import * as C from './styles'

const DetailsMovie = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(true)



    const getMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovie(data)
        setLoading(false)
    }
    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`
        getMovie(movieUrl)
    }, [])

    return (

        <C.Container >
            {loading && <Loader />}
            {movie && (
                <>
                    <C.DivInform>
                        <C.Image src={imagesURL + movie.poster_path} alt={movie.title} />
                        <C.H1>{movie.original_title}</C.H1>
                        <C.ParagraphStar><C.Star />{movie.vote_average}</C.ParagraphStar>
                        <C.Info>{movie.tagline}</C.Info>
                    </C.DivInform>

                    <C.DivContent>
                        <C.Info><BsWallet2 />Orçamento:</C.Info>
                        <C.Value>{formatCurrency(movie.budget)}</C.Value>
                        <C.Info><BsGraphUp />Receita:</C.Info>
                        <C.Value>{formatCurrency(movie.revenue)}</C.Value>
                        <C.Info><BsHourglassSplit />Duração:</C.Info>
                        <C.Value>{movie.runtime} minutos</C.Value>
                        <C.Info><BsFillFileEarmarkTextFill />Descrição:</C.Info>
                        <C.Value>{movie.overview}</C.Value>
                    </C.DivContent>
                </>
            )}
        </C.Container>
    )
}

export default DetailsMovie