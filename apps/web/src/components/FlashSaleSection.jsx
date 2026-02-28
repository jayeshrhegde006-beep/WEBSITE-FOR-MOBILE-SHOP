import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const FlashSaleSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Set target time to 2 hours from now
        const targetTime = new Date().getTime() + 2 * 60 * 60 * 1000;

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetTime - now;

            if (difference > 0) {
                setTimeLeft({
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            } else {
                clearInterval(timer);
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimeUnit = ({ value, label }) => (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
        >
            <div className="relative">
                <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-2xl"></div>
                <div className="relative bg-slate-900 border-2 border-yellow-500 rounded-2xl p-4 min-w-[80px] shadow-2xl">
                    <motion.span
                        key={value}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl font-bold text-white block text-center"
                    >
                        {String(value).padStart(2, '0')}
                    </motion.span>
                </div>
            </div>
            <span className="text-yellow-500 font-semibold mt-2 text-sm uppercase tracking-wider">{label}</span>
        </motion.div>
    );

    return (
        <section className="py-16 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    {/* Flash Sale Badge */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-flex items-center gap-2 bg-slate-900 px-6 py-3 rounded-full mb-6 shadow-2xl"
                    >
                        <Zap className="w-6 h-6 text-yellow-500 animate-pulse" />
                        <span className="text-white font-bold text-xl">FLASH SALE</span>
                        <Zap className="w-6 h-6 text-yellow-500 animate-pulse" />
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Limited Time Offer!
                    </h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Grab amazing deals on premium smartphones before time runs out
                    </p>

                    {/* Countdown Timer */}
                    <div className="flex justify-center gap-4 md:gap-8 mb-8">
                        <TimeUnit value={timeLeft.hours} label="Hours" />
                        <div className="text-5xl text-white font-bold self-center mb-8">:</div>
                        <TimeUnit value={timeLeft.minutes} label="Minutes" />
                        <div className="text-5xl text-white font-bold self-center mb-8">:</div>
                        <TimeUnit value={timeLeft.seconds} label="Seconds" />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-lg shadow-2xl transition-all border-2 border-white/20 hover:border-white/40"
                    >
                        Shop Flash Sale Now
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default FlashSaleSection;
