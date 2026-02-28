"use client"

import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "iPhone User",
    content:
      "Got my iPhone 15 screen replaced in just 45 minutes. Genuine parts and the phone looks brand new. Highly recommend Alfa Cell Point!",
    rating: 5,
    color: "from-orange-500/5 to-accent/5",
  },
  {
    name: "Priya Deshmukh",
    role: "Regular Customer",
    content:
      "Been going to Alfa Cell Point for over 5 years now. They fixed my MacBook charging issue that two other shops couldn't. Very trustworthy.",
    rating: 5,
    color: "from-blue-500/5 to-primary/5",
  },
  {
    name: "Amit Patel",
    role: "Business Owner",
    content:
      "Purchased phones for my entire team from here. Great prices, genuine products, and excellent after-sales support. The best in Mira Road.",
    rating: 5,
    color: "from-emerald-500/5 to-emerald-600/5",
  },
  {
    name: "Sneha Kulkarni",
    role: "Student",
    content:
      "My phone fell in water and I thought it was gone. These guys recovered it within a day. Amazing service at very reasonable prices!",
    rating: 5,
    color: "from-indigo-500/5 to-indigo-600/5",
  },
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
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#2563eb_0.8px,transparent_0.8px)] [background-size:24px_24px]" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 mb-6"
          >
            <Quote className="h-6 w-6 text-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-none"
          >
            Trusted by the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Community</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base text-muted-foreground/80 leading-relaxed max-w-lg mx-auto"
          >
            Join thousands of satisfied neighbors who experience the highest standard of device care and service.
          </motion.p>
        </div>

        {/* Testimonials grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative flex flex-col p-8 rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-100`} />

              <div className="relative z-10 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                    >
                      <Star className="h-4 w-4 fill-accent text-accent" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-sm font-medium text-foreground/80 leading-relaxed mb-8 italic">
                  {`"${t.content}"`}
                </p>

                <div className="mt-auto pt-6 border-t border-border/40 flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent p-[1px]">
                      <div className="w-full h-full rounded-[0.9rem] bg-card flex items-center justify-center">
                        <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">
                          {t.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-card"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-black text-foreground tracking-tight">
                      {t.name}
                    </p>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
