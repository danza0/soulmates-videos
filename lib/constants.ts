export const SITE_CONFIG = {
  name: "Soulmates Wedding Videography",
  description: "Luxury wedding videography services in Victoria, BC and Vancouver Island since 2010",
  email: "info@soulmatesvideos.com",
  phone: "(250) 888-8888",
  address: {
    street: "780 Kings Rd",
    city: "Victoria",
    province: "BC",
    postal: "V8T 5A2",
    country: "Canada",
  },
  social: {
    facebook: "https://www.facebook.com/pages/Soulmates-Wedding-Videography/100368746689985",
    vimeo: "https://vimeo.com/soulmatesvideos",
  },
};

export const PACKAGES = [
  {
    id: "wedding-film",
    name: "A Wedding Film",
    price: 2195,
    badge: "Most Popular",
    description:
      "Our most complete package captures every magical moment from your special day, creating a cinematic story you'll treasure forever.",
    duration: "Up to 10 hours",
    features: [
      "1 videographer",
      "60-90 minute feature film",
      "5-10 minute highlights video",
      "Preparations coverage",
      "Travel with wedding party",
      "Full speeches video",
      "HD digital delivery",
    ],
  },
  {
    id: "highlights",
    name: "Highlights Video",
    price: 1495,
    badge: null,
    description:
      "A stylized, fun, and professional overview of your wedding day, perfect for sharing with family and friends.",
    duration: "Up to 6 hours",
    features: [
      "1 videographer",
      "15-20 minute finished video",
      "Ceremony highlights",
      "Reception highlights",
      "Well wishes from guests",
      "HD digital delivery",
    ],
  },
  {
    id: "ceremony",
    name: "The Ceremony",
    price: 1695,
    badge: null,
    description:
      "Focused coverage of your ceremony with multi-camera setup, ensuring every vow and moment is beautifully captured.",
    duration: "Up to 4 hours",
    features: [
      "1 videographer",
      "25-45 minute finished film",
      "Multi-camera coverage",
      "HD digital delivery",
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    names: "Megan & Hunter Jakes",
    location: "Victoria, BC",
    quote:
      "We were thoroughly impressed with the wedding video Chris and Soulmates produced for us. He was committed to ensuring that he knew our vision and naturally engaged our family and friends throughout the day.",
  },
  {
    id: 2,
    names: "Jess & Dave",
    location: "Tofino, BC",
    quote:
      "Congratulations from Sash and Satin to Soulmates Wedding Videography on winning the best wedding video of the week award for Jess & Dave's wedding in Tofino, BC",
    award: "2014 Wedding Video Award - Sash & Satin",
  },
  {
    id: 3,
    names: "Vishnu & Nadia Singh",
    location: "Victoria, BC",
    quote:
      "The production value of the video we received from Soulmates was excellent, and the use of multiple cameras for our wedding ceremony captured moments we will enjoy watching for years to come.",
  },
  {
    id: 4,
    names: "Claire Stockdill",
    location: "Victoria, BC",
    quote:
      "I'm not quite sure how to thank you. These videos exceeded all of my expectations. Thank you for capturing our day so perfectly!! They will be cherished for many years to come.",
  },
  {
    id: 5,
    names: "Sue Burrows",
    location: "Victoria, BC",
    quote:
      "Chris Jaycox and Soulmates recorded and crafted a beautiful video of my daughter and her husband's wedding. Chris truly listened to what the bride and groom wanted to create their Happily Ever After memory.",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Chris Jaycox",
    role: "Videographer | Editor",
    email: "chris@soulmatesvideos.com",
    bio: "Founder and award-winning producer, Chris brings over a decade of experience capturing love stories across Vancouver Island.",
  },
  {
    name: "Rian Plante",
    role: "Videographer",
    email: "info@soulmatesvideos.com",
    bio: "Rian's keen eye for detail and easygoing personality makes him a perfect addition to any wedding team.",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];