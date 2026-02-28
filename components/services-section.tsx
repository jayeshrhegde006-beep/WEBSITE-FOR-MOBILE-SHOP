"use client"

import {
  Smartphone,
  Monitor,
  Cpu,
  ShoppingBag,
  Wrench,
  ArrowRight,
  Laptop,
  Bike,
} from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Smartphone,
    title: "Mobile Repair",
    description:
      "Expert repair for all smartphone brands. Screen replacement, battery swap, water damage recovery, and more.",
    highlights: ["Screen Repair", "Battery Replacement", "Charging Issues"],
    color: "from-blue-500/10 to-blue-600/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Cpu,
    title: "Apple Specialist",
    description:
      "Certified Apple product repair. iPhone, iPad, MacBook diagnostics and repairs using genuine parts.",
    highlights: ["iPhone Repair", "iPad Service", "MacBook Repair"],
    color: "from-slate-400/10 to-slate-500/10",
    iconColor: "text-slate-600",
  },
  {
    icon: Laptop,
    title: "Laptop Services",
    description:
      "Complete laptop repair solutions for all brands including Dell, HP, Lenovo, and Acer. Chip-level repairing available.",
    highlights: ["Chip-level Repair", "All Brands", "OS Installation"],
    color: "from-indigo-500/10 to-indigo-600/10",
    iconColor: "text-indigo-500",
  },
  {
    icon: ShoppingBag,
    title: "Mobile Sales",
    description:
      "Wide range of new and certified refurbished smartphones from all major brands at competitive prices.",
    highlights: ["New Phones", "Refurbished", "All Brands"],
    color: "from-emerald-500/10 to-emerald-600/10",
    iconColor: "text-emerald-500",
  },
  {
    icon: Monitor,
    title: "Computer Accessories",
    description:
      "Quality computer peripherals, cables, chargers, headphones, and all the accessories you need.",
    highlights: ["Chargers", "Cables", "Peripherals"],
    color: "from-amber-500/10 to-amber-600/10",
    iconColor: "text-amber-500",
  },
  {
    icon: Bike,
    title: "Door to Door Services",
    description:
      "Expert doorstep solutions for all your electronics. We collect your gadgets, perform professional repairs, and deliver them back safely to your location.",
    highlights: ["Quick Home Pickup", "Professional Logistics", "Safe Gadget Handling"],
    color: "from-rose-500/10 to-rose-600/10",
    iconColor: "text-rose-500",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-black tracking-[0.2em] uppercase text-primary/80 mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight text-balance leading-tight"
          >
            Premium Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Lifestyle</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base text-muted-foreground/80 leading-relaxed max-w-lg mx-auto"
          >
            Experience Mira Road's most advanced repair ecosystem. We blend 12 years of craftsmanship with cutting-edge diagnostics.
          </motion.p>
        </div>

        {/* Services grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative flex flex-col p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/50 border border-border/20 mb-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <service.icon className={`h-6 w-6 ${service.iconColor} group-hover:text-primary-foreground transition-colors duration-500`} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-[13px] text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-500">
                  {service.description}
                </p>

                <div className="mt-auto flex flex-col gap-2">
                  {service.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-2 text-[11px] font-bold text-muted-foreground/60 transition-colors duration-500"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary/40" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hero CTA bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-[2rem] blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
          <div className="relative flex flex-col sm:flex-row items-center justify-between bg-card/50 backdrop-blur-xl rounded-[2rem] border border-border/50 p-8 sm:px-10 gap-6 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-[-50%] left-[-10%] w-[40%] h-[200%] bg-primary/5 rotate-12 blur-3xl" />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5 relative z-10 text-center sm:text-left">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/20 border border-accent/20 shadow-inner">
                <Wrench className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground tracking-tight">
                  Premium Express Diagnostic
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Skip the queue. Most screens and batteries replaced in under 45 minutes.
                </p>
              </div>
            </div>

            <motion.a
              href="#book-repair"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 relative z-10"
            >
              Start Your Request
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
