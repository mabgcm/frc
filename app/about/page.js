"use client";
import Image from "next/image";
import aboutImage from "../../public/images/about-bg.jpg";
import communityImage from "../../public/images/community.jpg";
import { HiOutlineCubeTransparent } from "react-icons/hi2";
import { MdOutlinePrivateConnectivity } from "react-icons/md";
import { FaFileContract } from "react-icons/fa6";
import { RiUserCommunityFill } from "react-icons/ri";

export default function About() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-frcGray text-frcWhite h-[50vh] md:h-[30vh] flex items-center justify-center text-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-90"
                    style={{
                        backgroundImage: `url(${aboutImage.src})`,
                        animation: "bgShift 12s ease-in-out infinite",
                    }}
                ></div>
                <div className="relative z-10 px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-frcPurple animate-fadeUp">
                        About <span className="text-frcBlue">Frequency Coin</span>
                    </h1>
                </div>
            </section>

            <div className="container mx-auto py-16 px-6">
                {/* Introduction Section */}
                <section className="mb-12 text-center">
                    <p className="text-gray-900 text-xl leading-relaxed mb-8 max-w-3xl mx-auto animate-fadeUp">
                        Frequency Coin (FRC) is a blockchain-powered platform revolutionizing financial aid by ensuring transparency, security, and measurable impact. Built on trust and community-driven innovation, FRC connects donors and recipients through a secure, transparent ecosystem.
                    </p>
                </section>

                {/* Mission Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center animate-fadeUp">
                        Our Mission
                    </h2>
                    <p className="text-gray-700 text-xl leading-relaxed text-center max-w-4xl mx-auto animate-fadeUp">
                        To empower individuals and communities by bridging blockchain technology with financial aid. Frequency Coin ensures every donation is traceable, secure, and impactful, fostering a global ecosystem of trust and generosity.
                    </p>
                </section>

                {/* Features Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center animate-fadeUp">
                        Why Choose Frequency Coin?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Blockchain Transparency",
                                description:
                                    "Track every transaction securely on the blockchain. See the real-time impact of your donations.",
                                icon: <HiOutlineCubeTransparent />,
                                bgColor: "bg-blue-100",
                                iconColor: "text-blue-600",
                            },
                            {
                                title: "Secure and Private",
                                description:
                                    "Your identity and funds are protected with advanced encryption and privacy protocols.",
                                icon: <MdOutlinePrivateConnectivity />,
                                bgColor: "bg-green-100",
                                iconColor: "text-green-600",
                            },
                            {
                                title: "Smart Contracts",
                                description:
                                    "Automated fund management ensures donations reach the intended recipient only when goals are met.",
                                icon: <FaFileContract />,
                                bgColor: "bg-purple-100",
                                iconColor: "text-purple-600",
                            },
                            {
                                title: "Community Driven",
                                description:
                                    "Support meaningful projects and collaborate with a like-minded community to create change.",
                                icon: <RiUserCommunityFill />,
                                bgColor: "bg-yellow-100",
                                iconColor: "text-yellow-600",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className={`p-6 ${feature.bgColor} shadow-lg rounded-xl text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300`}
                            >
                                <div
                                    className={`mb-4 w-16 h-16 mx-auto flex items-center justify-center rounded-full ${feature.iconColor} bg-white shadow-md`}
                                >
                                    <div className="text-5xl">{feature.icon}</div>
                                </div>
                                <h3 className="text-xl font-bold text-frcGray mb-2">{feature.title}</h3>
                                <p className="text-gray-700">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Community Section */}
                <section className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6 animate-fadeUp">
                        A Trusted Community
                    </h2>
                    <p className="text-gray-700 text-xl leading-relaxed max-w-4xl mx-auto mb-8 animate-fadeUp">
                        Frequency Coin thrives on a supportive community and a commitment to innovation. Every donation and transaction is secure, traceable, and impactful, ensuring confidence for both donors and recipients.
                    </p>
                    <Image
                        src={communityImage}
                        alt="Community at Frequency Coin"
                        className="rounded-lg mx-auto shadow-lg"
                    />
                </section>

                {/* Whitepaper Section */}
                <section className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4 animate-fadeUp">
                        Learn More About Frequency Coin
                    </h2>
                    <p className="text-gray-700 text-lg mb-6 animate-fadeUp">
                        Explore the detailed whitepaper to understand our vision, mission, and roadmap in depth.
                    </p>
                    <a
                        href="/FRC_Whitepaper.pdf"
                        download
                        className="inline-block px-6 py-3 bg-frcPurple text-frcWhite font-bold rounded-lg hover:bg-frcBlue hover:scale-105 transition-all duration-300 shadow-md"
                    >
                        Download Whitepaper
                    </a>
                </section>
            </div>

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
        </div>
    );
}
