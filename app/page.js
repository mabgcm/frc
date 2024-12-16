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
      <section className="bg-frcWhite py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-frcGray mb-10">
            Unlock the Power of Your Intentions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Cards */}
            {[
              {
                title: "DreamNFT",
                description: "Tokenize your dreams and aspirations into NFTs that inspire and grow with community support.",
                image: "/images/dream-nft.jpg",
              },
              {
                title: "Astral Message",
                description: "Send intentions to the universe with Astral NFTs—measurable energy that resonates with others.",
                image: "/images/astral-nft.jpg",
              },
              {
                title: "MindNFT",
                description: "Transform thoughts into actionable goals stored as MindNFTs on the blockchain.",
                image: "/images/mind-nft.jpg",
              },
              {
                title: "WishNFT",
                description: "Tokenize heartfelt wishes and watch them gain energy through community support.",
                image: "/images/wish-nft.jpg",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-frcWhite shadow-lg rounded-xl text-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50"
                  style={{ backgroundImage: `url(${feature.image})` }}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-frcGray">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Call-to-Action */}
      <section className="bg-frcWhite py-16 text-center rounded-b-3xl">
        <h2 className="text-4xl font-extrabold mb-4 tracking-wide text-frcPurple">
          Join the <span className="text-frcPurple">Vibration Revolution</span>
        </h2>
        <p className="text-frcGray text-lg mb-6">
          Transform your dreams into reality. Explore the Frequency Coin Ecosystem today.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Roadmap Items */}
            {[
              {
                phase: "Phase 1: Q4 2024",
                description:
                  "Whitepaper release, website launch, and community building. Establish the foundation of the ecosystem.",
              },
              {
                phase: "Phase 2: Q1 2025",
                description:
                  "Token presale and exchange listing. Enable liquidity and token accessibility for the ecosystem.",
              },
              {
                phase: "Phase 3: Q2 2025",
                description:
                  "NFT minting platform beta release. Launch tools for DreamNFT, Astral Message, MindNFT, and WishNFT creation.",
              },
              {
                phase: "Phase 4: Q3 2025",
                description:
                  "Energy renewal and staking system launch. Empower users to renew NFT energy and earn staking rewards.",
              },
              {
                phase: "Phase 5: Q4 2025",
                description:
                  "Launch of the NFT marketplace. Facilitate trading and utility within the Frequency Coin ecosystem.",
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
