"use client";
import Image from "next/image";
import home_background from "../assets/home-page-banner.png";
import "./Hero.css";
// import { useMediaQuery } from "@react-hook/media-query";
// import { Lilita_One } from "next/font/google";

const Hero = () => {
  // const isMobile = useMediaQuery(`(max-width:768px)`)
  return (
    <header id="home" className="-mt-2 relative overflow-hidden">
      {/* Mobile view */}
      <div className="">
        <Image className="md:hidden block" src={home_background} alt="" />
      </div>

      {/* Desktop view */}
      <div>
        <Image
          src={home_background}
          alt="background_home"
          layout="fill"
          // objectFit="cover"
          style={{ objectFit: "cover" }}
          className="hidden md:inline-block inset-0 relative z-0 h-full w-full object-cover"
        />
      </div>

      {/* {isMobile ? (
        <Image 
          src={home_background}
          alt="background_home" 
          objectFit="cover"
          layout="fill"/> ) : (
        <Image
          src={home_background}
          alt="background_home"
          layout="fill"
          objectFit="cover"
          className="inset-0 relative z-0 h-full w-full object-cover"
        />
      )} */}
      {/* Text content */}
      <div className="hidden relative flex justify-col max-w-[1400px] mx-auto items-center h-full w-[82%] max-md:flex-col 
      md:mb-24 mb-6">
        <div className="flex flex-col text-justify justify-center text-black flex-1 
        max-md:order-2 max-md:text-center">
          <h2 className="font-semibold md:text-4xl text-2xl mb-2 md:mt-14 mt-6">
            People. Change. Development.
          </h2>
          <span className="avenir-lt text-md md:w-1/2 mb-5 md:mt-8 mt-4">
            Kandha&apos;s only objective is to help people and organizations successfully adapt to change - whatever the change entails.
          </span>
          <span className="avenir-lt md:w-1/2 mb-5">  {/* font-light  */}
            Kandha harnesses the strengths of a hybrid team comprising of proficient independent consultants and adept in-house partners and analysts to offer clients prompt, comprehensive insights and enduring solutions for their most crucial business concerns, ranging from strategic matters to transformational undertakings.
          </span>
          <span className="avenir-lt md:w-1/2">
            We believe in meeting the client where they are. This is what helps us provide comprehensive solutions to achieve tangible, just-in-time results.
          </span>
        </div>
      </div>

      <div className="relative flex justify-col max-w-[1400px] mx-auto items-center h-full w-[82%] max-md:flex-col 
      md:mb-24 mb-6">
        <div className="flex flex-col text-justify justify-center text-black flex-1 
        max-md:order-2 max-md:text-center">
          <h2 className="font-semibold md:text-4xl text-xl mb-2 md:mt-14 mt-6 whitespace-nowrap">
            People. Change. Development.
          </h2>
          <span className="avenir-lt text-md md:w-1/2 mb-5 md:mt-8 mt-4">
            Kandha&apos;s only objective is to help people and organizations successfully adapt to change - whatever the change entails.
          </span>
          <span className="avenir-lt md:w-1/2 mb-5">  {/* font-light  */}
            Kandha harnesses the strengths of a hybrid team comprising of proficient independent consultants and adept in-house partners and analysts to offer clients prompt, comprehensive insights and enduring solutions for their most crucial business concerns, ranging from strategic matters to transformational undertakings.
          </span>
          <span className="avenir-lt md:w-1/2">
            We believe in meeting the client where they are. This is what helps us provide comprehensive solutions to achieve tangible, just-in-time results.
          </span>
        </div>
      </div>
      <div className="line-gradient relative inset-x-0 bottom-0 w-full md:h-2 h-1"></div>
    </header>

  );
};

export default Hero;
