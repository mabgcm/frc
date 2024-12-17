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
                <div className="container mx-auto px-4 text-center">
                    {/* Logo */}
                    <div className="mb-4">
                        <Image
                            src={Logo}
                            alt="Frequency Coin Logo"
                            width={120}
                            height={120}
                            className="mx-auto"
                        />
                    </div>

                    {/* Slogan */}
                    <div className="mb-4">
                        <h3 className="text-2xl font-bold text-frcPurple mb-2">Frequency Coin</h3>
                        <p className="text-frcWhite">"Your Vibration, Your Reality"</p>
                    </div>

                    {/* Socials */}
                    <div className="flex justify-center space-x-8 mb-6">
                        {/* X (Twitter) */}
                        <a
                            href="https://twitter.com/CoinFrequency"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-frcWhite hover:text-frcBlue transition-all duration-300"
                        >
                            <FaXTwitter size={32} />
                        </a>
                        {/* Telegram */}
                        <a
                            href="https://t.me/frequency_coin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-frcWhite hover:text-frcBlue transition-all duration-300"
                        >
                            <FaTelegramPlane size={32} />
                        </a>
                        {/* Discord */}
                        <a
                            href="https://discord.gg/meDjjT2U"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-frcWhite hover:text-frcBlue transition-all duration-300"
                        >
                            <FaDiscord size={32} />
                        </a>
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
