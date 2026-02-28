"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle, Loader2 } from "lucide-react"

export function BookRepairSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="book-repair" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left info */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              Book Online
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
              Book a Repair
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Fill out the form and our team will get in touch with you within a
              few hours to confirm your appointment. Walk-ins are also welcome!
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Submit Your Details
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Tell us about your device and the issue you are facing.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-primary">2</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Get a Quote
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Our team will contact you with pricing and time estimates.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-primary">3</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Visit & Get Repaired
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Drop off your device or get it repaired while you wait.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Request Submitted!
                </h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Thank you! We will contact you shortly to confirm your repair
                  appointment.
                </p>
                <Button
                  className="mt-6"
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-foreground"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email (optional)
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">
                      Device Type
                    </label>
                    <Select required>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select device" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="iphone">iPhone</SelectItem>
                        <SelectItem value="ipad">iPad</SelectItem>
                        <SelectItem value="macbook">MacBook</SelectItem>
                        <SelectItem value="samsung">Samsung</SelectItem>
                        <SelectItem value="oneplus">OnePlus</SelectItem>
                        <SelectItem value="xiaomi">Xiaomi</SelectItem>
                        <SelectItem value="vivo">Vivo</SelectItem>
                        <SelectItem value="oppo">Oppo</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="model"
                      className="text-sm font-medium text-foreground"
                    >
                      Model
                    </label>
                    <Input
                      id="model"
                      placeholder="e.g. iPhone 15 Pro"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Service Needed
                  </label>
                  <Select>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="screen">Screen Replacement</SelectItem>
                      <SelectItem value="battery">
                        Battery Replacement
                      </SelectItem>
                      <SelectItem value="charging">Charging Issue</SelectItem>
                      <SelectItem value="water">Water Damage</SelectItem>
                      <SelectItem value="software">Software Issue</SelectItem>
                      <SelectItem value="other">Other / Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="issue"
                    className="text-sm font-medium text-foreground"
                  >
                    Describe the Issue
                  </label>
                  <Textarea
                    id="issue"
                    placeholder="Tell us what's wrong with your device..."
                    rows={3}
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 font-semibold"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Repair Request"
                  )}
                </Button>
                <p className="text-[11px] text-center text-muted-foreground">
                  We will contact you within a few hours to confirm.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
