import React from 'react'
import cf02 from "../../assets/Case Study 04 a.png";
import cf03 from "../../assets/Case Study 04.png";
import Image from 'next/image';
import cs_01 from "../../assets/Artboard 2@4x.png";
import cs_02 from "../../assets/Artboard 2 copy@4x.png";
import cs_03 from "../../assets/Artboard 2 copy 2@4x.png";
import Link from 'next/link';
import cs_004 from "../../assets/cs_004.png";
import cs_0041 from "../../assets/cs_0041.png";
import "../caseStudies.css";

const page = () => {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <div className="line-gradient relative inset-x-0 bottom-0 w-full md:h-2 h-1"></div>
            <div className="md:flex md:w-[90%] md:mt-10">
                <div className="md:hidden block mb-10" style={{ flex: '1', zIndex: "99999", }}>
                    <Image src={cs_004} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="md:absolute relative" style={{ flex: '1', position: 'relative' }}>
                    <div className="border-about-case border-[#7b5133] 
                        bg-gradient-to-b from-[#d1d1d1] to-[#fbfbfb]
                        md:ml-20 md:-mr-72 md:mb-0 mb-10">
                        <span className="md:inline-flex p-5">
                            <span className="font-semibold flex justify-start pl-5 md:text-2xl">
                                Training to Enable a Medical Devices Division <br />
                            </span>
                        </span>
                    </div>
                    <div className='p-10 rounded-2xl mt-5 md:ml-24 ml-10 md:-mr-44 bg-[#eeeeee] 
                        flex justify-center md:items-center'>
                        <Image src={cs_01} alt="" className="shadow-xl-case w-[5em] -ml-20 h-[5em] bg-white object-cover rounded-full border border-[.2rem] border-[#ffae42]" />
                        <span className='ml-5'>
                            Challenge <br />
                            <span className='flex md:text-justify text-left pt-2'>
                                A multinational healthcare company required their manufacturing units
                                to go through a safety program as they were expanding their medical device innovation
                                and capabilities to launch three new product lines.
                            </span>
                        </span>
                    </div>
                    <div className='p-10 rounded-2xl mt-5 md:ml-24 ml-10 md:-mr-44 bg-[#eeeeee] 
                        flex justify-center md:items-center'>
                        <Image src={cs_02} alt="" className="shadow-xl-case w-[5em] -ml-20 h-[5em] bg-white object-cover rounded-full border border-[.2rem] border-[#ffae42]" />
                        <span className='ml-5'>
                            Solution <br />
                            <span className='flex pt-2 md:text-justify text-left'>
                                Developed a detailed digital & synchronous learning strategy and
                                plan to execute the training for learners across the US, EU and APAC regions.</span>
                        </span>
                    </div>
                    <div className='p-10 rounded-2xl mt-5 md:ml-24 ml-10 md:-mr-44 bg-[#eeeeee] 
                        flex justify-center md:items-center'>
                        <Image src={cs_03} alt="" className="shadow-xl-case w-[5em] -ml-20 h-[5em] bg-white object-cover rounded-full border border-[.2rem] border-[#ffae42]" />
                        <span className='ml-5'>
                            Results <br />
                            <span className='flex pt-2 md:text-justify text-left'>
                                Developed and delivered eLearning and Instructor led
                                modules on the regulations, processes and safety standards for
                                clinical investigations and manufacturers of medical devices.
                                This included the Foundational Course for Medical Devices, post-market
                                periodic reporting, post-market medical device reporting and vigilance
                                reporting, pre-market adverse event reporting, safety communications in clinical
                                trials, and recall and corrective actions for medical devices. </span>

                        </span>
                    </div>

                </div>

                <div className="md:hidden block mt-10 flex justify-center items-center" style={{ flex: '1', zIndex: "99999" }}>
                    <Image src={cf03} alt="" className="w-full h-[120px] object-cover" />
                </div>

                <div className="hidden md:inline-block md:-mr-80 md:ml-60 gap-y-10" style={{ flex: '1', zIndex: "99999" }}>
                    <Image src={cf02} alt="" className="w-80 h-100 mb-8" />
                    <Image src={cf03} alt="" className="w-80 h-100" />
                </div>
            </div>

            <div className='flex justify-center items-center mt-10 pb-10'>
                <Link href="/caseStudies">
                    <svg
                        className='w-10 h-10 cursor-pointer'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 122.88 122.88"
                        fill="#000000"
                    >
                        <path d="M61.44,0A61.51,61.51,0,1,1,18,18,61.25,61.25,0,0,1,61.44,0Zm5,45.27A7.23,7.23,0,1,0,56.14,35.13L35,56.57a7.24,7.24,0,0,0,0,10.15l20.71,21A7.23,7.23,0,1,0,66.06,77.62l-8.73-8.87,24.86-.15a7.24,7.24,0,1,0-.13-14.47l-24.44.14,8.84-9Z" />
                    </svg>
                </Link>

            </div>


        </div>
    )
}

export default page