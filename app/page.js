"use client"
import Image from "next/image";
import Logo from "../public/frcBig.png"; // Import the logo

export default function Home() {
  return (
    <>

      <section className="relative h-screen flex items-center justify-center text-center text-frcWhite">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 -z-10"
          style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
        ></div>

        {/* Content */}
        <div className="max-w-5xl px-6 relative z-10">
          <div className="mb-6 flex justify-center">
            <Image
              src={Logo}
              alt="Frequency Coin Logo"
              width={250}
              height={250}
              className="animate-pulse"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-frcPurple leading-tight">
            Your Vibration, <br /> <span className="text-frcBlue">Your Reality</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Join the world’s first <span className="text-frcBlue">Vibration Economy</span>. Tokenize
            your dreams, thoughts, and intentions as NFTs to empower personal and
            collective growth.
          </p>
          <a
            href="/ecosystem"
            className="inline-block px-6 py-3 bg-frcBlue text-frcWhite font-bold rounded-lg hover:bg-frcPurple hover:text-frcWhite hover:scale-105 transition-all duration-300 shadow-md"
          >
            Explore the Ecosystem
          </a>
        </div>
      </section>



      {/* Key Features Section */}
      <section className="bg-frcGray py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-frcWhite mb-10">
            Unlock the Power of Your Intentions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Cards */}
            {[
              { title: "DreamNFT", description: "Tokenize your dreams and aspirations into NFTs that inspire and grow with community support." },
              { title: "Astral Message", description: "Send intentions to the universe with Astral NFTs—measurable energy that resonates with others." },
              { title: "MindNFT", description: "Transform thoughts into actionable goals stored as MindNFTs on the blockchain." },
              { title: "WishNFT", description: "Tokenize heartfelt wishes and watch them gain energy through community support." },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-frcWhite shadow-lg rounded-xl text-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-frcPurple">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-gradient-to-r from-frcBlue to-frcPurple text-frcWhite py-16 text-center rounded-b-3xl">
        <h2 className="text-4xl font-extrabold mb-4 tracking-wide">
          Join the <span className="text-gray-100">Vibration Revolution</span>
        </h2>
        <p className="text-lg mb-6">
          Transform your dreams into reality. Explore the Frequency Coin Ecosystem today.
        </p>
        <a
          href="/about"
          className="inline-block px-6 py-3 bg-white text-frcBlue font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-md"
        >
          Learn More
        </a>
      </section>


      {/* Roadmap Section */}
      <section className="bg-frcGray py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-frcWhite mb-10">
            Roadmap to the Future
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { phase: "Phase 1: Q1 2025", description: "Whitepaper launch and community building." },
              { phase: "Phase 2: Q2 2025", description: "Token presale and exchange listing." },
              { phase: "Phase 3: Q3 2025", description: "NFT minting platform beta release." },
            ].map((roadmap, index) => (
              <div className="p-6 bg-frcWhite rounded-lg text-center shadow-md transform hover:-translate-y-2 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-frcBlue">{roadmap.phase}</h3>
                <p className="text-gray-600 leading-relaxed">{roadmap.description}</p>
              </div>

            ))}
          </div>
        </div>
      </section>
    </>
  );
}
