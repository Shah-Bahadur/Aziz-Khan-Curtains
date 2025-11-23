// This file contains SEO configuration and JSON-LD schema markup
// Add this to your HTML head or use in a SEO component

export const curtainsLPSEOConfig = {
  title: "Premium Curtains Dubai | Fast Installation 24-48 Hours | Aziz Khan",
  description: "2,000+ happy Dubai families. Premium blackout, motorized & sheer curtains installed in 24-48 hours. Free design consultation. Starting from AED 299. ⭐ 4.9/5 rated.",
  keywords: "curtains Dubai, blackout blinds Dubai, motorized curtains, roller blinds, office curtains Dubai, window treatments",
  
  // Open Graph for social sharing
  ogImage: "/home1.webp",
  ogType: "website",
  ogUrl: "https://azizkhancurtains.com/curtains",
  
  // Twitter Card
  twitterCard: "summary_large_image",
  twitterTitle: "Premium Curtains Dubai - Fast Installation",
  twitterDescription: "Professional curtains & blinds installed in 24-48 hours. Free consultation. Join 2,000+ happy Dubai families.",
};

// JSON-LD Structured Data
export const curtainsLPJsonLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://azizkhancurtains.com",
  "name": "Aziz Khan Curtains Dubai",
  "description": "Premium curtains, blinds and window treatments for Dubai homes and offices",
  "url": "https://azizkhancurtains.com",
  "telephone": "+971503635428",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dubai, UAE",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "image": "/home1.webp",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500"
  },
  "service": [
    {
      "@type": "Service",
      "name": "Premium Curtain Design & Installation",
      "description": "Expert design consultation + premium fabric selection + professional installation within 24-48 hours",
      "areaServed": "Dubai, UAE"
    },
    {
      "@type": "Service",
      "name": "Motorized Smart Curtain Systems",
      "description": "Smart home integrated motorized curtains and blinds"
    },
    {
      "@type": "Service",
      "name": "Blackout & Thermal Solutions",
      "description": "Energy-efficient blackout and thermal curtains"
    }
  ],
  "priceRange": "AED 299 - AED 5000+"
};

// FAQ Schema
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much do curtains cost in Dubai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Blackout Curtains start from AED 299/window, Motorized Curtains from AED 1,500/window. Most Dubai families spend AED 2,000-5,000 per room."
      }
    },
    {
      "@type": "Question",
      "name": "How long does installation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "24-48 hours from consultation to installation. Same-day quote available."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer guarantees?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! 100% Satisfaction Guarantee and 2-year product warranty."
      }
    }
  ]
};

// BreadcrumbList Schema
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://azizkhancurtains.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Curtains",
      "item": "https://azizkhancurtains.com/curtains"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Blackout Curtains",
      "item": "https://azizkhancurtains.com/curtains/blackout"
    }
  ]
};

// Product Schema
export const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Blackout Roller Blinds for Dubai Bedrooms",
    "description": "99.9% light-blocking blackout curtains with thermal insulation",
    "image": "/hcp1.webp",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "AED",
      "price": "299",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Smart Motorized Curtains & Blinds",
    "description": "Voice-controlled motorized curtains compatible with smart home systems",
    "image": "/hcp3.webp",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "AED",
      "price": "1500",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "180"
    }
  }
];

// SEO Content Keywords
export const seoKeywords = {
  primary: [
    "curtains Dubai",
    "blackout blinds Dubai",
    "motorized curtains Dubai",
    "roller blinds Dubai",
    "office curtains Dubai",
    "window treatments Dubai",
    "sheer curtains Dubai",
    "vertical blinds Dubai",
    "venetian blinds Dubai",
    "curtains installation Dubai"
  ],
  
  longTail: [
    "best curtains for Dubai bedrooms",
    "energy-efficient curtains Dubai",
    "fast curtain installation Dubai",
    "custom curtains Dubai 24 hours",
    "luxury curtains Dubai villas",
    "office blinds glare control",
    "motorized curtains smart home",
    "blackout curtains AC savings",
    "UV protection curtains Dubai",
    "affordable curtains Dubai"
  ],

  local: [
    "curtains Marina Dubai",
    "curtains Downtown Dubai",
    "curtains Jumeirah",
    "curtains Palm Jumeirah",
    "curtains Emirates Hills",
    "curtains Business Bay",
    "office blinds DIFC",
    "curtains Dubai Airport area"
  ]
};

// Meta Tags for HTML Head
export const metaTags = `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Premium Curtains Dubai | Fast Installation 24-48 Hours | Aziz Khan</title>
<meta name="description" content="2,000+ happy Dubai families. Premium blackout, motorized & sheer curtains installed in 24-48 hours. Free design consultation. Starting from AED 299. ⭐ 4.9/5 rated.">
<meta name="keywords" content="curtains Dubai, blackout blinds Dubai, motorized curtains, roller blinds, office curtains">

<!-- Open Graph -->
<meta property="og:title" content="Premium Curtains Dubai | Aziz Khan">
<meta property="og:description" content="Professional curtain installation in 24-48 hours. Free consultation. Join 2,000+ happy clients.">
<meta property="og:image" content="/home1.webp">
<meta property="og:url" content="https://azizkhancurtains.com/curtains">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Premium Curtains Dubai - Fast Installation">
<meta name="twitter:description" content="Professional curtains & blinds installed in 24-48 hours. Free consultation.">
<meta name="twitter:image" content="/home1.webp">

<!-- Canonical URL -->
<link rel="canonical" href="https://azizkhancurtains.com/curtains">

<!-- JSON-LD Schema -->
<script type="application/ld+json">
${JSON.stringify(curtainsLPJsonLD, null, 2)}
</script>

<script type="application/ld+json">
${JSON.stringify(faqSchema, null, 2)}
</script>
`;

export default {
  curtainsLPSEOConfig,
  curtainsLPJsonLD,
  faqSchema,
  breadcrumbSchema,
  productSchemas,
  seoKeywords,
  metaTags
};
