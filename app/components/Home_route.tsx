"use client"

// import dynamic from 'next/dynamic'
// import Footer from "./Footer"
import Hero from "../home/Hero"
import Middle from "../home/Middle"
// import Navbar from "./Navbar"

const Home_route = () => {
  return (
    <div id="/home">
      <Hero />
      <Middle />
    </div>
  )
}

export default Home_route