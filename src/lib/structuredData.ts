export const musicalStructuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Second Opinion - Upstream Kerstmusical",
  "description": "Een transformerende kerstmusical die perspectieven uitdaagt en harten opent voor de ware betekenis van hoop, verlossing en tweede kansen.",
  "image": [
    "https://secondopinion.upstream.nl/images/second-opinion-poster.jpg"
  ],
  "startDate": "2025-12-20T19:30",
  "endDate": "2025-12-22T21:30",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Gebouw 055",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Condorweg 1",
      "addressLocality": "Apeldoorn",
      "postalCode": "7332 AC",
      "addressCountry": "NL"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "Upstream",
    "url": "https://secondopinion.upstream.nl/about"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "url": "https://secondopinion.upstream.nl/contact"
  },
  "performer": [
    {
      "@type": "Person",
      "name": "Sarah Matthews"
    },
    {
      "@type": "Person", 
      "name": "Michael Johnson"
    },
    {
      "@type": "Person",
      "name": "Grace Williams"
    },
    {
      "@type": "Person",
      "name": "Jonathan Rivera"
    }
  ]
}

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Upstream",
  "description": "Een evangelisatie-initiatief geworteld in hoop, gemeenschap en de transformerende kracht van Gods liefde",
  "url": "https://secondopinion.upstream.nl",
  "logo": "https://secondopinion.upstream.nl/images/upstream-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "info@upstream.nl"
  },
  "sameAs": [
    "https://facebook.com/upstream",
    "https://instagram.com/upstream"
  ]
}
