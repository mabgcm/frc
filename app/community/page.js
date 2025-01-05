"use client";
import Image from "next/image";
import communityImage from "../../public/images/community.jpg";

export default function Community() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-frcGray text-frcWhite h-[50vh] md:h-[30vh] flex items-center justify-center text-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-90"
                    style={{
                        backgroundImage: `url(${communityImage.src})`,
                        animation: "bgShift 12s ease-in-out infinite",
                    }}
                ></div>
                <div className="relative z-10 px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-frcPurple animate-fadeUp">
                        Join the <span className="text-frcBlue">Frequency Community</span>
                    </h1>
                    <p className="text-lg text-frcWhite leading-relaxed max-w-3xl mx-auto animate-fadeUp">
                        Connect, collaborate, and empower each other through the Frequency Coin ecosystem. Together, we can redefine financial aid with transparency and trust.
                    </p>
                </div>
            </section>

            {/* Connect on Social Media */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-frcGray mb-10 animate-fadeUp">
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
                            <Image
                                src="/images/twitter-icon.png"
                                alt="Twitter"
                                width={60}
                                height={60}
                                className="mx-auto mb-4"
                            />
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
                            <Image
                                src="/images/telegram-icon.png"
                                alt="Telegram"
                                width={60}
                                height={60}
                                className="mx-auto mb-4"
                            />
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
                            <Image
                                src="/images/discord-icon.png"
                                alt="Discord"
                                width={60}
                                height={60}
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-xl font-bold text-frcWhite mb-2">Discord</h3>
                            <p className="text-frcWhite">Connect with developers and participate in events.</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* Community Highlights */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-frcGray mb-10 animate-fadeUp">
                        Community Highlights
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* User Story */}
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">A Growing Network</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Our community is expanding every day! From donors to project creators, Frequency Coin is connecting individuals and fostering trust through blockchain technology.
                            </p>
                        </div>

                        {/* Community Events */}
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">Empowering Events</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Participate in virtual meetups, Q&A sessions, and exclusive workshops that empower members to maximize their impact and deepen their understanding of blockchain technology.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action */}
            <section className="bg-frcWhite text-frcGray py-16 text-center">
                <h2 className="text-4xl font-bold mb-6 animate-fadeUp">Be Part of the Revolution</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-900 leading-relaxed animate-fadeUp">
                    Join us and help redefine financial aid through blockchain technology. Together, we can create transparency, trust, and a global impact.
                </p>
                <a
                    href="https://t.me/FrequencyCoinCommunity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-frcBlue text-frcWhite font-bold rounded-lg hover:bg-frcPurple hover:scale-105 transition-all duration-300 shadow-md"
                >
                    Join the Community
                </a>
            </section>

            {/* Custom Animations */}
            <style jsx>{`
        @keyframes bgShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-fadeUp {
          animation: fadeUp 1.5s ease-in-out both;
        }
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </>
    );
}
