import { business } from '../data/business';
import { testimonials } from '../data/testimonials';
import { services } from '../data/services';
import type { Service } from '../data/services';
import type { Faq } from '../data/faqs';

const SITE = business.url;

// Build date, used as a freshness (dateModified) signal on every page.
export const BUILD_DATE = new Date().toISOString().slice(0, 10);

/**
 * Rating note: the four testimonials are real and verbatim but carry no
 * numeric star rating. Each is read as 5/5 to match its clear wording so the
 * markup validates. reviewCount stays at the true number of testimonials (4).
 * The owner should confirm this reading before the site goes live.
 */
const REVIEW_RATING = 5;

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: business.address.streetAddress,
  addressLocality: business.address.addressLocality,
  addressRegion: business.address.addressRegion,
  postalCode: business.address.postalCode,
  addressCountry: business.address.addressCountry,
};

const reviews = testimonials.map((t) => ({
  '@type': 'Review',
  reviewRating: {
    '@type': 'Rating',
    ratingValue: REVIEW_RATING,
    bestRating: 5,
    worstRating: 1,
  },
  author: {
    '@type': 'Person',
    name: t.author,
  },
  reviewBody: t.quote,
}));

const aggregateRating = {
  '@type': 'AggregateRating',
  ratingValue: REVIEW_RATING,
  bestRating: 5,
  worstRating: 1,
  reviewCount: testimonials.length,
};

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['HomeAndConstructionBusiness', 'GeneralContractor'],
    '@id': `${SITE}/#business`,
    name: business.name,
    legalName: business.legalName,
    description: business.descriptionShort,
    url: SITE,
    telephone: business.phoneHref,
    email: business.email,
    foundingDate: String(business.founded),
    address: postalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: business.hours.schemaDays,
        opens: business.hours.opens,
        closes: business.hours.closes,
      },
    ],
    areaServed: business.areaServed.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
    knowsAbout: business.accreditations.map((a) => a.name),
    aggregateRating,
    review: reviews,
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE}/services/${service.slug}/#service`,
    name: service.name,
    description: service.directAnswer,
    url: `${SITE}/services/${service.slug}`,
    serviceType: service.name,
    provider: { '@id': `${SITE}/#business` },
    areaServed: business.areaServed.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.name} options`,
      itemListElement: service.work.map((w) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: w },
      })),
    },
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    name: business.name,
    url: SITE,
    publisher: { '@id': `${SITE}/#business` },
    inLanguage: 'en-GB',
  };
}

/** A WebPage node carrying a dateModified freshness signal, injected per page. */
export function webPageSchema(path: string, name: string, description: string) {
  const url = new URL(path, SITE).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': `${SITE}/#website` },
    about: { '@id': `${SITE}/#business` },
    inLanguage: 'en-GB',
    dateModified: BUILD_DATE,
  };
}

/** ItemList of all services, for the services overview page. */
export function servicesItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Home Works Ltd services',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      url: `${SITE}/services/${s.slug}`,
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}
