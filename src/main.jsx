import { Suspense } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes'
import GlobalStyle from './GlobalStyles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Routes />
    <GlobalStyle />
  </React.StrictMode>
)
