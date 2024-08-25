import React from 'react'
import Navbar from '../components/Home/Navbar'
import WishSection from '../components/Wishlist/WishSection'
import JustForYou from '../components/Wishlist/JustForYou'
import Footer from '../components/Home/Footer'
import Copyright from '../components/Home/Copyright'

const Wishlist = () => {
  return (
    <>
      <Navbar />
      <WishSection />
      <JustForYou />
      <Footer />
      <Copyright />
    </>
  )
}

export default Wishlist