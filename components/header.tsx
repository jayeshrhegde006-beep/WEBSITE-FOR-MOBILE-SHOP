"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Accessories", href: "#accessories" },
  { label: "Apple Repair", href: "#apple-repair" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
        : "bg-transparent"
        }`}
    >
      {/* Top bar */}
      <div className={`border-b border-primary/10 transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"}`}>
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between py-1.5 text-xs">
          <div className="flex items-center gap-4">
            <a
              href="tel:9004009052"
              className="flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span>9004009052</span>
            </a>
            <a
              href="tel:9702198781"
              className="hidden sm:flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span>9702198781</span>
            </a>
          </div>
          <div className="flex items-center gap-1 text-primary-foreground/80">
            <MapPin className="h-3 w-3" />
            <span className="hidden sm:inline">Mira Road (E), Thane</span>
            <span className="sm:hidden">Mira Road</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`mx-auto max-w-7xl px-4 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-20" : "h-28"}`}>
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Image
              src="/icon.svg"
              alt="Alfa Cell Point Icon"
              width={80}
              height={80}
              className={`transition-all duration-300 ${scrolled ? "h-12" : "h-16"} w-auto object-contain drop-shadow-xl`}
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-black tracking-tighter leading-[0.8] transition-all duration-300 ${scrolled ? "text-2xl" : "text-3xl"} ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              ALFA
            </span>
            <span className={`font-bold tracking-[0.3em] uppercase transition-all duration-300 ${scrolled ? "text-[10px]" : "text-xs"} ${scrolled ? "text-foreground/80" : "text-primary-foreground/80"}`}>
              CELL POINT
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${scrolled
                ? "text-foreground/70 hover:text-foreground hover:bg-secondary"
                : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-md"
          >
            <a href="#book-repair">Book a Repair</a>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
          >
            <a href="tel:9004009052">
              <Phone className="h-3.5 w-3.5 mr-1.5" />
              Call Now
            </a>
          </Button>
        </div>

        {/* Mobile nav */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className={`p-2 rounded-md transition-colors ${scrolled ? "text-foreground hover:bg-secondary" : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                aria-label="Open menu"
                suppressHydrationWarning
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-card p-0">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="p-5 border-b border-border">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src="/icon.svg"
                      alt="Alfa Cell Point Icon"
                      width={60}
                      height={60}
                      className="h-12 w-auto object-contain"
                    />
                    <div className="flex flex-col">
                      <span className="text-2xl font-black text-foreground leading-[0.8] tracking-tighter">
                        ALFA
                      </span>
                      <span className="text-[9px] font-bold text-foreground/70 tracking-[0.3em] uppercase">
                        CELL POINT
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4 gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary rounded-md transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="mt-auto p-5 flex flex-col gap-3 border-t border-border">
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <a href="#book-repair" onClick={() => setOpen(false)}>
                      Book a Repair
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:9004009052">
                      <Phone className="h-4 w-4 mr-2" />
                      Call 9004009052
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
