import React from 'react'
import Navbar from "../components/Home/Navbar.jsx"
import Hero from "../components/Home/Hero.jsx"
import FlashSale from "../components/Home/FlashSale.jsx"
import Category from "../components/Home/Category.jsx"
import BestSelling from '../components/Home/BestSelling.jsx'
import Ads from '../components/Home/Ads.jsx'
import OurProducts from '../components/Home/OurProducts.jsx'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FlashSale />
      <Category />
      <BestSelling />
      <Ads />
      <OurProducts />
    </>
  )
}

export default Home