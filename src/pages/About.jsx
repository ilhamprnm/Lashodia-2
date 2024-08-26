import React from 'react'
import Navbar from '../components/Home/Navbar'
import Hero from '../components/About/Hero'
import Data from '../components/About/Data'
import Figures from '../components/About/Figures'
import Features from '../components/Home/Features'
import Footer from '../components/Home/Footer'
import Copyright from '../components/Home/Copyright'

const About = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      <Figures />
      <Features />
      <Footer />
      <Copyright />
    </>
  )
}

export default About