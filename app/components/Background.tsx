"use client"
import Image from "next/image";
import home_background from "../assets/home-page-banner.png";

const Background = () => {
  return (
    <header id="home"
        className="relative h-fit home-background-up">
        <Image 
          className="md:-mt-20 relative inset-0 z-0 h-full w-full object-cover"
          src={home_background} 
          alt="background_home"           
        />
        </header>
  )
}

export default Background