import Image from "next/image"
import { Phone, MapPin, Instagram } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Accessories", href: "#accessories" },
  { label: "Apple Repair", href: "#apple-repair" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Book a Repair", href: "#book-repair" },
]

const services = [
  "Mobile Screen Repair",
  "Battery Replacement",
  "iPhone Repair",
  "iPad Repair",
  "MacBook Repair",
  "All Laptop Services",
  "Mobile Sales",
  "Computer Accessories",
  "Door to Door Service",
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/icon.svg"
                alt="Alfa Cell Point Icon"
                width={50}
                height={50}
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-background leading-[0.8] tracking-tighter">
                  ALFA
                </span>
                <span className="text-[10px] font-bold text-background/70 tracking-[0.3em] uppercase">
                  CELL POINT
                </span>
                <span className="text-[9px] font-medium text-background/30 tracking-widest uppercase mt-1">
                  Established 2012
                </span>
              </div>
            </div>
            <p className="text-sm text-background/60 leading-relaxed mb-5 max-w-xs">
              Your trusted mobile phone sales and repair destination in Mira
              Road since 2012. Expert service, genuine parts, fair prices.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/alfacellpoint"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-4 w-4 text-background/70" />
              </a>
              <a
                href="https://wa.me/919004009052"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Chat on WhatsApp"
              >
                <svg className="w-4 h-4 text-background/70" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-background mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-background mb-4 tracking-wide">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li
                  key={s}
                  className="text-sm text-background/60"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-semibold text-background mb-4 tracking-wide">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-background/50 mt-0.5 shrink-0" />
                <div className="text-sm text-background/60">
                  <a
                    href="tel:9004009052"
                    className="hover:text-background transition-colors block"
                  >
                    9004009052
                  </a>
                  <a
                    href="tel:9702198781"
                    className="hover:text-background transition-colors block"
                  >
                    9702198781
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-background/50 mt-0.5 shrink-0" />
                <p className="text-sm text-background/60 leading-relaxed">
                  Shop No. 11, Shirinley Regency,
                  <br />
                  Near Cinemax PVR Theater,
                  <br />
                  Beverly Park, Mira Road (E),
                  <br />
                  Thane - 401107
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/40">
            {`\u00A9 ${new Date().getFullYear()} Alfa Cell Point. All rights reserved.`}
          </p>
          <p className="text-xs text-background/40">
            Mobile Sales & Service Since 2012
          </p>
        </div>
      </div>
    </footer>
  )
}
