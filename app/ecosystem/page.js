"use client";
import Image from "next/image";
import ecoImage from "../../public/images/ecosystem-bg.jpg";
import dream from "../../public/images/dream-nft.jpg";
import astral from "../../public/images/astral-nft.jpg";
import mind from "../../public/images/mind-nft.jpg";
import wish from "../../public/images/wish-nft.jpg";


export default function Ecosystem() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-frcGray text-frcWhite h-[60vh] flex items-center justify-center text-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-90"
                    style={{ backgroundImage: `url(${ecoImage.src})` }}
                ></div>
                <div className="relative z-10 px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-frcPurple">
                        Explore the <span className="text-frcBlue">Frequency Ecosystem</span>
                    </h1>
                    <p className="text-lg text-frcWhite leading-relaxed max-w-3xl mx-auto">
                        Tokenize your <span className="font-bold">dreams</span>,
                        send <span className="font-bold">intentions</span> to the universe,
                        and transform <span className="font-bold">thoughts</span> into measurable digital assets.
                    </p>
                </div>
            </section>

            {/* Ecosystem Features */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-frcGray mb-10">
                        Key Elements of the Ecosystem
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* DreamNFT */}
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">DreamNFT</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Tokenize your dreams and aspirations. Share your biggest goals with the community and
                                watch them gain energy through <span className="font-bold">FRC contributions</span>.
                            </p>
                            <Image
                                src={dream}
                                alt="Dream visualization as NFTs"
                                className="mt-4 rounded-lg mx-auto"
                            />
                        </div>

                        {/* Astral Message */}
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">Astral Message NFT</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Send your <span className="font-bold">intentions</span> to the universe with symbolic "space transmissions" recorded
                                as NFTs. Amplify their impact with community support.
                            </p>
                            <Image
                                src={astral}
                                alt="Abstract visuals of sending messages to the universe"
                                className="mt-4 rounded-lg mx-auto"
                            />
                        </div>

                        {/* MindNFT */}
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">MindNFT</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Transform mental goals and intentions into actionable
                                <span className="font-bold"> digital assets</span>. Permanently store them on the blockchain.
                            </p>
                            <Image
                                src={mind}
                                alt="Goals transformed into blockchain assets"
                                className="mt-4 rounded-lg mx-auto"
                            />
                        </div>

                        {/* WishNFT */}
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">WishNFT</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Tokenize your heartfelt wishes and <span className="font-bold">watch them grow</span> as
                                others contribute energy to make them come true.
                            </p>
                            <Image
                                src={wish}
                                alt="Wishes stored as NFTs"
                                className="mt-4 rounded-lg mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action */}
            <section className="bg-white text-center py-16">
                <h2 className="text-4xl font-bold mb-6 text-frcGray">
                    Join the Revolution of Positive Vibration
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Be part of the <span className="font-bold">Frequency Ecosystem</span> where intentions meet
                    innovation and energy drives real value. Start tokenizing your reality today.
                </p>
                <a
                    href="/community"
                    className="inline-block px-6 py-3 bg-frcBlue text-frcWhite font-bold rounded-lg hover:bg-frcPurple hover:scale-105 transition-all duration-300 shadow-md"
                >
                    Explore the Community
                </a>
            </section>
        </>
    );
}
