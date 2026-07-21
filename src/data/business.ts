export const business = {
  name: 'Home Works Ltd',
  legalName: 'Home Works Ltd',
  founded: 1995,
  establishedLabel: 'Established 1995',
  descriptionShort:
    'Home Works Ltd is a family owned building and maintenance firm covering Kent and the South East of England, trading since 1995.',
  url: 'https://homeworksltd.co.uk',
  phoneDisplay: '01689 86 11 11',
  phoneHref: '+441689861111',
  email: 'info@homeworksltd.co.uk',
  address: {
    streetAddress: '11 Worlds End Lane, Green Street Green',
    addressLocality: 'Orpington',
    addressRegion: 'Kent',
    postalCode: 'BR6 6AA',
    addressCountry: 'GB',
  },
  addressDisplay: '11 Worlds End Lane, Green Street Green, Orpington, Kent, BR6 6AA',
  geo: {
    latitude: 51.358,
    longitude: 0.091,
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=11+Worlds+End+Lane+Green+Street+Green+Orpington+Kent+BR6+6AA',
  hours: {
    days: 'Monday to Friday',
    opens: '09:00',
    closes: '17:00',
    display: 'Monday to Friday, 9am to 5pm',
    schemaDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  },
  areaServed: ['Kent', 'South East England'],
  areaServedDisplay: 'Kent and the South East of England',
  insurance: {
    type: 'Public liability insurance',
    limitDisplay: '£1 million',
    limitValue: 1000000,
    currency: 'GBP',
  },
  paymentTerms: '25% deposit at booking, with the balance due on completion.',
  customers: [
    'Homeowners',
    'Landlords',
    'Tenants',
    'Estate agents',
    'Property management agents',
  ],
  accreditations: [
    {
      name: 'Checkatrade',
      note: 'Listed and reviewed on Checkatrade.',
    },
    {
      name: 'Gas Safe',
      note: 'Gas Safe registered for gas heating and boiler work.',
    },
    {
      name: 'NICEIC',
      note: 'NICEIC approved for electrical work and certification.',
    },
    {
      name: 'Certass',
      note: 'Certass approved for window and door installations.',
    },
  ],
  owner: {
    name: 'James Edward Finch',
    honorific: 'Mr',
    displayName: 'Mr James Edward Finch',
    role: 'Owner',
  },
  // Official profiles, used for schema sameAs entity links.
  sameAs: [
    'https://twitter.com/hellohomeworks',
    'https://www.linkedin.com/in/homeworks',
    'https://www.checkatrade.com/trades/Homeworks',
  ],
} as const;
