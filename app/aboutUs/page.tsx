import Image from "next/image";
import logo from "../assets/big_logo.png";
import au01 from "../assets/au01.png";
import au02 from "../assets/au02.png";
import au03 from "../assets/au03.png";
import au04 from "../assets/au04.png";
import au05 from "../assets/au05.png";
import "./aboutus.css"

const About_Us = () => {
    return (
        <div className="bg-[#f2f0f1]">
            <div className="line-gradient-about relative inset-x-0 bottom-0 w-full md:h-2 h-1 mb-5"></div>

            <div className="md:flex md:justify-between justify-center items-center mt-6 gap-28 max-w-[1400px] mx-auto w-[82%]">
                <div className="md:hidden block flex justify-center">
                    <Image src={logo} alt="" className="md:mr-20 max-w-[18em] h-auto" />
                </div>
                <div className="md:text-justify text-center pr-3">
                    <span className="text-2xl sen-bold">
                        Our only objective is to help people and organizations successfully
                        adapt to change whatever the change entails. <br />
                    </span>
                    <span className="flex justify-center mt-7">
                        We believe in meeting the client where they are.
                        This is what helps us provide comprehensive solutions to achieve tangible, just-in-time results.
                    </span>
                </div>
                <div className="hidden md:inline-block">
                    <Image src={logo} alt="" className="mr-20 max-w-[20em] h-auto" />
                </div>
            </div>

            {/* Horizontal Line */}
            <hr className="md:w-[25%] w-[50%] md:mt-0 mt-10 border-t font-bold border-black my-1 mx-auto" />
            <span className="flex justify-center md:text-3xl text-2xl sen-bold">
                BUILDING BLOCKS
            </span>
            <hr className="md:w-[25%] w-[50%] border-t font-bold border-black my-1 mx-auto " />

            <div className="">
                {/* 1st Left */}
                <div className="mt-10 md:flex md:items-center">
                    <div className="md:mr-40" style={{ flex: '1',  zIndex: "99999" }}>
                        <Image src={au01} alt="" />
                    </div>
                    <div className="absolute" style={{ flex: '1', position: 'relative' }}>
                        <div className="border-about-us md:w-90 md:h-72 md:mt-0 mt-10 border-[#7b5133] 
                        bg-gradient-to-b from-[#d1d1d1] to-[#fbfbfb]
                        flex justify-center md:items-center md:-ml-44 md:mr-20 mr-5">
                            <span className="md:text-justify text-left md:p-16 p-8">
                                We produce our most effective work by approaching enterprise-level problems and opportunities with a
                                development response that is driven by a systemic strategy.
                            </span>
                        </div>
                    </div>
                </div>

                {/* 1st Right */}
                <div className="mt-10 md:flex md:items-center">
                    <div className="md:hidden block mb-10" style={{ flex: '1',  zIndex: "99999" }}>
                        <Image src={au02} alt="" className="" />
                    </div>
                    <div className="absolute" style={{ flex: '1', position: 'relative' }}>
                        <div className="border-about-us-r md:w-90 md:h-72 border-[#7b5133] 
                        bg-gradient-to-b from-[#d1d1d1] to-[#fbfbfb]
                        flex justify-center items-center md:ml-20 ml-5 md:-mr-40 md:mb-0 mb-10">
                            <span className="font-about md:text-justify text-left md:p-16 p-8">
                                We collaborate with our clients to craft personalized solutions that
                                cater to their unique strategy, culture, and requirements.
                            </span>
                        </div>
                    </div>
                    <div className="hidden md:inline-block md:ml-40" style={{ flex: '1',  zIndex: "99999" }}>
                        <Image src={au02} alt="" className="" />
                    </div>
                </div>

                {/* 2nd Left */}
                <div className="mt-10 md:flex md:items-center">
                    <div className="md:mr-40" style={{ flex: '1', zIndex: "99999" }}>
                        <Image src={au03} alt="" />
                    </div>
                    <div className="absolute" style={{ flex: '1', position: 'relative' }}>
                        <div className="border-about-us md:w-90 md:h-72 md:mt-0 mt-10 border-[#7b5133] bg-gradient-to-b from-[#d1d1d1] to-[#fbfbfb]
                        flex justify-center md:items-center md:-ml-44 md:mr-20 mr-5">
                            <span className="font-about md:text-justify text-left md:p-16 p-8">
                                Drawing from 30 years of practical experience and our
                                consultants extensive functional expertise, we utilize a research - based, human -
                                centered approach to drive transformational change and enhance leadership effectiveness.
                            </span>
                        </div>
                    </div>
                </div>

                {/* 2nd Right */}
                <div className="mt-10 md:flex md:items-center">
                    <div className="md:hidden block mb-10" style={{ flex: '1',  zIndex: "99999" }}>
                        <Image src={au05} alt="" className="" />
                    </div>
                    <div className="absolute" style={{ flex: '1', position: 'relative' }}>
                        <div className="border-about-us-r md:w-90 md:h-72 border-[#7b5133] 
                        bg-gradient-to-b from-[#d1d1d1] to-[#fbfbfb]
                        flex justify-center items-center md:ml-20 ml-5 md:-mr-40 md:mb-0 mb-10">
                            <span className="font-about md:text-justify text-left md:p-16 p-8">
                                Our approach is open-source, incorporating knowledge and expertise from a diverse range of organizations,
                                institutions and sources across the globe. By blending our intellectual property with content from these
                                sources, we strive to develop the most effective solutions.
                            </span>
                        </div>
                    </div>
                    <div className="hidden md:inline-block md:ml-40" style={{ flex: '1',  zIndex: "99999" }}>
                        <Image src={au05} alt="" className="" />
                    </div>
                </div>

                {/* 3rd Left */}
                <div className="mt-10 md:flex md:items-center ">
                    <div className="md:mr-40" style={{ flex: '1', zIndex: "99999" }}>
                        <Image src={au04} alt="" />
                    </div>
                    <div className="absolute md:mb-0 mb-10 " style={{ flex: '1', position: 'relative' }}>
                        <div className="border-about-us md:w-90 md:h-72 md:mt-0 mt-10 border-[#7b5133] bg-gradient-to-b from-[#d1d1d1] to-[#fbfbfb]
                        flex justify-center md:items-center md:-ml-44 md:mr-20 mr-5">
                            <span className="font-about md:text-justify text-left md:p-16 p-8">
                                We build ecosystem of partners who brings unique skills, perspective ,
                                value and future-proof solution to solve complex problems. Our global partners are technology
                                product vendors, content, universities & institutions.
                            </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default About_Us
