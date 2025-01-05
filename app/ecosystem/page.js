"use client";
import Image from "next/image";
import ecoImage from "../../public/images/ecosystem-bg.jpg";

export default function Ecosystem() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-frcGray text-frcWhite h-[30vh] flex items-center justify-center text-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-90"
                    style={{
                        backgroundImage: `url(${ecoImage.src})`,
                        animation: "bgShift 12s ease-in-out infinite",
                    }}
                ></div>
                <div className="relative z-10 px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-frcPurple">
                        Explore the <span className="text-frcBlue">Frequency Ecosystem</span>
                    </h1>
                    <p className="text-lg text-frcWhite leading-relaxed max-w-3xl mx-auto animate-fadeIn">
                        Empowering communities and redefining financial aid through blockchain-powered transparency, security, and trust.
                    </p>
                </div>
            </section>

            {/* About Ecosystem Section */}
            <section className="bg-gradient-to-b from-white to-gray-100 py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-frcGray mb-10 animate-fadeUp">
                        What Makes Our Ecosystem Unique?
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto text-center mb-8">
                        At the core of the Frequency Ecosystem is a belief in the power of collaboration and trust. By seamlessly integrating blockchain technology with real-world needs, we create a platform where transparency and impact are no longer optional but essential.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="transform hover:scale-105 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">Decentralized Trust</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Blockchain ensures that every transaction is secure and verifiable. Donors can trace their contributions while recipients are empowered with confidence.
                            </p>
                        </div>
                        <div className="transform hover:scale-105 transition-transform duration-300">
                            <h3 className="text-2xl font-bold text-frcPurple mb-4">Empowered Communities</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Our ecosystem thrives on collaboration. Individuals, NGOs, and communities work together to create lasting change through impactful projects.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-frcGray mb-10">
                        Core Features of the Ecosystem
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-frcGray text-frcWhite shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300">
                            <h3 className="text-2xl font-bold mb-4">Smart Contracts</h3>
                            <p>
                                Automating fund allocation ensures that donations are securely transferred only when project goals are met.
                            </p>
                        </div>
                        <div className="p-6 bg-frcGray text-frcWhite shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300">
                            <h3 className="text-2xl font-bold mb-4">Real-Time Transparency</h3>
                            <p>
                                Blockchain records every transaction, offering real-time insights into fund allocation and project progress.
                            </p>
                        </div>
                        <div className="p-6 bg-frcGray text-frcWhite shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300">
                            <h3 className="text-2xl font-bold mb-4">Privacy First</h3>
                            <p>
                                Protecting both donor and recipient identities with advanced encryption ensures privacy without compromising trust.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action */}
            <section className="bg-frcWhite text-center py-16">
                <h2 className="text-4xl font-bold mb-6 text-frcGray animate-fadeUp">
                    Join the Frequency Revolution
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeUp">
                    Be a part of the ecosystem that combines technology, transparency, and trust to create impactful change.
                </p>
                <a
                    href="/community"
                    className="inline-block px-6 py-3 bg-frcBlue text-frcWhite font-bold rounded-lg hover:bg-frcPurple hover:text-frcWhite hover:scale-105 transition-all duration-300 shadow-md"
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
          .animate-fadeIn {
            animation: fadeIn 1.5s ease-in-out both;
          }
          .animate-fadeUp {
            animation: fadeUp 1.5s ease-in-out both;
          }
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
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
