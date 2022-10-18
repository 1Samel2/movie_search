import React, { createContext, useContext, useState,  } from 'react'

import PropTypes from 'prop-types'

const UserContext = createContext({})

export const SearchProvider = ({ children }) => {

    const [search, setSearch] = useState("");
 
    return (
        <UserContext.Provider value={{ search,  }}>
            {children}
        </UserContext.Provider>
    )
}


export const useSearch = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('Search Error')
    }
}

SearchProvider.propTypes = {
    children: PropTypes.string
}