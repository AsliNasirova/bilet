import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import BasketProvider from './Context/BasketContext.jsx'
import WishlistProvider from './Context/WishlistContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BasketProvider>
        <WishlistProvider>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </WishlistProvider>
      </BasketProvider>

    </BrowserRouter>

  </React.StrictMode>,
)
