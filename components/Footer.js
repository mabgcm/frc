"use client";
import Image from "next/image";
import Logo from "../public/frcBig.png"; // Ensure this path is correct
import { FaDiscord, FaTelegramPlane } from "react-icons/fa"; // Telegram icon
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter) icon

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="bg-frcGray text-frcWhite py-8">
                <div className="container mx-auto px-6">
                    {/* Footer Top */}
                    <div className="flex flex-col md:flex-row items-center justify-between pb-6 mb-6 border-b border-gray-700">
                        {/* Slogan (Left) */}
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <h3 className="text-2xl font-bold text-frcPurple mb-2">Frequency Coin</h3>
                            <p className="text-gray-400">"Your Vibration, Your Reality"</p>
                            <div>
                                <Image
                                    src={Logo}
                                    alt="Frequency Coin Logo"
                                    width={180}
                                    height={180}
                                    className="mx-auto"
                                />
                            </div>
                        </div>

                        {/* Logo (Center) */}
                        {/* <div className="mb-4 md:mb-0">
                            <Image
                                src={Logo}
                                alt="Frequency Coin Logo"
                                width={180}
                                height={180}
                                className="mx-auto"
                            />
                        </div> */}

                        {/* Socials (Right) */}
                        <div className="flex space-x-8">
                            {/* X (Twitter) */}
                            <a
                                href="https://twitter.com/CoinFrequency"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-frcWhite hover:text-frcPurple transition-all duration-300"
                            >
                                <FaXTwitter size={32} />
                            </a>
                            {/* Telegram */}
                            <a
                                href="https://t.me/frequency_coin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-frcWhite hover:text-frcPurple transition-all duration-300"
                            >
                                <FaTelegramPlane size={32} />
                            </a>
                            {/* Discord */}
                            <a
                                href="https://discord.gg/meDjjT2U"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-frcWhite hover:text-frcPurple transition-all duration-300"
                            >
                                <FaDiscord size={32} />
                            </a>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="text-center text-white">
                        {/* <p className="text-sm">
                            Token Address (ERC-20):{" "}
                            <span className="font-semibold text-frcPurple">
                                0x1234567890abcdef1234567890abcdef12345678
                            </span>
                        </p> */}
                        <p className="text-xs mt-2">&copy; 2024 Frequency Coin. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
