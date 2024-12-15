"use client"

export default function Roadmap() {
    return (
        <>
            <div className="container mx-auto py-16 px-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Roadmap</h1>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Phase 1: Foundation</h2>
                        <p className="text-gray-600">Whitepaper release, website launch, and initial community building.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Phase 2: Launch</h2>
                        <p className="text-gray-600">
                            Token presale, listing on exchanges, and NFT minting platform beta.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">Phase 3: Growth</h2>
                        <p className="text-gray-600">Global outreach, staking rewards, and marketplace launch.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
