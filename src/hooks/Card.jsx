import React, { createContext, useContext, useState,  useEffect} from 'react'

import PropTypes from 'prop-types'

const UserContext = createContext({})

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

export const CardProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
        setLoading(false)
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
        getTopRatedMovies(topRatedUrl)
    }, [])


    return (
        <UserContext.Provider value={{ topMovies, loading}}>
            {children}
        </UserContext.Provider>
    )
}


export const useCard = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('Search Error')
    }
}

CardProvider.propTypes = {
    children: PropTypes.node,
   
}