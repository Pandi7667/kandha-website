import React from 'react'
import cf02 from "../../assets/Case Study 01 a.png";
import cf03 from "../../assets/Case Study 01.png";
import Image from 'next/image';
import cs_01 from "../../assets/Artboard 2@4x.png";
import cs_02 from "../../assets/Artboard 2 copy@4x.png";
import cs_03 from "../../assets/Artboard 2 copy 2@4x.png";
import cs_001 from "../../assets/cs_001.png";
import Link from 'next/link';
import "../caseStudies.css";

const page = () => {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <div className="line-gradient relative inset-x-0 bottom-0 w-full md:h-2 h-1"></div>
            <div className="md:flex md:w-[90%] md:mt-10">
                <div className="md:hidden block mb-10 flex justify-center items-center" style={{ flex: '1', zIndex: "99999" }}>
                    <Image src={cf02} alt="" className="w-full h-[9em] object-cover" />
                </div>
                <div className="md:absolute relative" style={{ flex: '1', position: 'relative' }}>
                    <div className="border-about-case border-[#7b5133]
                        bg-gradient-to-b from-[#d1d1d1] to-[#fbfbfb]
                        md:ml-20 md:-mr-72 md:mb-0 mb-10">
                        <span className="md:inline-flex flex justify-center p-5 pl-5 ">
                            <span className="font-semibold flex justify-center md:text-2xl">
                                A Knowledge Guide for New Clinical Project Leads <br />
                            </span>
                        </span>
                    </div>
                    <div className='p-10 rounded-2xl mt-8 md:ml-24 ml-10 md:-mr-44 bg-[#eeeeee] 
                        flex justify-center md:items-center'>
                        <Image src={cs_01} alt="" className="shadow-xl-case w-[5em] -ml-20 h-[5em] bg-white object-cover rounded-full border border-[.2rem] border-[#ffae42]"/>
                        <span className='ml-5'>
                            Challenge <br/>
                            <span className='flex pt-2 md:text-justify text-left '>
                            Our client, a leading ophthalmology medical devices firm, 
                            faced onboarding and integration challenges with clinical project leads.
                            </span>
                        </span>
                    </div>
                    <div className='p-10 rounded-2xl mt-8 md:ml-24 ml-10 md:-mr-44 bg-[#eeeeee] 
                        flex justify-center md:items-center'>
                        <Image src={cs_02} alt="" className="shadow-xl-case w-[5em] -ml-20 h-[5em] bg-white object-cover rounded-full border border-[.2rem] border-[#ffae42]"/>
                        <span className='ml-5'>
                            Solution <br/>
                            <span className='flex pt-2 md:text-justify text-left'>
                            We developed a Digital Playbook with an interactive interface, 
                            streamlining onboarding with a &quot;New Hire Path&quot; for direct access to key information.
                            </span>
                            
                        </span>
                    </div>
                    <div className='p-10 rounded-2xl mt-10 md:ml-24 ml-10 md:-mr-44 bg-[#eeeeee] 
                        flex justify-center md:items-center'>
                        <Image src={cs_03} alt="" className="shadow-xl-csae w-[5em] -ml-20 h-[5em] bg-white object-cover rounded-full border border-[.2rem] border-[#ffae42]"/>
                        <span className='ml-5'>
                            Results <br/>
                            <span className='flex pt-2 md:text-justify text-left'>
                            Seamless integration of pivotal applications like SharePoint, Veeva Vault, CRM, and more into a centralized playbook, enhancing efficiency and effectiveness for project leads.
                            </span>
                            
                        </span>
                    </div>
                    
                </div>

                <div className="md:hidden block mt-10 flex justify-center items-center" style={{ flex: '1', zIndex: "99999" }}>
                    <Image src={cs_001} alt="" className="w-full h-[15em] object-none object-top object-mt-10" />
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