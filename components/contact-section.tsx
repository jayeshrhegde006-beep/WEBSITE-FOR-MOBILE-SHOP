import { Phone, MapPin, Clock, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    lines: ["9004009052", "9702198781"],
    action: "tel:9004009052",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    lines: [
      "Shop No. 11, Shirinley Regency,",
      "Near Cinemax PVR Theater,",
      "Beverly Park, Mira Road (E),",
      "Thane - 401107",
    ],
    action:
      "https://www.google.com/maps/search/Alfa+Cell+Point+Shirinley+Regency+Mira+Road",
  },
  {
    icon: Clock,
    label: "Working Hours",
    lines: ["Mon - Sat: 10:30 AM - 10:30 PM", "Sunday: 10:30 AM - 10:30 PM"],
  },
  {
    icon: Instagram,
    label: "Follow Us",
    lines: ["@alfacellpoint"],
    action: "https://www.instagram.com/alfacellpoint",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            Contact Us
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Visit our shop in Mira Road or give us a call. We are always happy
            to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="bg-card rounded-xl border border-border p-5 hover:border-primary/20 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <info.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground mb-1">
                      {info.label}
                    </p>
                    {info.lines.map((line) => (
                      <p
                        key={line}
                        className="text-xs text-muted-foreground leading-relaxed"
                      >
                        {line}
                      </p>
                    ))}
                    {info.action && (
                      <a
                        href={info.action}
                        target={info.action.startsWith("http") ? "_blank" : undefined}
                        rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-block mt-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        {info.label === "Call Us"
                          ? "Tap to call"
                          : info.label === "Visit Us"
                            ? "Get directions"
                            : info.label === "Follow Us"
                              ? "Open Instagram"
                              : ""}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Map embed */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-border bg-card min-h-[360px] relative">
            <iframe
              title="Alfa Cell Point Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.859!2d72.8543!3d19.2812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMira%20Road%20East%2C%20Thane!5e0!3m2!1sen!2sin!4v1710000000000"
              width="100%"
              height="100%"
              className="absolute inset-0"
              style={{ border: 0, minHeight: 360 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* CTA bar */}
        <div className="mt-10 bg-primary rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-lg font-bold text-primary-foreground">
              Need quick assistance?
            </h3>
            <p className="text-sm text-primary-foreground/80 mt-1">
              Chat with us on WhatsApp for instant support.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold shrink-0"
          >
            <a
              href="https://wa.me/919004009052?text=Hi%20Alfa%20Cell%20Point!%20I%20need%20help%20with%20my%20device."
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
