"use client"
import Link from "next/link"
import Image from "next/image";
import logo from "../assets/home_logo.png";

const Footer = () => {
    return (
        <footer className=" text-black py-8 px-4 max-w-[1400px] mx-auto items-center md:w-[80]">
            <div className="wrap w-[50]">
                <div className="flex md:justify-between items-center md:items-start max-w-[1400px] mx-auto gap-28 w-[94%]">
                    <Link href={"/home"}>
                        <Image
                            className="-ml-3"
                            src={logo}
                            alt="Company Logo"
                            width={160}
                            height={80}
                        />
                    </Link>
                    <div className="flex flex-col hidden md:inline-block">
                        <div className="flex space-x-10 sen-bold mt-5">
                            <Link href="/contactUs" className="transition ease-in-out delay-150 text-black hover:scale-110 duration-300">
                                Contact Us
                            </Link>
                            {/* <button className="transition ease-in-out delay-150 text-black hover:scale-110 duration-300">Contact Us</button> */}
                            <Link href="/privacyPolicy" className="transition ease-in-out delay-150 text-black hover:scale-110 duration-300">
                            Privacy Policy
                        </Link> </div>

                    </div>
                </div>

                {/* Subscription Section */}
                <div className="mt-1 md:flex text-2xl sen-light md:justify-between items-end max-w-[1400px] mx-auto gap-28 flex justify-between items-center md:flex w-[94%]">
                    <span>Subscribe to Our Newsletter</span>
                    <span></span>

                </div>
                <div className="md:flex mt-2 mb-4 md:justify-between max-w-[1400px] mx-auto gap-28 w-[94%]">
                    <span className="block text-sm text-gray-600">Select Topics and Stay Current with Our Latest Insights</span>
                    <span></span>
                </div>

                <div className="flex flex-rows justify-between items-end max-w-[1400px] mx-auto gap-28 w-[94%]">
                    <div className="flex mt-2">
                        <input type="text" placeholder="Email Address" className="px-2 py-2 md:w-80 w-44 border border-gray-500 focus:outline-none" />
                        <button className="md:px-14 px-8 py-2 bg-black text-white ml-2">Submit</button>
                    </div>
                    <a href="https://www.linkedin.com/company/kandhaconsulting/" target="_blank" className="hidden md:inline-block">
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                            <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
                        </svg>
                    </a>
                </div>

                <div className="md:hidden block flex justify-between items-center mt-20 max-w-[1400px] mx-auto w-[94%]">
                    <a href="https://www.linkedin.com/company/kandhaconsulting/" target="_blank" >
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                            <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
                        </svg>
                    </a>

                    {/* Mobile View */}
                    <div className="flex flex-col space-y-4 sen-bold">
                        <Link href="/contactUs" className="transition ease-in-out delay-150 text-black hover:scale-110 duration-300">
                            Contact Us
                        </Link>
                        {/* <button className="transition ease-in-out delay-150 text-black hover:scale-110 duration-300">Contact Us</button> */}
                        <Link href="/privacyPolicy" className="transition ease-in-out delay-150 text-black hover:scale-110 duration-300">
                            Privacy Policy
                        </Link>
                    </div>
                </div>


                {/* Horizontal Line */}
                <hr className="w-[94%] border-t font-bold border-black my-4 mx-auto" />

                <div className="flex text-center justify-center">
                    <span className="   text-center text-sm">Copyright Reserved @ 2026 Kandha</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer