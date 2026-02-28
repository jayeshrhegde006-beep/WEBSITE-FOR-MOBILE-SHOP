import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Wrench, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    const phoneCards = [
        {
            name: 'iPhone 15 Pro',
            image: 'https://images.unsplash.com/photo-1695048133021-be2def43f3b2',
            color: 'from-blue-500/20 to-purple-500/20',
        },
        {
            name: 'Galaxy S24 Ultra',
            image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569',
            color: 'from-purple-500/20 to-pink-500/20',
        },
        {
            name: 'OnePlus 12',
            image: 'https://images.unsplash.com/photo-1492156644550-2f5145d33cbf',
            color: 'from-pink-500/20 to-orange-500/20',
        },
    ];

    return (
        <section className="relative min-h-[600px] overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1699424031801-a51372e0975c"
                    alt="Mobile phones background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80"></div>
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 rounded-full"
                        >
                            <span className="text-yellow-500 font-semibold text-sm">Premium Mobile Excellence</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                        >
                            Buy Latest Phones &{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                                Get Expert Repairs
                            </span>{' '}
                            in One Place
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-300 text-lg"
                        >
                            Discover the latest smartphones, professional repair services, and premium accessories all under one roof.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button
                                onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-all"
                            >
                                <ShoppingBag className="w-5 h-5 mr-2" />
                                Shop Now
                            </Button>
                            <Button
                                onClick={() => window.scrollTo({ top: 1400, behavior: 'smooth' })}
                                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-6 text-lg rounded-lg border border-yellow-500/50 hover:border-yellow-500 transition-all"
                            >
                                <Wrench className="w-5 h-5 mr-2" />
                                Book Repair
                            </Button>
                            <Button
                                onClick={() => navigate('/')}
                                className="bg-transparent hover:bg-slate-800 text-white font-semibold px-8 py-6 text-lg rounded-lg border border-slate-700 hover:border-yellow-500/50 transition-all"
                            >
                                <RefreshCw className="w-5 h-5 mr-2" />
                                Trade-In
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Animated Phone Cards */}
                    <div className="relative h-[500px] hidden lg:block">
                        {phoneCards.map((phone, index) => (
                            <motion.div
                                key={phone.name}
                                initial={{ opacity: 0, y: 100, rotate: -10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    rotate: 0,
                                    x: index * 30,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.6 + index * 0.2,
                                    type: 'spring',
                                    stiffness: 100,
                                }}
                                whileHover={{ scale: 1.05, rotate: 5, zIndex: 10 }}
                                className={`absolute top-${index * 20} left-${index * 20} w-64 h-96 rounded-2xl overflow-hidden shadow-2xl cursor-pointer`}
                                style={{
                                    top: `${index * 60}px`,
                                    left: `${index * 40}px`,
                                }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${phone.color} backdrop-blur-sm`}></div>
                                <img
                                    src={phone.image}
                                    alt={phone.name}
                                    className="w-full h-full object-cover mix-blend-overlay"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-white font-bold text-xl mb-2">{phone.name}</h3>
                                    <div className="w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
                                </div>
                                {/* Gold Glow Effect */}
                                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-xl"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
