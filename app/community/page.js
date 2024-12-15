"use client"

export default function Community() {
    return (
        <>
            <div className="container mx-auto py-16 px-6">
                {/* Header Section */}
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Community</h1>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Be part of the Frequency Coin movement. Connect with like-minded individuals, share your dreams, and amplify your energy.
                    </p>
                </section>

                {/* Social Media Links */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
                    <a
                        href="https://twitter.com/FrequencyCoin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 bg-blue-100 rounded-lg shadow hover:bg-blue-200 transition"
                    >
                        <img
                            src="https://via.placeholder.com/50"
                            alt="Twitter logo"
                            className="mx-auto mb-4"
                        />
                        <h2 className="text-xl font-semibold text-gray-800">Follow Us on Twitter</h2>
                        <p className="text-gray-600">Stay updated with announcements and news.</p>
                    </a>

                    <a
                        href="https://t.me/FrequencyCoinCommunity"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 bg-green-100 rounded-lg shadow hover:bg-green-200 transition"
                    >
                        <img
                            src="https://via.placeholder.com/50"
                            alt="Telegram logo"
                            className="mx-auto mb-4"
                        />
                        <h2 className="text-xl font-semibold text-gray-800">Join Telegram</h2>
                        <p className="text-gray-600">Chat with the community and ask questions.</p>
                    </a>

                    <a
                        href="https://discord.gg/FrequencyCoin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-6 bg-purple-100 rounded-lg shadow hover:bg-purple-200 transition"
                    >
                        <img
                            src="https://via.placeholder.com/50"
                            alt="Discord logo"
                            className="mx-auto mb-4"
                        />
                        <h2 className="text-xl font-semibold text-gray-800">Join Our Discord</h2>
                        <p className="text-gray-600">Connect with developers and fans of FRC.</p>
                    </a>
                </section>

                {/* Community Highlights */}
                <section>
                    <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">Community Highlights</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-white rounded-lg shadow">
                            <h3 className="text-2xl font-bold text-blue-600 mb-4">User Stories</h3>
                            <p className="text-gray-700">
                                "I created my first DreamNFT, and the energy support I received from the community was amazing! My intentions feel more real now."
                                — <span className="font-semibold">User A</span>
                            </p>
                        </div>

                        <div className="p-6 bg-white rounded-lg shadow">
                            <h3 className="text-2xl font-bold text-blue-600 mb-4">Community Events</h3>
                            <p className="text-gray-700">
                                Join us every month for **Energy Boost Challenges** where we collectively focus on manifesting intentions and sharing success stories.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="text-center mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join the Frequency Revolution?</h2>
                    <p className="text-gray-700 mb-6">
                        Connect, share, and amplify your energy with the Frequency Coin community.
                    </p>
                    <a
                        href="https://t.me/FrequencyCoinCommunity"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
                    >
                        Join the Community
                    </a>
                </section>
            </div>
        </>
    );
}
