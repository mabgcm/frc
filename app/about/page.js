"use client"

export default function About() {
    return (
        <>
            <div className="container mx-auto py-16 px-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">About Frequency Coin</h1>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Frequency Coin (FRC) bridges blockchain innovation with the energy of
                    manifestation. We help individuals tokenize their thoughts, dreams,
                    and intentions into NFTs, empowering their reality through measurable
                    vibrations.
                </p>

                <img
                    src="https://via.placeholder.com/1200x600"
                    alt="People meditating or visualizing positive thoughts"
                    className="rounded-lg mb-6"
                />

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    To create a global vibration economy where positive intentions and
                    community empowerment drive real value on the blockchain.
                </p>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How It Works</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Create and mint NFTs (DreamNFTs, MindNFTs, etc.) using FRC.</li>
                    <li>Share your energy with the community and grow your vibration.</li>
                    <li>Use blockchain technology to store and track your intentions.</li>
                </ul>
            </div>
        </>
    );
}
