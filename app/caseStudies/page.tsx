import Image from "next/image"
import cs01 from "../assets/Case Study 01 a.png";
import cs02 from "../assets/Case Study 02 a.png";
import cs03 from "../assets/Case Study 03a.png";
import cs04 from "../assets/Case Study 04 a.png";
import cs05 from "../assets/Case Study 05 a.png";
import cs06 from "../assets/Case Study 06 a.png";
import Link from "next/link";
// import "./caseStudies.css";
import styles from "./caseStudies.module.css";

const Case_Studies = () => {
    const caseStudies = [
        {
            id:1,
            title: "A Knowledge Guide for New Clinical Project Leads",
            image: cs01,
            link: "/caseStudies/case-study-1",
        },
        {
            id:2,
            title: "Digital Learning Transformation",
            image: cs02,
            link: "/caseStudies/case-study-2",
        },
        {
            id:3,
            title: "Employee Learning Journey Enhancement",
            image: cs03,
            link: "/caseStudies/case-study-3",
        },
        {
            id:4,
            title: "Training to Enable a Medical Devices Division",
            image: cs04,
            link: "/caseStudies/case-study-4",
        },
        {
            id:5,
            title: "AI Mobile-first Communication Hub",
            image: cs05,
            link: "/caseStudies/case-study-5",
        },
        {
            id:6,
            title: "Supercharging Micro-Learning",
            image: cs06,
            link: "/caseStudies/case-study-6",
        },
    ];

    return (
        <div>
            <div className="line-gradient relative inset-x-0 bottom-0 w-full md:h-2 h-1 mb-5"></div>
            <div className="max-w-[1400px] mx-auto grid 
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            xl:grid-cols-3
            gap-6
            p-4
            w-[84%]"
            >
                {caseStudies.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            className="w-full h-52 object-cover"
                        />
                        <div className="p-4 flex flex-col justify-between min-h-[150px]">
                            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                                {item.title}
                            </h3>
                            <Link href={item.link} className="text-center">
                                <button className="mt-4 w-full bg-[#000] text-white py-2 rounded-md hover:bg-[#f39a20] transition">
                                    View More
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="flex flex-col md:justify-center md:items-center w-[92%] mx-auto md:text-base text-xs">
            <div className="transition ease-in-out delay-150 -bottom-10 transform hover:scale-105 duration-300 
                flex inline-flex items-center mt-5 rounded-l-full bg-gradient-to-r from-[#d1d1d1] to-[#fbfbfb] 
                md:w-[60%] md:mr-36">
                <Image src={cs01} alt="" className="w-[4em] h-[4em] object-cover rounded-full border border-[.1rem] border-[#ffae42]"/>
                <Link href="/caseStudies/case-study-1">
                    <div className="flex justify-center items-center md:pl-0 pl-2">
                        <span className="md:p-5 cursor-pointer md:ml-10 font-semibold ml-2">
                            A Knowledge Guide for New Clinical Project Leads
                        </span>
                    </div>
                </Link>
            </div>

            <div className="transition ease-in-out delay-150 -bottom-10 transform hover:scale-105 duration-300 
            flex inline-flex items-center mt-5 rounded-l-full bg-gradient-to-r from-[#d1d1d1] to-[#fbfbfb] 
            md:w-[60%] md:mr-36">
                <Image src={cs02} alt="" className="w-[4em] h-[4em] object-cover rounded-full border border-[.1rem] border-[#ffae42]"/>
                <Link href="/caseStudies/case-study-2">
                    <span className="md:p-5 p-1 cursor-pointer md:ml-10 font-semibold ml-2">
                        Digital Learning Transformation
                    </span>
                </Link>
            </div>

            <div className="transition ease-in-out delay-150 -bottom-10 transform 
            hover:scale-105 duration-300 flex inline-flex items-center  mt-5 rounded-l-full 
            bg-gradient-to-r from-[#d1d1d1] to-[#fbfbfb] md:w-[60%] md:mr-36">
                <Image src={cs03} alt="" className="w-[4em] h-[4em] object-cover rounded-full border border-[.1rem] border-[#ffae42]"/>
                <Link href="/caseStudies/case-study-3">
                    <span className="md:p-5 p-1 cursor-pointer md:ml-10 font-semibold ml-2">
                        Employee Learning Journey Enhancement
                    </span>
                </Link>
            </div>

            <div className="transition ease-in-out delay-150 -bottom-10 transform 
            hover:scale-105 duration-300 flex inline-flex items-center  mt-5 rounded-l-full 
            bg-gradient-to-r from-[#d1d1d1] to-[#fbfbfb] md:w-[60%] md:mr-36">
                <Image src={cs04} alt="" className="w-[4em] h-[4em] object-cover rounded-full border border-[.1rem] border-[#ffae42]"/>
                <Link href="/caseStudies/case-study-4">
                    <span className="md:p-5 p-1 cursor-pointer md:ml-10 font-semibold ml-2">
                        Training to Enable a Medical Devices Division
                    </span>
                </Link>
            </div>

            <div className="transition ease-in-out delay-150 -bottom-10 transform 
            hover:scale-105 duration-300 flex inline-flex items-center  mt-5 rounded-l-full 
            bg-gradient-to-r from-[#d1d1d1] to-[#fbfbfb] md:w-[60%] md:mr-36">
                <Image src={cs05} alt="" className="w-[4em] h-[4em] object-cover rounded-full border border-[.1rem] border-[#ffae42]"/>
                <Link href="/caseStudies/case-study-5">
                    <span className="md:p-5 p-1 cursor-pointer md:ml-10 font-semibold ml-2">
                        AI Mobile-first Communication Hub
                    </span>
                </Link>
            </div>

            <div className="transition ease-in-out delay-150 -bottom-10 transform 
            hover:scale-105 duration-300 flex inline-flex items-center mt-5 mb-10 rounded-l-full 
            bg-gradient-to-r from-[#d1d1d1] to-[#fbfbfb] md:w-[60%] md:mr-36">
                <Image src={cs06} alt="" className="w-[4em] h-[4em] object-cover rounded-full border border-[.1rem] border-[#ffae42]"/>
                <Link href="/caseStudies/case-study-6">
                    <span className="md:p-5 p-1 cursor-pointer md:ml-10 font-semibold ml-2">
                        Supercharging Micro-Learning
                    </span>
                </Link>
            </div>


        </div> */}
        </div>
    )
}

export default Case_Studies