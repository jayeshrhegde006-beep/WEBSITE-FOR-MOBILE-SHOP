"use client"

import { motion } from "framer-motion"
import {
    Zap,
    ShieldCheck,
    Headphones,
    Smartphone,
    Watch,
    Usb,
    ArrowRight,
    Star
} from "lucide-react"
import { Button } from "@/components/ui/button"

const accessories = [
    {
        title: "Premium Protection",
        category: "Cases & Glass",
        description: "Military-grade drop protection with sleek, premium finishes and sapphire-infused screen guards.",
        icon: ShieldCheck,
        color: "from-blue-500 to-cyan-400",
        price: "From ₹499"
    },
    {
        title: "Hi-Res Audio",
        category: "Wireless Gear",
        description: "Immersive sound experience with noise-canceling earbuds and premium Bluetooth speakers.",
        icon: Headphones,
        color: "from-purple-500 to-pink-500",
        price: "From ₹1,299"
    },
    {
        title: "Power & Speed",
        category: "Charging Solutions",
        description: "GaN chargers and MFi-certified cables for the fastest, safest charging for any device.",
        icon: Zap,
        color: "from-orange-400 to-rose-500",
        price: "From ₹799"
    },
    {
        title: "Smart Ecosystem",
        category: "Wearables",
        description: "Premium straps, protective cases, and chargers for your smartest companions.",
        icon: Watch,
        color: "from-emerald-400 to-teal-500",
        price: "From ₹299"
    }
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const item = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export function AccessoriesSection() {
    return (
        <section id="accessories" className="py-24 lg:py-32 bg-secondary/20 relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[11px] font-black tracking-[0.3em] uppercase text-accent mb-4 block"
                        >
                            The Collection
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[0.9] mb-6"
                        >
                            Premium <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-rose-500">Mobile Accessories</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-muted-foreground leading-relaxed font-medium"
                        >
                            Don't settle for ordinary. Elevate your device with our curated selection
                            of high-performance accessories from the world's leading brands.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-2xl h-14 px-8 font-bold">
                            <a href="https://wa.me/919004009052?text=Hi%20Alfa%20Cell%20Point!%20Interested%20in%20premium%20accessories.">
                                View Full Catalog
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {accessories.map((acc) => (
                        <motion.div
                            key={acc.title}
                            variants={item}
                            whileHover={{ y: -10 }}
                            className="group relative bg-card/40 backdrop-blur-xl border border-border/50 rounded-[2.5rem] p-8 overflow-hidden hover:border-accent/30 transition-all duration-500"
                        >
                            {/* Card Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${acc.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${acc.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                    <acc.icon className="h-7 w-7 text-white" />
                                </div>

                                <div className="mb-2">
                                    <span className="text-[10px] font-black tracking-widest uppercase text-accent/80">
                                        {acc.category}
                                    </span>
                                    <h3 className="text-2xl font-black text-foreground tracking-tight mt-1">
                                        {acc.title}
                                    </h3>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed mb-8 group-hover:text-foreground/80 transition-colors">
                                    {acc.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-lg font-black text-foreground">
                                        {acc.price}
                                    </span>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Top Rated</span>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Corner Shape */}
                            <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-gradient-to-br from-transparent to-white/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Brand Scroller / Trust Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 py-10 border-t border-border/50 flex flex-wrap items-center justify-center gap-10 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
                >
                    {['Apple', 'Samsung', 'Spigen', 'Anker', 'Sony', 'OnePlus'].map((brand) => (
                        <span key={brand} className="text-xl font-black tracking-tighter text-foreground">
                            {brand}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
