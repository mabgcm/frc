import React, { useState, useEffect } from "react";

const Countdown = () => {
    // Presale başlangıç tarihi (UTC)
    const presaleDate = new Date("2025-01-23T07:00:00Z").getTime();

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = presaleDate - now;

            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            } else {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [presaleDate]);

    return (
        <section className="relative w-full bg-gradient-to-r from-frcBlue via-frcPurple to-frcBlue text-white py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-5xl font-bold mb-8 text-frcGray">🚀 Presale Countdown 🚀</h2>
                <div className="flex justify-center items-center space-x-8 text-2xl md:text-4xl font-bold">
                    <div className="flex flex-col items-center">
                        <span className="text-6xl">{timeLeft.days}</span>
                        <span>Days</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-6xl">{timeLeft.hours}</span>
                        <span>Hours</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-6xl">{timeLeft.minutes}</span>
                        <span>Minutes</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-6xl">{timeLeft.seconds}</span>
                        <span>Seconds</span>
                    </div>
                </div>


                {/* <a
                    href="https://www.pinksale.finance/launchpad/polygon/0xB87937D7EB00AA14Db3e153817A15C6F15DC92d6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-block px-10 py-4 bg-frcWhite text-frcBlue font-bold rounded-lg hover:bg-frcGray hover:text-white transition-all duration-300 shadow-lg"
                >
                    Join the Presale Now!
                </a> */}

                {timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds === 0 ? (
                    <a
                        href="https://www.pinksale.finance/launchpad/polygon/0xB87937D7EB00AA14Db3e153817A15C6F15DC92d6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-10 inline-block px-10 py-4 bg-frcWhite text-frcBlue font-bold rounded-lg hover:bg-frcGray hover:text-white transition-all duration-300 shadow-lg"
                    >
                        Join the Presale Now!
                    </a>
                ) : (
                    <p className="mt-10 text-xl">Get ready to join our presale and be part of the future of transparent giving!</p>
                )}
            </div>
        </section>
    );
};

export default Countdown;
