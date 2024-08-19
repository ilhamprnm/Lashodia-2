import React from 'react'
import Navbar from "../components/Home/Navbar.jsx"
import Hero from "../components/Home/Hero.jsx"
import FlashSale from "../components/Home/FlashSale.jsx"
import Category from "../components/Home/Category.jsx"
import BestSelling from '../components/Home/BestSelling.jsx'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FlashSale />
      <Category />
      <BestSelling />
    </>
  )
}

export default Home