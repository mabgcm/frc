"use client"; // For client-side rendering in Next.js app router

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-frcGray shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <span className="text-2xl font-extrabold text-frcPurple cursor-pointer flex items-center">
                                <div className="rounded-full bg-frcBlue p-2 mr-2">
                                    <span className="text-frcWhite">FRC</span>
                                </div>
                                <span className="text-frcWhite">Frequency Coin</span>
                            </span>
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
                        <Link href="/" className="block text-frcWhite hover:text-frcPurple px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </Link>
                        <Link href="/about" className="block text-frcWhite hover:text-frcPurple px-3 py-2 rounded-md text-base font-medium">
                            About
                        </Link>
                        <Link href="/ecosystem" className="block text-frcWhite hover:text-frcPurple px-3 py-2 rounded-md text-base font-medium">
                            Ecosystem
                        </Link>
                        <Link href="/roadmap" className="block text-frcWhite hover:text-frcPurple px-3 py-2 rounded-md text-base font-medium">
                            Roadmap
                        </Link>
                        <Link href="/community" className="block text-frcWhite hover:text-frcPurple px-3 py-2 rounded-md text-base font-medium">
                            Community
                        </Link>
                        <Link href="/contact" className="block text-frcWhite hover:text-frcPurple px-3 py-2 rounded-md text-base font-medium">
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
