import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, RefreshCw, Wrench, Headphones, Watch, CreditCard } from 'lucide-react';

const ServicesOverview = () => {
    const services = [
        {
            icon: Smartphone,
            title: 'New Smartphones',
            description: 'Latest flagship phones from top brands',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: RefreshCw,
            title: 'Refurbished Phones',
            description: 'Certified pre-owned devices at great prices',
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: Wrench,
            title: 'Phone Repair',
            description: 'Expert repairs with genuine parts',
            color: 'from-yellow-500 to-orange-500',
        },
        {
            icon: Headphones,
            title: 'Accessories',
            description: 'Premium cases, chargers & more',
            color: 'from-purple-500 to-pink-500',
        },
        {
            icon: Watch,
            title: 'Smart Watches',
            description: 'Latest wearable technology',
            color: 'from-red-500 to-rose-500',
        },
        {
            icon: CreditCard,
            title: 'EMI Options',
            description: 'Easy installment plans available',
            color: 'from-indigo-500 to-violet-500',
        },
    ];

    return (
        <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Our Services
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Everything you need for your mobile experience, all in one place
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="group relative"
                            >
                                {/* Glassmorphism Card */}
                                <div className="relative p-6 rounded-2xl bg-slate-800/50 backdrop-blur-md border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden">
                                    {/* Gradient Background on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                                    {/* Glow Effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/0 via-yellow-500/20 to-yellow-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>

                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm">{service.description}</p>
                                    </div>

                                    {/* Gold Accent Line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
