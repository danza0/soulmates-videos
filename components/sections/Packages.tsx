"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CheckIcon from "@/components/icons/CheckIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import HDIcon from "@/components/icons/HDIcon";
import { PACKAGES } from "@/lib/constants";

export default function Packages() {
  return (
    <Section id="packages" variant="cream">
      <Container>
        <SectionHeading
          title="Our Packages"
          subtitle="Tailored experiences to capture your perfect day"
        />

        <div className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-3 gap-8 mt-12">
          {PACKAGES.map((pkg, index) => (
            <motion.article
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-border"
            >
              <div className="p-8">
                {pkg.badge && (
                  <span className="inline-block px-3 py-1 text-xs font-sans font-medium bg-rose-gold text-white rounded-full mb-4">
                    {pkg.badge}
                  </span>
                )}

                <h3 className="font-serif text-2xl text-charcoal mb-2">{pkg.name}</h3>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-serif text-4xl text-charcoal">
                    ${pkg.price.toLocaleString()}
                  </span>
                  <span className="font-sans text-sm text-warm-gray">CAD</span>
                </div>

                <div className="flex items-center gap-2 text-sm font-sans text-warm-gray mb-6">
                  <ClockIcon className="w-4 h-4" />
                  <span>{pkg.duration}</span>
                </div>

                <p className="font-sans text-warm-gray mb-6">{pkg.description}</p>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-sm text-charcoal">
                      <CheckIcon className="w-5 h-5 text-rose-gold flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="secondary" className="w-full">
                  <a href="#contact">Inquire Now</a>
                </Button>
              </div>

              <div className="px-8 py-4 bg-ivory border-t border-border flex items-center gap-2 text-sm font-sans text-warm-gray">
                <HDIcon className="w-4 h-4" />
                <span>HD Digital Delivery Included</span>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}