import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const capabilities = [
  "iPhone screen replacement (all models)",
  "iPad screen & battery repair",
  "MacBook diagnostics & repair",
  "Water damage recovery",
  "Logic board micro-soldering",
  "Genuine & OEM-quality parts",
  "Face ID & Touch ID calibration",
  "Data recovery services",
]

export function AppleRepairSection() {
  return (
    <section id="apple-repair" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[540px]">
            <Image
              src="/images/apple-repair.jpg"
              alt="Expert technician repairing an iPhone"
              fill
              className="object-cover"
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.03_250/0.6)] to-transparent" />
            {/* Floating badge */}
            <div className="absolute bottom-5 left-5 bg-card/95 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.97 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.89C10.1 6.87 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">Apple Specialist</p>
                  <p className="text-[11px] text-muted-foreground">Certified Repairs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Apple Repair Specialist
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight leading-tight text-balance">
              Your Trusted Apple
              <br />
              Repair Experts
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We specialize in Apple device repairs with years of hands-on
              experience. Whether it{"'"}s a cracked iPhone screen, a slow iPad,
              or a malfunctioning MacBook, our technicians deliver quality repairs
              at fair prices.
            </p>

            {/* Capabilities */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {capabilities.map((cap) => (
                <div
                  key={cap}
                  className="flex items-start gap-2.5"
                >
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 mt-0.5 shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/80">{cap}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                <a href="#book-repair">
                  Book Apple Repair
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:9004009052">Get a Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
