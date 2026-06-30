"use client"
import team_01 from "../assets/team_01.png";
// import team_02 from "../assets/team_02.png";
import team_03 from "../assets/team_03.png";
import team_04 from "../assets/CoreTeam.png";
import team_05 from "../assets/team_05.png";
// import team_06 from "../assets/team_06.png";
import team_07 from "../assets/team_07.png";
import award_bg from "../assets/award_bg.png";
// import award_01 from "../assets/award_01.png";
import defaultImage from "../assets/default-avatar.png"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { getProjects } from '../../sanity/lib/client';
import { Project } from '@/types/Project';
import linkedin from "../assets/linkedin.jpg";

const Core_team = () => {

    // const [showReadmore, setShowReadmore] = useState(false);
    const [projects, setProjects] = useState<Project[]>([]); // Specify the type as Project[]
    console.log(projects);

    const getProducts = [
        {
            "id":1,
            "name": "VIDHYU RAO",
            "image": team_01,
            "url": "/coreTeam/vidhyu-profile"
        },
        {
            "id":2,
            "name": "ADITYA RAO",
            "image": team_03,
            "url": "/coreTeam/aditya-profile"
        },
        {
            "id":3,
            "name": "BRIAN OLAH",
            "image": team_04,
            "url": "/coreTeam/brian-olah-profile"
        },
        {
            "id":4,
            "name": "ARTHUR RUIZ",
            "image": team_05,
            "url": "/coreTeam/arthur-ruiz-profile"
        },
        {
            "id":5,
            "name": "SEAN IBARGUEN",
            "image": team_07,
            "url": "/coreTeam/sean-profile"
        },
        {
            "id":6,
            "name": "Arthur “Art” Ruiz",
            "image": defaultImage,
            "url": "/coreTeam/arthur-ruiz-profile"
        },
        {
            "id":7,
            "name": "Cynthia Morgan",
            "image": defaultImage,
            "url": "/coreTeam/cynthia-morgan"
        },
        {
            "id":8,
            "name": "Luis Rangel",
            "image": defaultImage,
            "url": "/coreTeam/luis-rangel"
        },
        {
            "id":9,
            "name": "Anitha Krishnaraj",
            "image": defaultImage,
            "url": ""
        },
        {
            "id":10,
            "name": "Melanie Hodgkins",
            "image": defaultImage,
            "url": "/coreTeam/melanie-hodgkins"
        },
        {
            "id":11,
            "name": "Genevieve Mukherjee",
            "image": defaultImage,
            "url": "/coreTeam/genevieve-mukherjee"
        },
        {
            "id":12,
            "name": "Celia Daniels",
            "image": defaultImage,
            "url": "/coreTeam/celia-daniels"
        },
        {
            "id":13,
            "name": "Richard Cornelisse",
            "image": defaultImage,
            "url": "/coreTeam/richard-cornelisse"
        },
        {
            "id":14,
            "name": "Lucia Nezvalova",
            "image": defaultImage,
            "url": "/coreTeam/lucia-nezvalova"
        },
        {
            "id":15,
            "name": "Derya Gökçeer",
            "image": defaultImage,
            "url": "/coreTeam/derya-gökçeer"
        },
        {
            "id":16,
            "name": "Ramesh Muni",
            "image": defaultImage,
            "url": "/coreTeam/ramesh-muni"
        },
        {
            "id":17,
            "name": "Kaan Bahşi",
            "image": defaultImage,
            "url": "/coreTeam/kaan-bahşi"
        },
    ];

    useEffect(() => {
        async function fetchProjects() {
            try {
                const projectsData = await getProjects();
                setProjects(projectsData);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        }

        fetchProjects();
    }, []);

    const handleMemberClick = (name: string) => {
        // Define your click handler logic here
        console.log(`Clicked on member: ${name}`);
    };

    return (
        <div id="/coreTeam" className="bg-[#e4e3e6] overflow-x-hidden">
            <div className="line-gradient relative inset-x-0 bottom-0 w-full md:h-2 h-1 mb-5"></div>
            <div className=" md:flex  md:grid md:grid-cols-3 md:gap-24 max-w-[1400px] mx-auto items-center h-full w-[84%] max-md:flex-col md:mt-10 mt-20">

                {getProducts.map((member) => (
                    <div key={member.name}>
                        <div className="flex justify-center items-center text-center text-black gap-y-10 border-black rounded-xl relative mb-20">
                            <Image src={member.image} alt="" className="md:w-auto md:h-auto w-80 h-80" />
                            <div className="transition ease-in-out delay-150 absolute -bottom-10 transform hover:scale-110 duration-300">
                                <div className="w-56 h-20 rounded-2xl border-[1.5px] border-[#a87f6e] bg-white flex flex-col justify-left text-left p-4 ">
                                    <span className="sen-bold text-left ml-2">{member.name}</span>
                                    <Link href={member.url}>
                                        <button className="flex inline-flex text-sm ml-2 cursor-pointer hover:text-[gray]">
                                            Read more
                                            <svg className="w-8 h-8 px-2 py-2 -mt-1 hover:text-[gray]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <div className="relative">
                <Image src={award_bg} alt="" className="md:object-cover object-cover md:w-full md:h-[15em] justify-stretch w-full h-[72rem]" />

                {/* Linkedin */}

                <div className="absolute top-0 left-0 w-full h-full flex md:justify-between justify-center items-center">
                    <div className="grid grid-rows md:flex md:flex-cols-4 md:gap-5 p-5">

                        {/* Class 1 */}
                        <div className="class-2 flex flex-col justify-center items-center md:grid md:grid-rows md:mb-0 mb-14 relative">
                            <iframe
                                className="rounded-md linkedin bg-black"
                                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7163592829447970817"
                                height="auto"
                                width="auto"
                                frameBorder="0"
                                allowFullScreen={true}
                                title="Embedded post"
                                style={{ backgroundColor: 'black', color: 'white' }}
                            ></iframe>
                        </div>

                        {/* Class 2 */}
                        <div className="class-2 flex flex-col justify-center items-center md:grid md:grid-rows md:mb-0 mb-14">
                            <div>
                                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7115719830757941249" height="auto" width="auto" frameBorder="0" allowFullScreen={true} title="Embedded post"></iframe>
                            </div>
                        </div>

                        {/* Class 3 */}
                        <div className="class-4 flex flex-col justify-center items-center md:grid md:grid-rows md:mb-0 mb-14">
                            <div className="">
                                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7153100343784947713" height="auto" width="auto" frameBorder="0" allowFullScreen={true} title="Embedded post"></iframe>
                            </div>
                        </div>

                        {/* Class 4 */}
                        <div className="class-2 flex flex-col justify-center items-center md:grid md:grid-rows md:mb-0 relative">
                            <div className="iframe-overlay absolute inset-0 bg-black bg-opacity-80 text-white ">
                                {/* Add Image component with width and height matching the iframe */}
                                <Image src={linkedin} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7115165116102316032" height="auto" width="auto" frameBorder="0" allowFullScreen={true} title="Embedded post"></iframe>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Core_team
