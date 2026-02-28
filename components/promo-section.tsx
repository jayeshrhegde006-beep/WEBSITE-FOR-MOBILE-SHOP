"use client"

import { motion } from "framer-motion"
import { Sparkles, ArrowRight, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PromoSection() {
    return (
        <section className="relative py-12 lg:py-16 overflow-hidden bg-background">
            <div className="mx-auto max-w-7xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group"
                >
                    {/* Animated Glow Backdrop */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                    <div className="relative flex flex-col lg:flex-row items-center justify-between bg-card border border-border/50 rounded-[2.5rem] p-8 lg:p-12 gap-10 overflow-hidden shadow-2xl">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="flex-1 text-center lg:text-left relative z-10">
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6"
                            >
                                <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
                                <span className="text-[10px] font-black tracking-widest uppercase text-accent">
                                    First-Time Offer
                                </span>
                            </motion.div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight mb-2">
                                New Client Special
                            </h2>
                            <p className="text-xl lg:text-2xl font-bold text-accent mb-6 tracking-tight">
                                10–20% Off Your First Service
                            </p>
                            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Enjoy your first session at a reduced price. This exclusive offer is available to all new clients for a limited time.
                            </p>
                            <p className="mt-6 text-[11px] font-medium text-muted-foreground/50 uppercase tracking-widest">
                                * Valid for new clients only. Cannot be combined with other promotions.
                            </p>
                        </div>

                        <div className="flex flex-col items-center lg:items-end gap-6 relative z-10">
                            <div className="relative group/btn">
                                <Button
                                    asChild
                                    size="lg"
                                    className="h-16 px-10 bg-accent text-accent-foreground hover:bg-accent/90 rounded-2xl font-black text-lg shadow-xl shadow-accent/20 group-hover:scale-105 transition-all duration-300"
                                >
                                    <a href="#book-repair" className="flex items-center gap-3">
                                        Claim Your Discount
                                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </Button>
                                {/* Floating tags decoration */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg transform rotate-12"
                                >
                                    <Tag className="h-6 w-6 text-primary-foreground" />
                                </motion.div>
                            </div>

                            <div className="flex items-center gap-4 text-sm font-bold text-muted-foreground/60">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-card bg-secondary flex items-center justify-center text-[10px]">
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <span>Joined by 500+ new users this month</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
