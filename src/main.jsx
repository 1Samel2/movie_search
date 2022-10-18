import { Suspense } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './routes'
import GlobalStyle from './GlobalStyles'
import Loader from './components/Loader'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*   <Suspense fallback={Loader}> */}
    <Routes />
    {/*     </Suspense> */}
    <GlobalStyle />
  </React.StrictMode>
)
