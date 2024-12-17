"use client";
import Image from "next/image";
import communityImage from "../../public/images/community-bg.jpg"; // Add this image for visual impact

export default function Community() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-frcGray text-frcWhite h-[60vh] flex items-center justify-center text-center">
                <div className="absolute inset-0 bg-cover bg-center opacity-90 " style={{ backgroundImage: `url(${communityImage.src})` }}></div>
                <div className="relative z-10 px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-frcPurple">
                        Join the <span className="text-frcBlue">Vibration Community</span>
                    </h1>
                    <p className="text-lg text-frcWhite leading-relaxed max-w-3xl mx-auto">
                        Connect, share, and amplify your energy with others as we build the first-ever
                        <span className="font-bold"> Vibration Economy</span> together.
                    </p>
                </div>
            </section>

            {/* Connect on Social Media */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-frcGray mb-10">
                        Connect with Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {/* Twitter */}
                        <a
                            href="https://twitter.com/FrequencyCoin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-lg shadow hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-frcGray opacity-85"
                        >
                            <Image src="/images/twitter-icon.png" alt="Twitter" width={60} height={60} className="mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-frcWhite mb-2">Twitter</h3>
                            <p className="text-frcWhite">Stay updated with news, launches, and events.</p>
                        </a>

                        {/* Telegram */}
                        <a
                            href="https://t.me/FrequencyCoinCommunity"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-lg shadow hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-frcGray opacity-85"
                        >
                            <Image src="/images/telegram-icon.png" alt="Telegram" width={60} height={60} className="mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-frcWhite mb-2">Telegram</h3>
                            <p className="text-frcWhite">Join conversations and meet like-minded individuals.</p>
                        </a>

                        {/* Discord */}
                        <a
                            href="https://discord.gg/meDjjT2U"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6  bg-frcGray rounded-lg shadow hover:shadow-lg hover:-translate-y-2 transition-all duration-300 opacity-85"
                        >
                            <Image src="/images/discord-icon.png" alt="Discord" width={60} height={60} className="mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-frcWhite mb-2">Discord</h3>
                            <p className="text-frcWhite">Connect with developers and participate in events.</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* Community Highlights */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-frcGray mb-10">
                        Community Highlights
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* User Story */}
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">Future Opportunities</h3>
                            <p className="text-gray-700 leading-relaxed">
                                The Frequency Coin community is growing! Soon, you’ll be able to mint your
                                <span className="font-bold"> DreamNFTs, MindNFTs,</span> and <span className="font-bold">WishNFTs</span> while connecting with like-minded innovators.
                                Be a part of the journey from the start!
                            </p>
                        </div>

                        {/* Community Events */}
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">Monthly Energy Events</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Join our <span className="font-bold">Energy Boost Challenges</span> where we come together to manifest intentions
                                and share success stories. Earn rewards and celebrate milestones!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action */}
            <section className="bg-frcWhite text-frcGray py-16 text-center">
                <h2 className="text-4xl font-bold mb-6">Be Part of the Revolution</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-900 leading-relaxed">
                    Join us and help build the world’s first <span className="font-bold">Vibration Economy</span>. Amplify your energy, share your dreams, and create real impact.
                </p>
                <a
                    href="https://t.me/FrequencyCoinCommunity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-frcBlue text-frcWhite font-bold rounded-lg hover:bg-frcPurple hover:text-frcWhite hover:scale-105 transition-all duration-300 shadow-md">
                    Join the Community
                </a>
            </section>
        </>
    );
}
