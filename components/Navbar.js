"use client"; // For client-side rendering in Next.js app router

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/frcBig.png"; // Replace 'logo.png' with your logo image file name

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-frcGray shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <div className="flex items-center cursor-pointer">
                                <Image
                                    src={Logo} // Path to your logo image
                                    alt="Frequency Coin Logo"
                                    width={60} // Adjust the width as needed
                                    height={60} // Adjust the height as needed
                                    className="mr-2"
                                />
                                <span className="text-2xl font-extrabold text-frcWhite">
                                    Frequency Coin
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-frcWhite hover:text-frcPurple transition">
                            Home
                        </Link>
                        <Link href="/about" className="text-frcWhite hover:text-frcPurple transition">
                            About
                        </Link>
                        <Link href="/ecosystem" className="text-frcWhite hover:text-frcPurple transition">
                            Ecosystem
                        </Link>
                        <Link href="/roadmap" className="text-frcWhite hover:text-frcPurple transition">
                            Roadmap
                        </Link>
                        <Link href="/community" className="text-frcWhite hover:text-frcPurple transition">
                            Community
                        </Link>
                        <Link href="/contact" className="text-frcWhite hover:text-frcPurple transition">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-frcWhite hover:text-frcPurple focus:outline-none"
                        >
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-frcGray">
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="block text-frcWhite hover:text-frcPurple px-3 py-2 rounded-md text-base font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setIsOpen(false)}
                            className="block text-frcWhite hover:text-frcPurple px-3 py-2 rounded-md text-base font-medium"
                        >
                            About
                        </Link>
                        <Link
                            href="/ecosystem"
                            onClick={() => setIsOpen(false)}
                            className="block text-frcWhite hover:text-frcPurple px-3 py-2 rounded-md text-base font-medium"
                        >
                            Ecosystem
                        </Link>
                        <Link
                            href="/roadmap"
                            onClick={() => setIsOpen(false)}
                            className="block text-frcWhite hover:text-frcPurple px-3 py-2 rounded-md text-base font-medium"
                        >
                            Roadmap
                        </Link>
                        <Link
                            href="/community"
                            onClick={() => setIsOpen(false)}
                            className="block text-frcWhite hover:text-frcPurple px-3 py-2 rounded-md text-base font-medium"
                        >
                            Community
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block text-frcWhite hover:text-frcPurple px-3 py-2 rounded-md text-base font-medium"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
