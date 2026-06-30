"use client"
import Link from "next/link";
import Image from 'next/image';
import logo from '../assets/home_logo.png';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useState } from 'react';

// Define navigation links
const navLinks = [
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "Core Team", route: "/coreTeam" },
    { id: 3, name: "About Us", route: "/aboutUs" },
    {
        id: 4, name: "Services", route: "/services", subItems: [
            { id: 41, name: "Core Offerings", route: "/coreOfferings" },
            { id: 42, name: "Government Services", route: "/governmentServices" },
            { id: 43, name: "Tax services and Carveouts", route: "/tax-services-and-carveouts" }
        ]
    },
    { id: 5, name: "Case Studies", route: "/caseStudies" },
    { id: 6, name: "Contact Us", route: "/contactUs" }
];

// Navbar component definition
const Navbar = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [currentLink, setCurrentLink] = useState(
        navLinks?.find((link) => link.name === "Home")?.route
    );
    const [activeServices, setActiveServices] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleOpenMobileMenu = () => {
        setOpenMobileMenu(!openMobileMenu);
    };

    const handleLinkClick = (route: string) => {
        setCurrentLink(route);
        if (route === "/coreOfferings" || route === "/governmentServices") {
            setActiveServices(true);
        } else {
            setActiveServices(false);
        }
    };

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };


    const [activeSubItem, setActiveSubItem] = useState('');
    const [servicesSelected, setServicesSelected] = useState(false);

    const handleLinkClickM = (route: string) => {
        setCurrentLink(route);
        if (route === "/coreOfferings" || route === "/governmentServices") {
            setShowDropdown(false); // Close dropdown on link click
            setServicesSelected(true); // Mark Services as selected
        } else {
            setServicesSelected(false); // Mark Services as not selected
        }
        setOpenMobileMenu(false); // Close mobile menu after selecting a link
    };

    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleSubItemClick = (route: string) => {
        setActiveSubItem(route);
        handleToggleDropdown(); // Close dropdown after selecting a sub-item
    };


    return (
        <nav className="w-full top-0 z-[9999] py-3 relative bg-white ">
            <div className="max-w-[1400px] mx-auto md:gap-28 flex justify-between items-center md:flex w-[84%]">
                <Link href={"/home"}>
                    <Image
                        className="-mt-2"
                        src={logo}
                        alt="Company Logo"
                        width={150}
                        height={60}
                    />
                </Link>
                {/* Desktop view */}
                <ul className="flex gap-10 w-[84%] max-md:hidden text-black whitespace-nowrap cursor-pointer">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            {link.name === "Services" ? (
                                <div
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="relative"
                                >
                                    <span
                                        className={`inline-block transition duration-600 text-2sm font-semibold ${activeServices ? "text-[#d6ad6b]" : ""
                                            }`}
                                    >
                                        {link.name}
                                    </span>
                                    {showDropdown && (
                                        <ul className="absolute flex flex-col left-0 gap-2 bg-white py-2 shadow-md p-5">
                                            {link.subItems && link.subItems.map((subItem) => (
                                                <li key={subItem.id} className="whitespace-nowrap">
                                                    <Link href={subItem.route}>
                                                        <span
                                                            className={`text-black text-2sm font-semibold hover:text-[#d6ad6b] ${currentLink === subItem.route ? "text-[#d6ad6b]" : ""
                                                                }`}
                                                            onClick={() => handleLinkClick(subItem.route)}
                                                        >
                                                            {subItem.name}
                                                        </span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    href={link.route}
                                    className={`transition duration-600 text-2sm font-semibold ${currentLink === link.route ? "text-[#d6ad6b]" : ""
                                        }`}
                                    onClick={() => handleLinkClick(link.route)}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}

                </ul>

                <div
                    className="md:hidden text-3xl cursor-pointer text-black"
                    onClick={handleOpenMobileMenu}
                >
                    {openMobileMenu ? <MdClose /> : <FiMenu />}
                </div>

                {/* Mobile View */}
                {openMobileMenu && (
                    <ul className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-3 shadow-md">
                        <button className="absolute top-5 right-5 bg-white p-2 text-4xl" onClick={handleOpenMobileMenu}>
                            <MdClose />
                        </button>
                        {navLinks.map((link) => (
                            <div key={link.id}>
                                {link.name === "Services" ? (
                                    <div
                                        onMouseEnter={() => setShowDropdown(true)}
                                        onMouseLeave={() => setShowDropdown(false)}
                                        className="relative"
                                    >
                                        <span className={`inline-block transition duration-600 text-2sm font-semibold ${servicesSelected ? "text-[#d6ad6b]" : ""}`}>
                                            {link.name}
                                        </span>
                                        {showDropdown && (
                                            <ul className="absolute flex flex-col justify-center items-center left-0 gap-2 bg-white py-2 shadow-md p-5">
                                                {link.subItems && link.subItems.map((subItem) => (
                                                    <li key={subItem.id} className="whitespace-nowrap">
                                                        <Link href={subItem.route}>
                                                            <span
                                                                className={`text-black text-2sm font-semibold hover:text-[#d6ad6b] ${currentLink === subItem.route ? "text-[#d6ad6b]" : ""}`}
                                                                onClick={() => handleLinkClickM(subItem.route)}
                                                            >
                                                                {subItem.name}
                                                            </span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={link.route}
                                        className={`transition duration-600 text-2sm font-semibold ${currentLink === link.route ? "text-[#d6ad6b]" : ""}`}
                                        onClick={() => handleLinkClickM(link.route)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </ul>
                )}

            </div>
        </nav>
    );
};

export default Navbar;


{/* 
// Old navbar
"use client"

import Link from "next/link";
import Image from 'next/image';
import logo from '../assets/home_logo.png';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useState, useRef } from 'react';

const navLinks = [
    { id: 1, name: "Home", route: "/home" },
    { id: 2, name: "Core Team", route: "/coreTeam" },
    { id: 3, name: "About Us", route: "/aboutUs" },
    { id: 4, name: "Services", route: "/services", subItems: [
        { id: 41, name: "Core Offerings", route: "/coreOfferings" },
        { id: 42, name: "Government Services", route: "/governmentServices" }
    ]},
    { id: 5, name: "Case Studies", route: "/caseStudies" },
    { id: 6, name: "Contact Us", route: "/contactUs" }
];

const Navbar = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const handleOpenMobileMenu = () => {
        setOpenMobileMenu(!openMobileMenu);
    };
    const [currentLink, setCurrentLink] = useState(
        navLinks?.find((link) => link.name === "Home")?.route
    );

    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownDelayRef = useRef<number | undefined>(undefined); // Use useRef for storing the timeout ID

    const handleMouseEnter = () => {
        if (dropdownDelayRef.current !== undefined) {
            clearTimeout(dropdownDelayRef.current); // Clear previous delay
        }
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        dropdownDelayRef.current = window.setTimeout(() => {
            setShowDropdown(false);
        }, 300); // Adjust the delay time as needed
    };

    return (
        <nav className="w-full top-0 z-[9999] py-3 relative bg-white ">
            <div className="max-w-[1400px] mx-auto md:gap-28 flex justify-between items-center md:flex w-[84%]">
                <Link href={"/"}>
                    <Image
                        className="-mt-2"
                        src={logo}
                        alt="Company Logo"
                        width={150}
                        height={60}
                    />
                </Link>
                {/* Desktop view 
                <ul className="flex gap-10 w-[84%] max-md:hidden text-black whitespace-nowrap">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            {link.name === "Services" ? (
                                <div
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="relative"
                                >
                                    <span
                                        className={`hover:text-[#d6ad6b] inline-block transition duration-600 text-2sm font-semibold ${
                                            currentLink === link.route ? "text-[#d6ad6b]" : ""
                                        }`}
                                    >
                                        {link.name}
                                    </span>
                                    {showDropdown && (
                                        <ul className="absolute flex flex-col left-0 gap-2 bg-white py-2 shadow-md p-5">
                                            <li className="whitespace-nowrap">
                                                <Link className="" href="/coreOfferings">
                                                    <span className="text-black hover:text-[#d6ad6b] text-2sm font-semibold">Core Offerings</span>
                                                </Link>
                                                </li>
                                                <li className="whitspace-nowrap">
                                                <Link href="/governmentServices">
                                                    <span className="text-black hover:text-[#d6ad6b] text-2sm font-semibold">Government Services</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        )}
                                </div>
                            ) : (
                                <Link
                                    href={link.route}
                                    className={`hover:text-[#d6ad6b] transition duration-600 text-2sm font-semibold ${
                                        currentLink === link.route ? "text-[#d6ad6b]" : ""
                                    }`}
                                    onClick={() => setCurrentLink(link.route)}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                <div
                    className="md:hidden text-3xl cursor-pointer text-black"
                    onClick={handleOpenMobileMenu}
                >
                    {openMobileMenu ? <MdClose /> : <FiMenu />}
                </div>

                {/* Mobile View 
                {openMobileMenu && (
                    <ul className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-3 shadow-md">
                        <button
                            className="absolute top-5 right-5 bg-white p-2 text-4xl"
                            onClick={handleOpenMobileMenu}
                        >
                            <MdClose />
                        </button>
                        {navLinks.map((link) => (
                            <div className="text-[#ffb450]" key={link.id}>
                                <Link
                                    href={link.route}
                                    className={`hover:text-black transition duration-500 ${
                                        currentLink === link.route ? "text-black" : ""
                                    }`}
                                    onClick={() => setCurrentLink(link.route)}
                                >
                                    {link.name}
                                </Link>
                            </div>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
*/}
