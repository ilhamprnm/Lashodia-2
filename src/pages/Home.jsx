import React from 'react'
import Navbar from "../components/Navbar.jsx"
import Hero from "../components/Hero.jsx"
import FlashSale from "../components/FlashSale.jsx"
import Category from "../components/Category.jsx"

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