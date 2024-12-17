"use client";
import roadmapImage from "../../public/images/roadmap-bg.jpg"; // Add a roadmap background image

export default function Roadmap() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-frcGray text-frcWhite h-[60vh] flex items-center justify-center text-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-90"
                    style={{ backgroundImage: `url(${roadmapImage.src})` }}
                ></div>
                <div className="relative z-10 px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-frcPurple">
                        Our <span className="text-frcBlue">Roadmap</span>
                    </h1>
                    <p className="text-lg text-frcWhite leading-relaxed max-w-3xl mx-auto">
                        A clear plan to bring the <span className="font-bold">Frequency Ecosystem</span> to life.
                        Explore our milestones and join the journey towards global adoption.
                    </p>
                </div>
            </section>

            {/* Roadmap Phases */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-frcGray mb-10">
                        Our Development Timeline
                    </h2>

                    <div className="grid grid-cols-1 gap-8">
                        {/* Phase 1 */}
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">Phase 1: Q4 2024</h3>
                            <p className="text-gray-700 leading-relaxed">
                                The foundation of the <span className="font-bold">Frequency Ecosystem</span> is established.
                                Key milestones include the release of the whitepaper, launch of the official website, and
                                initial community-building efforts through social platforms and outreach. This phase sets the
                                stage for growth and adoption.
                            </p>
                        </div>

                        {/* Phase 2 */}
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">Phase 2: Q1 2025</h3>
                            <p className="text-gray-700 leading-relaxed">
                                The <span className="font-bold">token presale</span> is launched to provide early access to
                                Frequency Coin supporters. Following the presale, FRC will be listed on decentralized and centralized exchanges,
                                enabling liquidity and accessibility. Users will be able to participate actively in the ecosystem.
                            </p>
                        </div>

                        {/* Phase 3 */}
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">Phase 3: Q2 2025</h3>
                            <p className="text-gray-700 leading-relaxed">
                                The beta version of the <span className="font-bold">NFT minting platform</span> goes live. Users
                                will gain access to tools for creating and minting DreamNFTs, Astral Message NFTs, MindNFTs, and WishNFTs.
                                This marks the first major functional release of the ecosystem, allowing users to tokenize their dreams,
                                thoughts, and wishes on the blockchain.
                            </p>
                        </div>

                        {/* Phase 4 */}
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">Phase 4: Q3 2025</h3>
                            <p className="text-gray-700 leading-relaxed">
                                The <span className="font-bold">Energy Renewal System</span> and staking functionalities are launched.
                                Users can renew the energy of their NFTs, ensuring their goals and intentions remain active within
                                the ecosystem. Additionally, a staking mechanism allows users to earn rewards by staking their Frequency Coin tokens.
                            </p>
                        </div>

                        {/* Phase 5 */}
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">Phase 5: Q4 2025</h3>
                            <p className="text-gray-700 leading-relaxed">
                                The <span className="font-bold">NFT Marketplace</span> is launched, facilitating seamless trading
                                of DreamNFTs, Astral Messages, MindNFTs, and WishNFTs. Users can buy, sell, and interact within
                                the ecosystem, driving adoption and utility for Frequency Coin.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action */}
            <section className="bg-white text-center py-16">
                <h2 className="text-4xl font-bold mb-6 text-frcGray">
                    Stay Connected and Join the Journey
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Be part of the <span className="font-bold">vibration revolution</span> as we build a better future,
                    step by step. Follow our roadmap and contribute to the growth of Frequency Coin.
                </p>
                <a
                    href="/community"
                    className="inline-block px-6 py-3 bg-frcBlue text-frcWhite font-bold rounded-lg hover:bg-frcPurple hover:scale-105 transition-all duration-300 shadow-md"
                >
                    Join Our Community
                </a>
            </section>
        </>
    );
}