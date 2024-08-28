import React from 'react'
import Navbar from '../components/Home/Navbar'
import Main from '../components/Product/Main'
import RelatedProduct from '../components/Product/RelatedProduct'
import Footer from '../components/Home/Footer'
import Copyright from '../components/Home/Copyright'

const Product = () => {
  return (
    <>
      <Navbar />
      <Main />
      <RelatedProduct />
      <Footer />
      <Copyright />
    </>
  )
}

export default Product