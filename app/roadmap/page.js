"use client";
import roadmapImage from "../../public/images/roadmap-bg.jpg";

export default function Roadmap() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-frcGray text-frcWhite h-[50vh] md:h-[30vh] flex items-center justify-center text-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-90"
                    style={{
                        backgroundImage: `url(${roadmapImage.src})`,
                        animation: "bgShift 12s ease-in-out infinite",
                    }}
                ></div>
                <div className="relative z-10 px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-frcPurple">
                        Our <span className="text-frcBlue">Roadmap</span>
                    </h1>
                    <p className="text-lg text-frcWhite leading-relaxed max-w-3xl mx-auto">
                        A clear plan to build the <span className="font-bold">Frequency Ecosystem</span>. Explore the milestones and join us on this transformative journey.
                    </p>
                </div>
            </section>

            {/* Roadmap Phases */}
            <section className="bg-gradient-to-b from-white to-gray-100 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-frcGray mb-10 animate-fadeUp">
                        Development Milestones
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Phase 1 */}
                        <div className="p-6 bg-frcWhite shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">Phase 1: Q1 2025</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Release of the <span className="font-bold">whitepaper</span> to outline the platform's vision and technical framework. <span className="font-bold">Community building</span> efforts commence alongside initial marketing campaigns to foster awareness and attract early adopters. <span className="font-bold">Presale</span> and <span className="font-bold">exchange listing</span> to establish initial market presence and accessibility.
                            </p>
                        </div>
                        {/* Phase 2 */}
                        <div className="p-6 bg-frcWhite shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">Phase 2: Q2 2025</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Focus on building <span className="font-bold">liquidity</span> and <span className="font-bold">accessibility</span> through partnerships and decentralized exchange integration. Establishing the <span className="font-bold">ecosystem foundation</span> to ensure a robust infrastructure for future platform development.
                            </p>
                        </div>
                        {/* Phase 3 */}
                        <div className="p-6 bg-frcWhite shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">Phase 3: Q3 2025</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Launch of the <span className="font-bold">Beta Platform</span> with core functionalities, enabling users to create <span className="font-bold">projects</span> and track <span className="font-bold">funds</span>. Incorporating essential features like secure <span className="font-bold">fund distribution</span> and detailed <span className="font-bold">analytics</span> to optimize user experience.
                            </p>
                        </div>
                        {/* Phase 4 */}
                        <div className="p-6 bg-frcWhite shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">Phase 4: Q4 2025</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Complete platform launch with <span className="font-bold">advanced features</span>, including enhanced <span className="font-bold">user profiles</span> and <span className="font-bold">analytics tools</span>. Achieving <span className="font-bold">scalability</span> through <span className="font-bold">Layer-2 integration</span> and targeted efforts to onboard <span className="font-bold">NGOs</span> and <span className="font-bold">corporate partners</span>.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Call-to-Action */}
            <section className="bg-frcWhite text-center py-16">
                <h2 className="text-4xl font-bold mb-6 text-frcGray animate-fadeUp">
                    Be Part of the Journey
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeUp">
                    Follow the roadmap and contribute to building the future of financial aid with trust and transparency.
                </p>
                <a
                    href="/community"
                    className="inline-block px-6 py-3 bg-frcBlue text-frcWhite font-bold rounded-lg hover:bg-frcPurple hover:text-frcWhite hover:scale-105 transition-all duration-300 shadow-md"
                >
                    Join Our Community
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
