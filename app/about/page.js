"use client";
import Image from "next/image";
import imag from "../../public/images/community.jpg";
import Link from "next/link";
import aboutImage from "../../public/images/about-bg.jpg";

export default function About() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-frcGray text-frcWhite h-[60vh] flex items-center justify-center text-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-90"
                    style={{ backgroundImage: `url(${aboutImage.src})` }}
                ></div>
                <div className="relative z-10 px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-frcPurple">
                        What is <span className="text-frcBlue">Frequency Coin</span>?
                    </h1>
                </div>
            </section>
            <div className="container mx-auto py-16 px-6">
                {/* Header Section */}
                <p className="text-gray-900 text-center text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
                    Frequency Coin (FRC) combines blockchain innovation with the limitless power of
                    energy and manifestation. Our mission is to create a{" "}
                    <span className="font-bold">vibration economy</span>, empowering users to tokenize
                    their dreams, thoughts, and intentions into NFTs that resonate with real value and
                    measurable impact.
                </p>

                {/* Vision Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center">
                        Our Vision
                    </h2>
                    <p className="text-gray-700 text-xl leading-relaxed text-center max-w-4xl mx-auto">
                        We aim to establish a <span className="font-bold">global ecosystem</span> where
                        individuals can manifest their intentions into reality using{" "}
                        <span className="font-bold">Frequency Coin (FRC)</span>. By bridging the
                        metaphysical world of thoughts and energy with blockchain technology, we’re
                        building a future where positive vibrations drive real-world value.
                    </p>
                </section>

                {/* Tokenomics Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
                        Tokenomics
                    </h2>
                    <p className="text-gray-700 text-xl text-center mb-6 max-w-4xl mx-auto">
                        The Frequency Coin (FRC) token is the backbone of our ecosystem, powering NFT
                        creation, staking rewards, and energy renewal.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
                            <h3 className="text-frcPurple font-bold text-lg">Community Rewards</h3>
                            <p className="text-gray-600 text-sm">50% - For NFT interactions & staking</p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
                            <h3 className="text-frcPurple font-bold text-lg">Development & Marketing</h3>
                            <p className="text-gray-600 text-sm">20% - Platform growth & promotion</p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
                            <h3 className="text-frcPurple font-bold text-lg">Reserve & Liquidity</h3>
                            <p className="text-gray-600 text-sm">15% - Ensures market liquidity</p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
                            <h3 className="text-frcPurple font-bold text-lg">Team & Advisors</h3>
                            <p className="text-gray-600 text-sm">10% - Rewards for core contributors</p>
                        </div>
                        <div className="p-4 bg-gray-100 rounded-lg shadow-md text-center">
                            <h3 className="text-frcPurple font-bold text-lg">Energy Renewal Fund</h3>
                            <p className="text-gray-600 text-sm">5% - Incentives for energy boosts</p>
                        </div>
                    </div>
                </section>

                {/* Whitepaper Download */}
                <section className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                        Learn More in Our Whitepaper
                    </h2>
                    <p className="text-gray-700 text-lg mb-6">
                        Explore the full details of our tokenomics, roadmap, and ecosystem.
                    </p>
                    <Link
                        href="/FRC_Whitepaper.pdf"
                        download
                        target="_blank"
                        className="inline-block px-6 py-3 bg-frcPurple text-frcWhite font-bold rounded-lg hover:bg-frcBlue hover:scale-105 transition-all duration-300 shadow-md"
                    >
                        Download Whitepaper
                    </Link>
                </section>

                {/* Community Section */}
                <section>
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center">
                        Community and Innovation
                    </h2>
                    <p className="text-gray-700 text-xl leading-relaxed text-center max-w-4xl mx-auto mb-8">
                        At the heart of Frequency Coin lies a{" "}
                        <span className="font-bold">supportive community</span> and a commitment to
                        innovation. By leveraging blockchain’s transparency and security, FRC ensures
                        that every user’s dreams and intentions are{" "}
                        <span className="font-bold">protected, measurable, and impactful</span>.
                    </p>
                    <Image
                        src={imag}
                        alt="Community and blockchain innovation"
                        className="rounded-lg mx-auto shadow-lg"
                    />
                </section>
            </div>
        </div>
    );
}
