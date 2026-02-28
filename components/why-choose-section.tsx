"use client"

import { Shield, Clock, Award, Users, ThumbsUp, Zap } from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
  {
    icon: Award,
    title: "12+ Years Experience",
    description:
      "Serving Mira Road since 2012 with reliable mobile repair and sales services.",
    stat: "2012",
    statLabel: "Est.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Shield,
    title: "Genuine Parts Only",
    description:
      "We use only genuine and OEM-quality parts for every repair we perform.",
    stat: "100%",
    statLabel: "Genuine",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Most repairs completed within 30-60 minutes. Get back to your life quickly.",
    stat: "30",
    statLabel: "Min Avg.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Users,
    title: "Happy Customers",
    description:
      "Building a loyal customer base through honest service and fair pricing.",
    stat: "10K+",
    statLabel: "Customers",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
  },
  {
    icon: ThumbsUp,
    title: "Warranty on Repairs",
    description:
      "Every repair comes with a service warranty so you can have peace of mind.",
    stat: "30",
    statLabel: "Day Warranty",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Zap,
    title: "Expert Technicians",
    description:
      "Skilled professionals trained to handle the latest devices and issues.",
    stat: "5+",
    statLabel: "Experts",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
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
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

export function WhyChooseSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden text-balance">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] font-black tracking-[0.2em] uppercase text-accent mb-4 block"
          >
            Why Alfa Cell
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1]"
          >
            The Mira Road Standard in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-rose-500">Tech Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base text-muted-foreground/80 leading-relaxed"
          >
            We don't just fix devices; we restore your connection to the world.
            Experience why 10,000+ neighbors trust us with their digital lives.
          </motion.p>
        </div>

        {/* Reasons grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={item}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group relative bg-card/60 backdrop-blur-md rounded-[2rem] border border-border/50 p-8 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <div className={`flex items-center justify-center w-14 h-14 rounded-2xl ${reason.bgColor} border border-border/5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                  <reason.icon className={`h-6 w-6 ${reason.color}`} />
                </div>
                <div className="text-right">
                  <span className={`text-3xl font-black tracking-tighter ${reason.color} leading-none block`}>
                    {reason.stat}
                  </span>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.1em] mt-1">
                    {reason.statLabel}
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3 tracking-tight group-hover:text-accent transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">
                {reason.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-6 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-border/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
