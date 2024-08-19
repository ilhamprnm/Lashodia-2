import React from 'react'
import Navbar from "../components/Home/Navbar.jsx"
import Hero from "../components/Home/Hero.jsx"
import FlashSale from "../components/Home/FlashSale.jsx"
import Category from "../components/Home/Category.jsx"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FlashSale />
      <Category />
    </>
  )
}

export default Home