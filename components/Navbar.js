"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/frcBig.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <div className="flex items-center cursor-pointer">
                                <Image
                                    src={Logo}
                                    alt="Frequency Coin Logo"
                                    width={60}
                                    height={60}
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
                            className="relative w-12 h-12 flex items-center justify-center bg-transparent border-2 border-frcWhite rounded-full group transition-all duration-300 hover:border-frcPurple focus:outline-none focus:bg-transparent active:bg-transparent"
                            aria-label="Toggle Menu"
                        >
                            {/* Horizontal Lines */}
                            <span
                                className={`block absolute h-0.5 w-6 bg-frcWhite transform transition duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                                    } group-hover:bg-frcPurple`}
                            ></span>
                            <span
                                className={`block absolute h-0.5 w-6 bg-frcWhite transform transition duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
                                    } group-hover:bg-frcPurple`}
                            ></span>
                            <span
                                className={`block absolute h-0.5 w-6 bg-frcWhite transform transition duration-300 ease-in-out ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                                    } group-hover:bg-frcPurple`}
                            ></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-frcGray bg-opacity-90">
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
