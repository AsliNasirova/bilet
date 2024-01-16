import React from 'react'
import { Helmet } from 'react-helmet-async'
import Header from '../../Components/Header/header'
import Product from '../../Components/ProductSection/product'

function Home() {
  return (
    <>
    <Helmet>
        <title>Home Page</title>
    </Helmet>
    <div>
      <Header/>
      <Product/>
    </div>
    </>
  )
}

export default Home
