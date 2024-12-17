"use client";
import { useState } from "react";
import Image from "next/image";
import contactImage from "../../public/images/contact-bg.jpg";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus(`Error: ${data.message}`);
            }
        } catch (error) {
            setStatus("Something went wrong. Please try again.");
        }
    };
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-frcGray text-frcWhite h-[60vh] flex items-center justify-center text-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-90"
                    style={{ backgroundImage: `url(${contactImage.src})` }}
                ></div>
                <div className="relative z-10 px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-frcPurple">
                        Contact <span className="text-frcBlue">Frequency Coin</span>
                    </h1>
                    <p className="text-lg text-frcWhite max-w-2xl mx-auto leading-relaxed">
                        Have questions, feedback, or want to connect with our team? Reach out and let's
                        amplify the energy together.
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-frcGray mb-10">
                        Connect with Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {/* Twitter */}
                        <a
                            href="https://twitter.com/FrequencyCoin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-lg shadow hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-frcGray opacity-85"
                        >
                            <Image src="/images/twitter-icon.png" alt="Twitter" width={60} height={60} className="mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-frcWhite mb-2">Twitter</h3>
                            <p className="text-frcWhite">Stay updated with news, launches, and events.</p>
                        </a>

                        {/* Telegram */}
                        <a
                            href="https://t.me/FrequencyCoinCommunity"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6 rounded-lg shadow hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-frcGray opacity-85"
                        >
                            <Image src="/images/telegram-icon.png" alt="Telegram" width={60} height={60} className="mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-frcWhite mb-2">Telegram</h3>
                            <p className="text-frcWhite">Join conversations and meet like-minded individuals.</p>
                        </a>

                        {/* Discord */}
                        <a
                            href="https://discord.gg/meDjjT2U"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-6  bg-frcGray rounded-lg shadow hover:shadow-lg hover:-translate-y-2 transition-all duration-300 opacity-85"
                        >
                            <Image src="/images/discord-icon.png" alt="Discord" width={60} height={60} className="mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-frcWhite mb-2">Discord</h3>
                            <p className="text-frcWhite">Connect with developers and participate in events.</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-frcGray mb-10">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:ring focus:ring-frcBlue"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:ring focus:ring-frcBlue"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:ring focus:ring-frcBlue bg-white text-gray-700 placeholder-gray-400"
                                placeholder="Write your message here..."
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-frcBlue text-frcWhite font-bold rounded-lg hover:bg-frcPurple transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                    {status && <p className="text-center text-gray-700 mt-6">{status}</p>}
                </div>
            </section>
        </>
    );
}
