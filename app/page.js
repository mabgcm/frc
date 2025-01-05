"use client"
import Image from "next/image";
import Logo from "../public/frc_logo.png"; // Import the logo
import { HiOutlineCubeTransparent } from "react-icons/hi2";
import { MdOutlinePrivateConnectivity } from "react-icons/md";
import { FaFileContract } from "react-icons/fa6";
import { RiUserCommunityFill } from "react-icons/ri";
import Countdown from "@/components/presale";




export default function Home() {
  return (
    <>

      <section className="relative h-screen flex items-center justify-center text-center text-frcWhite  sm:py-32">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 -z-10"
          style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
        ></div>

        {/* Content */}
        <div className="max-w-5xl px-6 relative z-10 mt-16 md:mt-0">
          <div className="mb-6 flex justify-center mt-16 md:mt-0">
            <Image
              src={Logo}
              alt="Frequency Coin Logo"
              width={250}
              height={250}
              className="animate-pulse"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6" style={{ lineHeight: "1.2" }}>
            <span
              className="bg-gradient-to-r from-frcPurple via-frcBlue to-frcPurple text-transparent bg-clip-text animate-gradient"
              style={{
                animation: "gradient 4s linear infinite", // Faster animation
              }}
            >
              Secure Giving,
            </span>
            <br />
            <span
              className="text-frcBlue animate-dynamicFade"
              style={{
                animation: "dynamicFade 4s linear infinite", // Slightly faster fade-in-out effect
              }}
            >
              Transparent Impact
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Transform the way you give. With <span className="text-frcBlue">blockchain-powered transparency</span>, every donation is tracked and every dollar matters. Frequency Coin ensures that your contributions create a measurable impact while keeping your funds and identity safe.
          </p>
          <a
            href="/ecosystem"
            className="hidden sm:inline-block px-6 py-3 bg-frcBlue text-frcWhite font-bold rounded-lg hover:bg-frcPurple hover:text-frcWhite hover:scale-105 transition-all duration-300 shadow-md"
          >
            Explore the Ecosystem
          </a>
        </div>
      </section>

      <Countdown />



      <section className="bg-frcWhite py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-frcGray mb-10">
            Why Choose Frequency Coin?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Cards */}
            {[
              {
                title: "Blockchain Transparency",
                description:
                  "Track every transaction securely on the blockchain. See the real-time impact of your donations.",
                icon: <HiOutlineCubeTransparent />,
                bgColor: "bg-blue-100", // Light blue background
                iconColor: "text-blue-600", // Icon color
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
                className={`p-6 ${feature.bgColor} shadow-lg rounded-xl text-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
              >
                {/* Icon */}
                <div
                  className={`mb-4 w-16 h-16 mx-auto flex items-center justify-center rounded-full ${feature.iconColor} bg-white shadow-md`}
                >
                  <div className="text-5xl">{feature.icon}</div>
                </div>
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-frcGray">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Call-to-Action */}
      <section className="bg-frcWhite py-16 text-center rounded-b-3xl">
        <h2 className="text-4xl font-extrabold mb-4 tracking-wide text-frcPurple">
          Join the <span className="text-frcPurple">Future of Giving</span>
        </h2>
        <p className="text-frcGray text-lg mb-6">
          Make an impact with transparency and trust. Explore Frequency Coin today.
        </p>
        <a
          href="/about"
          className="inline-block px-6 py-3 bg-frcBlue text-frcWhite font-bold rounded-lg hover:bg-frcPurple hover:text-frcWhite hover:scale-105 transition-all duration-300 shadow-md"
        >
          Learn More
        </a>
      </section>


      {/* Roadmap Section */}
      <section className="bg-frcWhite py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-frcGray mb-10">
            Roadmap to the Future
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Roadmap Items */}
            {[
              {
                phase: "Phase 1: Q1 2025",
                description: "Whitepaper release, community building, and establishing the ecosystem foundation.",
              },
              {
                phase: "Phase 2: Q2 2025",
                description: "Token presale and exchange listing. Build liquidity and accessibility.",
              },
              {
                phase: "Phase 3: Q3 2025",
                description: "Beta platform launch with core functionalities, including project creation and fund tracking.",
              },
              {
                phase: "Phase 4: Q4 2025",
                description: "Complete platform launch with advanced features and enhanced scalability.",
              },
            ].map((roadmap, index) => (
              <div
                key={index}
                className="p-6 bg-frcGray rounded-lg text-center shadow-md transform hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-3 text-frcPurple">{roadmap.phase}</h3>
                <p className="text-gray-300 leading-relaxed">{roadmap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
