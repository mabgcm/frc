"use client"

export default function Contact() {
    return (
        <>
            <div className="container mx-auto py-16 px-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
                <p className="text-gray-600 mb-8">
                    Have questions? Reach out to us at:
                </p>

                <p className="text-lg text-gray-700">
                    📧 Email: <a href="mailto:info@frequencycoin.io" className="text-blue-600 hover:underline">info@frequencycoin.io</a>
                </p>
            </div>
        </>
    );
}
