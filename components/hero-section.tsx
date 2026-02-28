"use client"

import Image from "next/image"
import { Phone, ArrowRight, Shield, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.1])

  return (
    <section
      ref={targetRef}
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#050810]"
    >
      {/* Dynamic Background */}
      <motion.div
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-phones.jpg"
          alt="Premium smartphones and repair tools"
          fill
          className="object-cover opacity-60"
          priority
          quality={90}
        />
        {/* Advanced Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050810] via-[#050810]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-transparent to-transparent" />
      </motion.div>

      {/* Animated Abstract Shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 w-full py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 mb-8 shadow-2xl"
          >
            <div className="relative">
              <Award className="h-4 w-4 text-accent" />
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-accent rounded-full blur-sm"
              />
            </div>
            <span className="text-[10px] font-black tracking-[0.2em] text-white/90 uppercase">
              Trusted Excellence Since 2012
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.45, 0.32, 0.9] }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight text-balance"
          >
            Crafting
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-orange-400 to-primary">Digital Perfection</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-8 text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl font-medium"
          >
            Mira Road's premier destination for smartphone artistry and expert diagnostics. Where technology meets 12 years of mastery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-12 flex flex-col sm:flex-row gap-5"
          >
            <Button
              asChild
              size="lg"
              className="group relative h-14 px-10 bg-accent text-accent-foreground hover:bg-accent/90 rounded-2xl font-bold text-base shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] overflow-hidden transition-all duration-300 active:scale-95"
            >
              <a href="#book-repair">
                <span className="relative z-10 flex items-center gap-2">
                  Book a Repair
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group h-14 px-10 border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 rounded-2xl font-bold text-base transition-all duration-300 active:scale-95"
            >
              <a href="tel:9004009052">
                <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Direct Access
              </a>
            </Button>
          </motion.div>

          {/* Premium Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 grid grid-cols-2 sm:flex sm:items-center gap-8 border-t border-white/5 pt-10"
          >
            {[
              { icon: Shield, label: "Certified Components", sub: "100% Genuine" },
              { icon: Clock, label: "Express Turnaround", sub: "Most < 45 min" },
              { icon: Award, label: "Master Technicians", sub: "12+ Years Exp." },
            ].map(({ icon: Icon, label, sub }, i) => (
              <div
                key={label}
                className="flex items-center gap-4 group cursor-default"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-[11px] font-black text-white/90 uppercase tracking-wider">{label}</p>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hero Scroll Progress */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase text-white/30 font-black">
          Discover
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  )
}
