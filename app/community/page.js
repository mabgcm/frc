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
                        Empowering <span className="text-frcBlue">Communities</span> <br />Building<span className="text-frcBlue">Futures</span>
                    </h1>

                </div>
            </section>



            {/* Connect on Social Media */}
            <section className="bg-white py-16">

                <div className="mb-12 text-center">
                    <p className="text-gray-900 text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                        Connect, collaborate, and empower one another through the Frequency Coin ecosystem. Together, we can
                        redefine financial aid and provide a lifeline for those facing oppression, ensuring transparency, trust,
                        and global impact.
                    </p>
                </div>

                <div className="container mx-auto px-6 animate-fadeUp">
                    <h2 className="text-4xl font-bold text-center text-frcGray mb-10 animate-fadeUp">
                        Connect with Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {/* Twitter */}
                        <a
                            href="https://x.com/CoinFrequency"
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
                            href="https://t.me/frequency_coin"
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
                            href="https://discord.gg/AKJjUj8c"
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

            {/* Highlights Section */}
            <section className="py-16 bg-frcWhite">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-frcGray mb-10">
                        Community Highlights
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Highlight Cards */}
                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4 text-center">A Greater Good</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                The FRC community stands out by merging investment opportunities with meaningful impact, supporting those in need and creating a brighter future for all.
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4 text-center">Blockchain Awareness</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our community understands the transformative power of blockchain technology and its ability to foster transparency, security, and trust globally.
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4 text-center">Empowering the Oppressed</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Frequency Coin aims to provide financial tools for individuals and groups facing systemic oppression,
                                ensuring they have the resources to rebuild and thrive.
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4 text-center">Community-Driven Innovation</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Collaborate with like-minded individuals to drive change and support meaningful causes worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action */}
            <section className="bg-frcWhite text-frcGray py-16 text-center">
                <h2 className="text-4xl font-bold mb-6 animate-fadeUp">Be Part of the Revolution</h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-900 leading-relaxed animate-fadeUp">
                    Join a global movement that empowers the oppressed, supports the vulnerable, and redefines financial aid
                    through blockchain technology. Together, we can create a world built on trust, transparency, and compassion.
                </p>
                <a
                    href="https://t.me/FrequencyCoinCommunity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-frcPurple text-frcWhite font-bold rounded-lg hover:bg-frcGray hover:text-frcWhite hover:scale-105 transition-all duration-300 shadow-md"
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
