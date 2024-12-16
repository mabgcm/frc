"use client";
import Image from "next/image";
import imag from "../../public/images/community.jpg";

export default function About() {
    return (
        <div className="bg-white">
            <div className="container mx-auto py-16 px-6">
                {/* Header Section */}
                <h1 className="text-5xl font-bold text-gray-900 mb-8 mt-20 text-center">
                    What is <span className="text-frcPurple">Frequency Coin</span>?
                </h1>
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

                {/* How It Works */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-frcPurple mb-3 text-center">
                                Step 1: Mint NFTs
                            </h3>
                            <p className="text-gray-600 text-lg text-center">
                                Tokenize your dreams, thoughts, and intentions into{" "}
                                <span className="font-bold">DreamNFTs</span>,{" "}
                                <span className="font-bold">MindNFTs</span>, or{" "}
                                <span className="font-bold">WishNFTs</span> using Frequency Coin (FRC).
                            </p>
                        </div>
                        {/* Step 2 */}
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-frcPurple mb-3 text-center">
                                Step 2: Share Your Energy
                            </h3>
                            <p className="text-gray-600 text-lg text-center">
                                Connect your intentions with the community, amplify your energy, and create
                                measurable vibrations across the ecosystem.
                            </p>
                        </div>
                        {/* Step 3 */}
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-frcPurple mb-3 text-center">
                                Step 3: Empower and Earn
                            </h3>
                            <p className="text-gray-600 text-lg text-center">
                                Grow your vibrations, <span className="font-bold">trade NFTs</span>, and
                                participate in the energy staking system to earn rewards and create value.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Community & Innovation */}
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

                    {/* Image Placeholder */}
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
