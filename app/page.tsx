import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PromoSection } from "@/components/promo-section"
import { ServicesSection } from "@/components/services-section"
import { AccessoriesSection } from "@/components/accessories-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { AppleRepairSection } from "@/components/apple-repair-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BookRepairSection } from "@/components/book-repair-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PromoSection />
        <ServicesSection />
        <AccessoriesSection />
        <WhyChooseSection />
        <AppleRepairSection />
        <TestimonialsSection />
        <BookRepairSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
