"use client";

import { SITE_CONFIG } from "@/lib/constants";
import FacebookIcon from "@/components/icons/FacebookIcon";
import VimeoIcon from "@/components/icons/VimeoIcon";
import MailIcon from "@/components/icons/MailIcon";

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-charcoal text-white py-16">
      <div className="mx-auto max-w-7xl px-4 mobile:px-6 tablet:px-8">
        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-12 text-center tablet:text-left">
          <div>
            <h3 className="font-serif text-2xl mb-4">{SITE_CONFIG.name}</h3>
            <p className="font-sans text-taupe text-sm">
              Luxury wedding videography serving Vancouver Island since 2010
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Contact</h4>
            <div className="flex tablet:flex-col items-center tablet:items-start gap-4 font-sans text-sm">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-white hover:text-rose-gold transition-colors"
              >
                <MailIcon className="w-4 h-4" />
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Follow Us</h4>
            <div className="flex items-center justify-center tablet:justify-start gap-4">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-rose-gold transition-colors"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a
                href={SITE_CONFIG.social.vimeo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Vimeo page"
                className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-rose-gold transition-colors"
              >
                <VimeoIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-gray text-center">
          <p className="font-sans text-sm text-taupe">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}