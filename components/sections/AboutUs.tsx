"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { TEAM_MEMBERS } from "@/lib/constants";
import AwardIcon from "@/components/icons/AwardIcon";

export default function AboutUs() {
  return (
    <Section id="about" variant="ivory">
      <Container>
        <SectionHeading
          title="About Us"
          subtitle="Where every love story becomes a cinematic masterpiece"
        />

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="font-sans text-warm-gray text-lg leading-relaxed">
              Based in Victoria, BC, Soulmates Wedding Videography specializes in
              professional wedding film production across Vancouver Island. Since
              2010, we&apos;ve had the privilege of capturing dozens of unique love
              stories, from intimate beach ceremonies to grand estate celebrations.
            </p>
            <p className="font-sans text-warm-gray text-lg leading-relaxed">
              Our approach is collaborative and personalized. We work closely with
              each couple to understand their vision, style, and the story they
              want to tell. The result is a wedding film that genuinely reflects who
              you are as a couple.
            </p>
            <div className="flex items-center gap-3 p-4 bg-cream rounded-lg">
              <AwardIcon className="w-8 h-8 text-rose-gold" />
              <div>
                <p className="font-serif text-charcoal font-medium">
                  Award-Winning Videography
                </p>
                <p className="font-sans text-sm text-warm-gray">
                  2014 Wedding Video Award - Sash &amp; Satin
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-6"
          >
            <h3 className="font-serif text-2xl text-charcoal">Our Team</h3>
            <div className="space-y-4">
              {TEAM_MEMBERS.map((member, index) => (
                <div key={index} className="flex gap-4 p-4 bg-cream rounded-lg">
                  <div className="w-16 h-16 bg-champagne rounded-full flex items-center justify-center">
                    <span className="font-serif text-2xl text-charcoal">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-serif text-lg text-charcoal">{member.name}</p>
                    <p className="font-sans text-sm text-rose-gold">{member.role}</p>
                    <p className="font-sans text-sm text-warm-gray mt-1">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}