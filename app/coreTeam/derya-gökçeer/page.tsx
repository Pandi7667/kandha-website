import React from 'react';
import team01 from "../../assets/CoreTeam.png";
import Link from 'next/link';
import Image from 'next/image';
import "../team.css";

const page = () => {
    return (
        <div className='bg-[#f2f0f1]'>
            <div className="line-gradient relative inset-x-0 bottom-0 w-full md:h-2 h-1 mb-5"></div>
            <div className="md:flex pt-5 p-16">
                <div className="md:mr-40" style={{ flex: '1', zIndex: "99999" }}>
                    <Image src={team01} alt="" />
                </div>
                <div className="absolute mobile" style={{ flex: '1', position: 'relative' }}>
                    <div className="border-about inline-flex md:mt-0 mt-10 border-[#a28874] 
                        bg-gradient-to-b from-[#d1d1d1] to-[#fbfbfb]
                        md:-ml-52 md:mb-0 p-5 md:mr-10 mb-10">
                        <span className="inline-flex justify-between whitespace-nowrap">
                            <span className="font-semibold text-2xl md:pl-20">
                                Derya Gökçeer<br></br>
                            </span>
                            <div className="pl-10">
                                <a href="https://www.linkedin.com/in/derya-g%C3%B6k%C3%A7eer-21919a50/" target="_blank" >
                                    <svg
                                        className='md:w-6 md:h-6 w-8 h-8 cursor-pointer'
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 48 48"
                                    >
                                        <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                                    </svg>
                                </a>
                            </div>
                        </span>
                    </div>
                </div>
                <div className='md:flex md:justify-between md:absolute relative md:w-[86%] md:mt-28 
                    flex justify-center items-center md:text-justify text-left'>
                    <span></span>
                    <div className='md:w-1/2'>
                        <span className=''>
                            Derya is the CCO at KGT and an SAP & e-Compliance Specialist with strong expertise in e-invoicing and SAF-T implementations
                            across Europe and other jurisdictions. With over 15 years of experience, he focuses on aligning tax regulations with SAP system
                            design and end-to-end business processes. With hands-on experience in complex roll-outs and digital tax transformation programs,
                            he bridges Tax, Finance, and IT to deliver scalable, future-ready compliance solutions.
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center pb-10'>
                <Link href="/coreTeam">
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