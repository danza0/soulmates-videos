"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import MapPinIcon from "@/components/icons/MapPinIcon";
import MailIcon from "@/components/icons/MailIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import VimeoIcon from "@/components/icons/VimeoIcon";
import { SITE_CONFIG } from "@/lib/constants";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", Object.fromEntries(formData));
      setSubmitStatus("success");
      form.reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" variant="ivory">
      <Container>
        <SectionHeading
          title="Get in Touch"
          subtitle="Let&apos;s create something beautiful together"
        />

        <div className="grid grid-cols-1 desktop:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-cream rounded-lg p-8">
              <h3 className="font-serif text-xl text-charcoal mb-6">Contact Info</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPinIcon className="w-5 h-5 text-rose-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-sans text-charcoal">{SITE_CONFIG.address.street}</p>
                    <p className="font-sans text-charcoal">
                      {SITE_CONFIG.address.city}, {SITE_CONFIG.address.province} {SITE_CONFIG.address.postal}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MailIcon className="w-5 h-5 text-rose-gold flex-shrink-0" />
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="font-sans text-charcoal hover:text-rose-gold transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-cream rounded-lg p-8">
              <h3 className="font-serif text-xl text-charcoal mb-6">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                  className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-white rounded-full text-charcoal hover:text-rose-gold hover:shadow-md transition-all"
                >
                  <FacebookIcon className="w-6 h-6" />
                </a>
                <a
                  href={SITE_CONFIG.social.vimeo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Vimeo page"
                  className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-white rounded-full text-charcoal hover:text-rose-gold hover:shadow-md transition-all"
                >
                  <VimeoIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg p-8 shadow-md border border-border space-y-6"
            >
              <div>
                <label htmlFor="name" className="block font-sans text-sm text-charcoal mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border font-sans text-charcoal focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-sans text-sm text-charcoal mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border font-sans text-charcoal focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-sans text-sm text-charcoal mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 rounded-lg border border-border font-sans text-charcoal focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold transition-colors"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-sans text-sm text-charcoal mb-2">
                  Tell Us About Your Day
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border font-sans text-charcoal focus:outline-none focus:border-rose-gold focus:ring-1 focus:ring-rose-gold transition-colors resize-none"
                  placeholder="Share the details of your wedding day, location, and any specific requests..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>

              {submitStatus === "success" && (
                <p className="font-sans text-sm text-green-600 text-center">
                  Thank you! We&apos;ll be in touch soon.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="font-sans text-sm text-red-600 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}