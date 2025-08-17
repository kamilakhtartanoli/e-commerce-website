import React from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Category from './Category.jsx'
import Latestcollection from './Latestcollection.jsx'
import Footer from '../pages/Footer.jsx'
import Services from './Services.jsx'


const Home = () => {
  return<>
  <Navbar />
  <Hero />
  <Category />
  <Latestcollection />
  <Services />
  <Footer />
  </>
}

export default Home