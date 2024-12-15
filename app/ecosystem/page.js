"use client"

export default function Ecosystem() {
    return (
        <>
            <div className="container mx-auto py-16 px-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">The Frequency Ecosystem</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* DreamNFT */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">DreamNFT</h2>
                        <p className="text-gray-600 mb-4">
                            Tokenize your dreams and aspirations into immutable NFTs. Share
                            your biggest goals with the community.
                        </p>
                        <img
                            src="https://via.placeholder.com/400x250"
                            alt="Dreams represented as futuristic digital assets"
                            className="rounded-lg"
                        />
                    </div>

                    {/* Astral Message */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Astral Message NFT</h2>
                        <p className="text-gray-600 mb-4">
                            Send your intentions to the universe. Astral Message NFTs store
                            your energy vibrations on the blockchain.
                        </p>
                        <img
                            src="https://via.placeholder.com/400x250"
                            alt="Abstract visuals of sending energy to the universe"
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
