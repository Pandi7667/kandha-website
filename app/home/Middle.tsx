"use client"
import "./Hero.css";
import icon1 from "../assets/01.png";
import icon2 from "../assets/04.png";
import icon3 from "../assets/03.png";
import icon4 from "../assets/02.png";
import icon5 from "../assets/05.png";
import Image from "next/image";
import hws_01 from "../assets/hws_01.png";
import hws_02 from "../assets/hws_02.png";
import hws_03 from "../assets/hws_03.png";
import hws_04 from "../assets/hws_04.png";
import hws_05 from "../assets/hws_05.png";
import award_01 from "../assets/award_01.png";
import award_02 from "../assets/award_02.png";
import award_03 from "../assets/award_03.png";
import award_04 from "../assets/award_04.png";
import award_bg from "../assets/award_bg.png"

const Middle = () => {
  return (
    <div className="">
      {/* WHAT WE SOLVE */}
      <div>
        <div className="md:flex md:grid md:grid-cols-3 mt-16 md:gap-28 max-w-[1400px] mx-auto items-center h-full w-[82%] max-md:flex-col md:mb-24">
          <div className="relative text-center text-black text-3xl">
            {/* Span for Desktop View */}
            <span className="sen-bold text-left hidden md:inline-block">
              WHAT WE <br />
              <span className="mr-10">SOLVE <br /> </span>
            </span>

            {/* Text for Mobile View */}
            <span className="block md:hidden sen-bold text-2xl mb-2">
              WHAT WE SOLVE
            </span>
            <div className="flex justify-center">
              <hr className="w-36 h-px border-black" />
            </div>

          </div>
          <div className="p-10 mt-10 md:mt-0 md:p-0">
            <div className="flex justify-center items-center text-center text-black border-[1px] border-[#633c2b] rounded-xl md:p-10 p-8 relative">
              <span className="sen-bold pt-5 pb-5">
                PROJECT/PROGRAM <br />
                MANAGEMENT NEEDS
              </span>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center">
                  <Image src={icon1} alt="Icon 1" className="w-16 h-16" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 md:mt-0 mt-20 md:p-0">
            <div className="flex md:mt-0 -mt-24 justify-center items-center text-center text-black border-[1px] border-[#633c2b] rounded-xl md:p-7 p-7 relative">
              <span className="sen-bold hidden mt-5 mb-5 md:inline-block">
                CHANGE <br />
                MANAGEMENT <br />
                REQUIREMENTS
              </span>
              <span className="block md:hidden sen-bold mt-5 mb-5">
                CHANGE
                MANAGEMENT <br />
                REQUIREMENTS

              </span>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center">
                  <Image src={icon2} alt="Icon 1" className="w-16 h-16" />
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="md:flex md:grid md:grid-cols-3 md:mt-10 md:gap-28 max-w-[1400px] mx-auto gap-y-10 items-center h-full w-[82%] max-md:flex-col md:mb-24">
          <div className="p-10 md:mt-0 mt-20 md:p-0">
            <div className="flex justify-center md:mt-0 -mt-24  items-center text-center text-black border-[1px] gap-y-10 border-[#633c2b] rounded-xl md:p-7 p-5 relative ">
              <span className="sen-bold hidden mt-7 mb-7 md:inline-block">
                RESKILLING / UPSKILLING <br />
                STRATEGIES
              </span>
              <span className="md:hidden mt-7 mb-7 sen-bold">
                RESKILLING / UPSKILLING <br />
                STRATEGIES
              </span>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center">
                  <Image src={icon3} alt="Icon 1" className="w-16 h-16" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 md:mt-0 mt-20 md:p-0">
            <div className="flex justify-center md:mt-0 -mt-24 items-center text-center text-black border-[1px] border-[#633c2b] rounded-xl  md:p-10 p-1 relative">
              <span className="hidden md:inline-block sen-bold mt-1 mb-1">
                WORKFORCE <br />
                STRUCTURING <br />
                INITIATIVES
              </span>
              <span className="md:hidden sen-bold pt-10 pb-10">
                WORKFORCE <br />
                STRUCTURING <br />
                INITIATIVES
              </span>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center">
                  <Image src={icon4} alt="Icon 1" className="w-16 h-16" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 md:mt-0 mt-20 mb-10 md:mb-0 md:p-0">
            <div className="md:mt-0 -mt-24 flex justify-center items-center text-center text-black border-[1px] border-[#633c2b] rounded-xl md:p-10 p-1 relative">
              <span className="hidden md:inline-block sen-bold mt-1 mb-1">
                DIGITAL SKILLING <br />
                STRATEGY <br />
                IMPLEMENTATION
              </span>
              <span className="md:hidden sen-bold mt-9 mb-9">
                DIGITAL SKILLING <br />
                STRATEGY <br />
                IMPLEMENTATION
              </span>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center">
                  <Image src={icon5} alt="Icon 1" className="w-16 h-16" />
                </div>
              </div>
            </div>
          </div>

<div className="p-10 md:mt-0 mt-20 mb-10 md:mb-0 md:p-0">
            <div className="md:mt-0 -mt-24 flex justify-center items-center text-center text-black border-[1px] border-[#633c2b] rounded-xl md:p-10 p-1 relative">
              <span className="hidden md:inline-block sen-bold mt-1 mb-1">
                SAP Migrations  <br />
                End-to-end SAP system migration support
              </span>
              <span className="md:hidden sen-bold mt-9 mb-9">
                SAP Migrations  <br />
                End-to-end SAP system migration support
              </span>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center">
                  <Image src={icon5} alt="Icon 1" className="w-16 h-16" />
                </div>
              </div>
            </div>
          </div>
<div className="p-10 md:mt-0 mt-20 mb-10 md:mb-0 md:p-0">
            <div className="md:mt-0 -mt-24 flex justify-center items-center text-center text-black border-[1px] border-[#633c2b] rounded-xl md:p-10 p-1 relative">
              <span className="hidden md:inline-block sen-bold mt-1 mb-1">
                Carve-Outs  <br />
                End-to-end SAP system migration support
              </span>
              <span className="md:hidden sen-bold mt-9 mb-9">
                Carve-Outs  <br />
                Seamless separations
              </span>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center">
                  <Image src={icon5} alt="Icon 1" className="w-16 h-16" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 md:mt-0 mt-20 mb-10 md:mb-0 md:p-0">
            <div className="md:mt-0 -mt-24 flex justify-center items-center text-center text-black border-[1px] border-[#633c2b] rounded-xl md:p-10 p-1 relative">
              <span className="hidden md:inline-block sen-bold mt-1 mb-1">
                Carve-Outs  <br />
                End-to-end SAP system migration support
              </span>
              <span className="md:hidden sen-bold mt-9 mb-9">
                Carve-Outs  <br />
                Seamless separations
              </span>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center">
                  <Image src={icon5} alt="Icon 1" className="w-16 h-16" />
                </div>
              </div>
            </div>
          </div>
<div className="p-10 md:mt-0 mt-20 mb-10 md:mb-0 md:p-0">
            <div className="md:mt-0 -mt-24 flex justify-center items-center text-center text-black border-[1px] border-[#633c2b] rounded-xl md:p-10 p-1 relative">
              <span className="hidden md:inline-block sen-bold mt-1 mb-1">
                Business Model Transformation  <br />
                Restructure for growthandagility
              </span>
              <span className="md:hidden sen-bold mt-9 mb-9">
                Business Model Transformation  <br />
                Restructure for growthandagility
              </span>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center">
                  <Image src={icon5} alt="Icon 1" className="w-16 h-16" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 md:mt-0 mt-20 mb-10 md:mb-0 md:p-0">
            <div className="md:mt-0 -mt-24 flex justify-center items-center text-center text-black border-[1px] border-[#633c2b] rounded-xl md:p-10 p-1 relative">
              <span className="hidden md:inline-block sen-bold mt-1 mb-1">
                SAP Add Ons  <br />
                SAP add-ons for various tax reporting obligations
              </span>
              <span className="md:hidden sen-bold mt-9 mb-9">
                SAP Add Ons  <br />
                SAP add-ons for various tax reporting obligations
              </span>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center">
                  <Image src={icon5} alt="Icon 1" className="w-16 h-16" />
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 md:mt-0 mt-20 mb-10 md:mb-0 md:p-0">
            <div className="md:mt-0 -mt-24 flex justify-center items-center text-center text-black border-[1px] border-[#633c2b] rounded-xl md:p-10 p-1 relative">
              <span className="hidden md:inline-block sen-bold mt-1 mb-1">
                SAP DRC  <br />
                DRCimplementations. Migrations, and Maintenance Support
              </span>
              <span className="md:hidden sen-bold mt-9 mb-9">
                SAP DRC  <br />
                DRCimplementations. Migrations, and Maintenance Support
              </span>
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 rounded-full bg-white flex justify-center items-center">
                  <Image src={icon5} alt="Icon 1" className="w-16 h-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW WE SOLVE */}
      <div className="bg-[#eeeeee]">
        <div className="flex ">
          <div className="md:flex md:grid md:grid-cols-3 md:gap-28 mt-14 max-w-[1400px] mx-auto items-center h-full w-[82%] max-md:flex-col md:mb-24">
            <div className="relative text-center text-black text-3xl">
              {/* Span for Desktop View */}
              <span className="sen-bold text-left hidden md:inline-block">
                HOW WE <br />
                <span className="mr-10">SOLVE <br /> </span>
              </span>

              {/* Text for Mobile View */}
              <span className="block md:hidden sen-bold text-2xl mb-2">
                HOW WE SOLVE
              </span>

               <div className="flex justify-center mb-16">
              <hr className="w-36 h-px border-black" />
            </div>
            </div>

            <div className="flex justify-center items-center text-center text-black border-black rounded-xl relative md:mb-0 mb-20">
              <Image src={hws_01} alt="" className="md:w-auto md:h-auto w-80 h-80" />
              <div className="transition  ease-in-out delay-150 absolute -bottom-10 transform hover:-translate-y-16 duration-300">
                <div className="w-60 h-20 rounded-2xl border-[1px] border-[#a87f6e] bg-white flex justify-center items-center">
                  <span className="sen-bold">SKILL / CULTURE  GAP <br />
                    ASSESSMENTS</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center text-center text-black border-black rounded-xl relative">
              <Image src={hws_02} alt="" className="md:w-auto md:h-auto w-80 h-80" />
              <div className="transition  ease-in-out delay-150 absolute -bottom-10 transform hover:-translate-y-16 duration-300">
                <div className="w-60 h-20 rounded-2xl border-[1px] border-[#a87f6e] bg-white flex justify-center items-center">
                  <span className="sen-bold">TRAINING DELIVERY & <br />
                    MANAGEMENT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex  md:grid md:grid-cols-3 md:gap-28 max-w-[1400px] mx-auto items-center h-full w-[82%] max-md:flex-col md:mt-0 mt-20">
          <div className="flex justify-center items-center text-center text-black gap-y-10 border-black rounded-xl relative mb-20">
            <Image src={hws_03} alt="" className="md:w-auto md:h-auto w-80 h-80" />
            <div className="transition  ease-in-out delay-150 absolute -bottom-10 transform hover:-translate-y-16 duration-300">
              <div className="w-60 h-20 rounded-2xl border-[1px] border-[#a87f6e] bg-white flex justify-center items-center">
                <span className="sen-bold">LEARNING & <br />
                  IMMPERSION DESIGN<br />
                  & IMPLEMENTATION </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center text-center text-black border-black rounded-xl relative mb-20">
            <Image src={hws_04} alt="" className="md:w-auto md:h-auto w-80 h-80" />
            <div className="transition  ease-in-out delay-150 absolute -bottom-10 transform hover:-translate-y-16 duration-300">
              <div className="w-60 h-20 rounded-2xl border-[1px] border-[#a87f6e] bg-white flex justify-center items-center">
                <span className="sen-bold">FUTURE OF WORK <br />
                  DESIGN<br />
                  CONSTRUCTS </span>
              </div>
            </div>
          </div>
          <div className="pb-20 md:pb-0">
            <div className="flex justify-center items-center text-center text-black border-black rounded-xl relative md:mb-20 ">
              <Image src={hws_05} alt="" className="md:w-auto md:h-auto w-80 h-80 " />
              <div className="transition  ease-in-out delay-150 absolute -bottom-10 transform hover:-translate-y-16 duration-300  ">
                <div className="w-60 h-20 rounded-2xl border-[1px] border-[#a87f6e] bg-white flex justify-center items-center ">
                  <span className="sen-bold ">CONTIGENT <br />
                    WORKFORCE</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-20 md:pb-0">
            <div className="flex justify-center items-center text-center text-black border-black rounded-xl relative md:mb-20 ">
              <Image src={hws_05} alt="" className="md:w-auto md:h-auto w-80 h-80 " />
              <div className="transition  ease-in-out delay-150 absolute -bottom-10 transform hover:-translate-y-16 duration-300  ">
                <div className="w-60 h-20 rounded-2xl border-[1px] border-[#a87f6e] bg-white flex justify-center items-center ">
                  <span className="sen-bold ">Tailored Global <br />
                    Tax Solutions </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-20 md:pb-0">
            <div className="flex justify-center items-center text-center text-black border-black rounded-xl relative md:mb-20 ">
              <Image src={hws_05} alt="" className="md:w-auto md:h-auto w-80 h-80 " />
              <div className="transition  ease-in-out delay-150 absolute -bottom-10 transform hover:-translate-y-16 duration-300  ">
                <div className="w-60 h-20 rounded-2xl border-[1px] border-[#a87f6e] bg-white flex justify-center items-center ">
                  <span className="sen-bold ">Industry Leadership  <br />
                    and Expertise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Award Background Image */}
      <div className="relative">
        <Image src={award_bg} alt="" className="md:object-cover object-cover md:w-full md:h-[15em] justify-stretch w-full h-[72rem]" />
        <div className="absolute top-0 left-0 w-full h-full flex justify-around items-center">
          <div className="grid grid-rows md:flex justify-evenly md:flex-cols-4 md:gap-44 sm:gap-20">
            {/* Class 1 */}
            <div className="class-1 flex flex-col justify-center items-center md:grid md:grid-rows md:mb-0 mb-14 md:-mt-0">
              <div className="flex justify-center items-center">
                <Image src={award_01} alt="" className="w-1/2 md:w-20" /> {/* Adjust image width for responsiveness */}
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="pt-5 sen-bold text-xl md:text-3xl text-white flex text-center items-center">
                  100 +
                </span>
                <span className="mt-5 whitespace-nowrap flex justify-center items-center text-center text-white md:text-base"> {/* Adjust font size for responsiveness */}
                  FORMER CLIENTS FROM <br />
                  PREVIOUS FIRMS
                </span>
              </div>
            </div>

            {/* Class 2 */}
            <div className="class-2 flex flex-col justify-center items-center md:grid md:grid-rows md:mb-0 mb-14">
              <div className="flex justify-center items-center">
                <Image src={award_02} alt="" className="w-1/2 md:w-20" /> {/* Adjust image width for responsiveness */}
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="mt-3 sen-bold text-xl md:text-3xl text-white flex text-center items-center">
                  100 +
                </span>
                <span className="mt-5 flex justify-center items-center text-center text-white md:text-base">
                  PROJECTS <br /> DONE
                </span>
              </div>
            </div>

            {/* Class 3 */}
            <div className="class-3 flex flex-col justify-center items-center md:grid md:grid-rows md:mb-0 mb-14">
              <div className="flex justify-center items-center">
                <Image src={award_03} alt="" className="w-1/2 md:w-20" /> {/* Adjust image width for responsiveness */}
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="mt-3 sen-bold text-xl md:text-3xl text-white flex text-center items-center">
                  25 +
                </span>
                <span className="mt-5 flex justify-center items-center text-center text-white md:text-base">
                  AWARDS, CERTIFICATION & <br /> RECOGNITIONS
                </span>
              </div>
            </div>

            {/* Class 4 */}
            <div className="class-4 flex flex-col justify-center items-center md:grid md:grid-rows md:mb-0">
              <div className="flex justify-center items-center">
                <Image src={award_04} alt="" className="w-1/2 md:w-20" /> {/* Adjust image width for responsiveness */}
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="mt-3 sen-bold text-xl md:text-3xl text-white flex text-center items-center">
                  50 +
                </span>
                <span className="mt-5 flex justify-center items-center text-center text-white md:text-base">
                  MULTI-YEAR <br /> ENGAGEMENTS
                </span>
              </div>
            </div>
          </div>


        </div>

      </div>

    </div>

  );
};

export default Middle;
