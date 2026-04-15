"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PlayIcon from "@/components/icons/PlayIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Megan & Hunter - Victoria",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
    full: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Jess & Dave - Tofino",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1887&auto=format&fit=crop",
    full: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Vishnu & Nadia - Victoria",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    full: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Claire & Michael - Nanaimo",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2071&auto=format&fit=crop",
    full: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Sarah & James - Tofino",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
    full: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Emily & Robert - Victoria",
    type: "image",
    thumbnail: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop",
    full: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const openLightbox = (item: typeof GALLERY_ITEMS[0]) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    document.body.style.overflow = "";
  };

  const goToPrevious = () => {
    if (!selectedItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedItem.id);
    const previousIndex = currentIndex === 0 ? GALLERY_ITEMS.length - 1 : currentIndex - 1;
    setSelectedItem(GALLERY_ITEMS[previousIndex]);
  };

  const goToNext = () => {
    if (!selectedItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedItem.id);
    const nextIndex = currentIndex === GALLERY_ITEMS.length - 1 ? 0 : currentIndex + 1;
    setSelectedItem(GALLERY_ITEMS[nextIndex]);
  };

  return (
    <Section id="gallery" variant="ivory">
      <Container>
        <SectionHeading
          title="Gallery"
          subtitle="Watch highlights from some of our favorite weddings"
        />

        <div className="grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 gap-4 mt-12">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => openLightbox(item)}
              className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-center justify-center">
                <PlayIcon className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.button>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={selectedItem.title}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-rose-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold"
              aria-label="Close gallery"
            >
              <CloseIcon className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-4 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-rose-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="w-8 h-8" />
            </button>

            <motion.img
              key={selectedItem.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={selectedItem.full}
              alt={selectedItem.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-4 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-rose-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-gold"
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-8 h-8" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-sans text-white text-sm">
              {GALLERY_ITEMS.findIndex((item) => item.id === selectedItem.id) + 1} / {GALLERY_ITEMS.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}