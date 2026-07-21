import type { Faq } from './faqs';

export interface Service {
  slug: string;
  name: string;
  /** Short label for cards and nav */
  shortName: string;
  /** Credential stamp shown on the card, if any */
  credential?: string;
  /** One line used on the home overview grid */
  summary: string;
  /** 40 to 60 word direct answer that opens the service page */
  directAnswer: string;
  /** The work covered, used as a schedule block and for schema */
  work: string[];
  /** Longer detail paragraphs for the service page body */
  detail: string[];
  faqs: Faq[];
}

export const services: Service[] = [
  {
    slug: 'boiler-repairs-servicing-installation',
    name: 'Boiler repairs, servicing and installation',
    shortName: 'Boilers and heating',
    credential: 'Gas Safe',
    summary: 'Servicing, safety tests, repairs and full boiler installations by Gas Safe engineers.',
    directAnswer:
      'Home Works Ltd carries out boiler servicing, gas safety tests, repairs and full boiler installations across Kent and the South East. Our Gas Safe engineers work on all heating systems, fit replacement boilers and new radiators, and help you choose the right boiler for your home.',
    work: [
      'Boiler servicing',
      'Gas safety tests',
      'Full boiler installations',
      'Replacement boilers',
      'New radiators',
      'Boiler and heating repairs',
      'Advice on choosing a new boiler',
    ],
    detail: [
      'Heating problems rarely happen at a convenient time. We service and repair boilers, run gas safety tests and fit replacement boilers so your heating and hot water keep working through the year. Our engineers are Gas Safe registered, so every gas job is done and certified properly.',
      'If your boiler is coming to the end of its life we will talk you through the options in plain terms and help you pick a boiler that suits the property and how you use it. We work on all heating systems and can fit new radiators at the same time.',
    ],
    faqs: [
      {
        question: 'Are your boiler engineers Gas Safe registered?',
        answer:
          'Yes. All gas and boiler work carried out by Home Works Ltd is done by Gas Safe registered engineers and certified correctly.',
      },
      {
        question: 'Can you replace an old boiler and help me choose a new one?',
        answer:
          'Yes. We fit replacement boilers on all heating systems and will help you choose a boiler that suits your property and how you use your heating and hot water.',
      },
      {
        question: 'Do you service boilers as well as repair them?',
        answer:
          'Yes. We carry out boiler servicing and gas safety tests as well as repairs, which helps keep your heating reliable and safe.',
      },
    ],
  },
  {
    slug: 'electrical',
    name: 'Electrical work',
    shortName: 'Electrical',
    credential: 'NICEIC',
    summary: 'Sockets, lighting, rewires, fault finding and consumer unit upgrades with NICEIC reports.',
    directAnswer:
      'Home Works Ltd carries out electrical work across Kent and the South East, from extra sockets and lighting to full property rewires. Our NICEIC approved electricians handle fault testing and repair, consumer unit upgrades and switch fronts, and provide NICEIC reports for the work.',
    work: [
      'Switch fronts',
      'Additional sockets and lighting',
      'Full property rewires',
      'Fault testing and repair',
      'Consumer unit upgrades',
      'NICEIC reports',
    ],
    detail: [
      'Whether you need one extra socket or a whole property rewired, we handle it and certify it. We fit additional sockets and lighting, upgrade consumer units and trace and repair faults so your electrics are safe and up to standard.',
      'Because we are NICEIC approved we can issue NICEIC reports for the work, which matters for landlords, sales and peace of mind. If you are letting a property we can test the installation and give you the paperwork you need.',
    ],
    faqs: [
      {
        question: 'Are you NICEIC approved?',
        answer:
          'Yes. Home Works Ltd is NICEIC approved and can issue NICEIC reports for electrical work including rewires and consumer unit upgrades.',
      },
      {
        question: 'Can you provide an electrical report for a rental property?',
        answer:
          'Yes. We carry out fault testing and inspection and provide NICEIC reports, which landlords and letting agents often need.',
      },
      {
        question: 'Do you do full rewires as well as small jobs?',
        answer:
          'Yes. We handle everything from a single extra socket or light through to a full property rewire.',
      },
    ],
  },
  {
    slug: 'plumbing',
    name: 'Plumbing',
    shortName: 'Plumbing',
    credential: 'Gas Safe',
    summary: 'Taps, radiators, bathrooms, blocked drains and gas safety testing.',
    directAnswer:
      'Home Works Ltd covers plumbing across Kent and the South East, from dripping taps and blocked drains to full bathroom installations. Our Gas Safe engineers also handle radiator upgrades, boiler installations, sinks, toilets and gas safety and boiler testing.',
    work: [
      'Dripping and replacement taps',
      'Radiator upgrades',
      'Boiler installations',
      'Blocked pipes and drains',
      'Bathroom installations',
      'Sinks and toilets',
      'Gas safety and boiler testing',
    ],
    detail: [
      'From a dripping tap to a new bathroom, we cover the everyday plumbing that keeps a home running. We clear blocked pipes and drains, replace taps, upgrade radiators and fit sinks and toilets.',
      'For larger work we install complete bathrooms and fit boilers, and because our engineers are Gas Safe registered we can carry out gas safety and boiler testing at the same time. That means one company for the plumbing and the gas side of the job.',
    ],
    faqs: [
      {
        question: 'Can you fit a complete new bathroom?',
        answer:
          'Yes. We install full bathrooms including sinks, toilets, taps and radiators, and can handle the plumbing and gas work together.',
      },
      {
        question: 'Do you deal with blocked drains and pipes?',
        answer:
          'Yes. We clear blocked pipes and drains as part of our everyday plumbing work across Kent and the South East.',
      },
      {
        question: 'Can you carry out gas safety and boiler testing?',
        answer:
          'Yes. Our plumbers are Gas Safe registered, so we can carry out gas safety checks and boiler testing as well as general plumbing.',
      },
    ],
  },
  {
    slug: 'carpentry',
    name: 'Carpentry',
    shortName: 'Carpentry',
    summary: 'Doors, kitchens, bespoke timber windows, skirting and floor repairs.',
    directAnswer:
      'Home Works Ltd carries out carpentry across Kent and the South East, from hanging internal and external doors to full kitchen refurbishments. We fit bespoke timber window installations and skirting boards and repair timber floors.',
    work: [
      'Internal and external doors',
      'Kitchen refurbishments',
      'Bespoke timber window installations',
      'Skirting boards',
      'Timber floor repairs',
    ],
    detail: [
      'Good carpentry is the difference between a door that sticks and one that closes cleanly for years. We hang internal and external doors, fit skirting boards and repair timber floors so the everyday details work and look right.',
      'For bigger projects we refurbish kitchens and make and fit bespoke timber windows to suit older and period properties where an off the shelf unit will not do.',
    ],
    faqs: [
      {
        question: 'Do you make bespoke timber windows?',
        answer:
          'Yes. We make and fit bespoke timber window installations, which suits period and older properties where a standard unit does not fit.',
      },
      {
        question: 'Can you refurbish a kitchen?',
        answer:
          'Yes. We carry out kitchen refurbishments and can bring in our plumbing and electrical trades so the whole job is handled by one company.',
      },
    ],
  },
  {
    slug: 'general-building',
    name: 'General building',
    shortName: 'General building',
    summary: 'Plastering, bricklaying, tiling, landscaping, ceilings and fencing.',
    directAnswer:
      'Home Works Ltd carries out general building across Kent and the South East, including plastering, bricklaying and ceramic wall and floor tiling. We also handle soft and hard landscaping, ceiling repairs and fencing.',
    work: [
      'Plastering',
      'Bricklaying',
      'Soft and hard landscaping',
      'Ceiling repairs',
      'Ceramic wall and floor tiling',
      'Fencing',
    ],
    detail: [
      'General building is where a lot of jobs start. We plaster walls and ceilings, lay bricks, tile walls and floors and put right ceilings that have cracked or come down.',
      'Outside we take on soft and hard landscaping and fencing, so the garden and the boundaries get the same care as the inside of the property.',
    ],
    faqs: [
      {
        question: 'Do you take on plastering as a standalone job?',
        answer:
          'Yes. We take on plastering on its own as well as part of a larger building or decorating job.',
      },
      {
        question: 'Can you do both hard and soft landscaping?',
        answer:
          'Yes. We handle soft and hard landscaping along with fencing, so we can reshape a garden and its boundaries.',
      },
    ],
  },
  {
    slug: 'roofing',
    name: 'Roofing works',
    shortName: 'Roofing',
    summary: 'Tile repairs, valleys, chimney work, felt roofs and full replacements.',
    directAnswer:
      'Home Works Ltd carries out roofing works across Kent and the South East, from slipped or broken tiles and valley repairs to full roof replacements. We also handle chimney stack repairs and rebuilds, felt roofing and fascia, soffit and guttering.',
    work: [
      'Slipped or broken tiles',
      'Valley repairs',
      'Chimney stack repairs and rebuilds',
      'Full roof replacements',
      'Felt roofing',
      'Fascia, soffit and guttering',
    ],
    detail: [
      'A small roof fault turns into a damp problem quickly. We replace slipped and broken tiles, repair valleys and put right fascia, soffit and guttering before water gets into the building.',
      'For bigger work we rebuild chimney stacks, lay felt roofing and carry out full roof replacements. If you are not sure how far the problem goes we will take a look and tell you plainly what needs doing.',
    ],
    faqs: [
      {
        question: 'Can you repair a chimney stack?',
        answer:
          'Yes. We carry out chimney stack repairs and full rebuilds as part of our roofing work.',
      },
      {
        question: 'Do you replace whole roofs or only repair them?',
        answer:
          'Both. We handle small tile and valley repairs through to felt roofing and full roof replacements.',
      },
    ],
  },
  {
    slug: 'decorating',
    name: 'Internal and external decorations',
    shortName: 'Decorating',
    summary: 'Repairs, paper hanging, specialist finishes and project managed decoration.',
    directAnswer:
      'Home Works Ltd carries out internal and external decorations across Kent and the South East, from minor decorating repairs and paper hanging to specialist paint finishes. We also project manage larger decoration schemes from start to finish.',
    work: [
      'Minor decorating repairs',
      'Paper hanging',
      'Specialist paint finishes',
      'Project managed decorations',
    ],
    detail: [
      'Decorating covers the quick jobs and the big ones. We patch and repair, hang paper and apply specialist paint finishes so rooms are left clean and even.',
      'For a whole property or a larger scheme we project manage the decoration, which keeps the work in order and means you deal with one point of contact.',
    ],
    faqs: [
      {
        question: 'Do you do specialist paint finishes?',
        answer:
          'Yes. We apply specialist paint finishes as well as standard decorating and paper hanging.',
      },
      {
        question: 'Can you manage a full property redecoration?',
        answer:
          'Yes. We project manage larger decoration schemes so the work runs in order and you have a single point of contact.',
      },
    ],
  },
  {
    slug: 'windows-and-doors',
    name: 'Windows and doors',
    shortName: 'Windows and doors',
    credential: 'Certass',
    summary: 'UPVC and aluminium installations, bifolds, blown units and repairs.',
    directAnswer:
      'Home Works Ltd installs windows and doors across Kent and the South East and is Certass approved. We fit UPVC windows and doors and aluminium patio and bifold doors, replace broken or blown units and carry out window repairs.',
    work: [
      'UPVC window and door installations',
      'Aluminium patio and bifold doors',
      'Broken or blown units',
      'Window repairs',
    ],
    detail: [
      'New windows and doors change how a house feels and how much it costs to heat. We install UPVC windows and doors and aluminium patio and bifold doors, and being Certass approved means the installations are registered and certified.',
      'If your existing frames are sound we can repair windows and swap out broken or blown units rather than replacing everything, which keeps the cost down.',
    ],
    faqs: [
      {
        question: 'Are you Certass approved?',
        answer:
          'Yes. Home Works Ltd is Certass approved for window and door installations, so the work is registered and certified.',
      },
      {
        question: 'Can you replace a blown double glazed unit without a whole new window?',
        answer:
          'Yes. Where the frame is sound we replace broken or blown units and repair windows rather than replacing the whole thing.',
      },
      {
        question: 'Do you fit bifold doors?',
        answer: 'Yes. We install aluminium patio and bifold doors as well as UPVC windows and doors.',
      },
    ],
  },
  {
    slug: 'flooring',
    name: 'Carpet, vinyl and wooden floors',
    shortName: 'Flooring',
    summary: 'Carpet matching and installation, vinyl, Polysafe, laminate and solid wood.',
    directAnswer:
      'Home Works Ltd supplies and fits flooring across Kent and the South East, including contract and high quality carpet, vinyl, Polysafe, laminate and solid wood. We also carry out carpet matching so repairs and additions blend in.',
    work: [
      'Carpet matching',
      'Contract and high quality carpet installations',
      'Vinyl flooring',
      'Polysafe flooring',
      'Laminate and solid wood',
    ],
    detail: [
      'Flooring gets used every day so it needs fitting properly. We install contract and high quality carpet, vinyl, laminate and solid wood, and match existing carpet so a repair or an extra room does not stand out.',
      'For kitchens, bathrooms and busy commercial spaces we fit Polysafe and vinyl flooring that stands up to water and heavy use.',
    ],
    faqs: [
      {
        question: 'Can you match my existing carpet?',
        answer:
          'Yes. We carry out carpet matching so a repair or an added room blends with the carpet you already have.',
      },
      {
        question: 'Do you fit flooring for landlords and commercial spaces?',
        answer:
          'Yes. We fit contract carpet, vinyl and Polysafe flooring that suits rentals and busy commercial spaces.',
      },
    ],
  },
  {
    slug: 'security',
    name: 'Security',
    shortName: 'Security',
    summary: 'Locks, 24 hour emergency boarding, CCTV and entry phone work.',
    directAnswer:
      'Home Works Ltd handles security work across Kent and the South East, from new and additional locks to CCTV and entry phone servicing and installation. We also provide 24 hour emergency boarding after a break in or damage.',
    work: [
      'New and additional locks',
      '24 hour emergency boarding',
      'CCTV servicing and installation',
      'Entry phone servicing and installation',
    ],
    detail: [
      'When a property is left open it needs sorting fast. We provide 24 hour emergency boarding so a broken door or window can be secured straight away, and we fit new and additional locks to bring the property back to safe.',
      'For longer term security we install and service CCTV and entry phone systems, which suits both homes and managed properties.',
    ],
    faqs: [
      {
        question: 'Do you offer emergency boarding out of hours?',
        answer:
          'Yes. We provide 24 hour emergency boarding so a broken door or window can be made secure quickly after a break in or damage.',
      },
      {
        question: 'Can you install CCTV and entry phones?',
        answer:
          'Yes. We install and service CCTV and entry phone systems for homes and managed properties.',
      },
    ],
  },
  {
    slug: 'gardening',
    name: 'Gardening',
    shortName: 'Gardening',
    summary: 'One off clearances, contract garden care, lawns and hedges.',
    directAnswer:
      'Home Works Ltd carries out gardening across Kent and the South East, from a one off garden clearance to a regular contract garden service. We also look after lawns and hedges as part of ongoing maintenance.',
    work: [
      'One off garden clearance',
      'Contract garden service',
      'Lawn care',
      'Hedge cutting',
    ],
    detail: [
      'An overgrown garden can be cleared in a single visit. We take on one off clearances to get a garden back under control, which is useful between tenancies or before a sale.',
      'For ongoing upkeep we offer a contract garden service that keeps lawns and hedges in order through the year, so the garden stays tidy without you having to think about it.',
    ],
    faqs: [
      {
        question: 'Do you offer a regular garden maintenance service?',
        answer:
          'Yes. We offer a contract garden service covering lawns and hedges as well as one off garden clearances.',
      },
      {
        question: 'Can you clear an overgrown garden between tenants?',
        answer:
          'Yes. We carry out one off garden clearances, which suits landlords and agents turning a property around between tenancies.',
      },
    ],
  },
  {
    slug: 'cleaning',
    name: 'Cleaning solutions',
    shortName: 'Cleaning',
    summary: 'Tenancy cleans, deep cleans, flood and fire damage, carpets and windows.',
    directAnswer:
      'Home Works Ltd provides cleaning solutions across Kent and the South East, including pre and post tenancy cleans, deep cleans and flood and fire damage cleaning. We also cover window cleaning and carpet and hard floor cleaning.',
    work: [
      'Pre and post tenancy cleans',
      'Deep cleans',
      'Flood and fire damage cleaning',
      'Window cleaning',
      'Carpet and hard floor cleaning',
    ],
    detail: [
      'A proper clean makes a property ready to let or ready to live in. We carry out pre and post tenancy cleans and deep cleans, which landlords and agents rely on when a tenancy changes over.',
      'We also handle the harder jobs, including flood and fire damage cleaning, along with window cleaning and carpet and hard floor cleaning.',
    ],
    faqs: [
      {
        question: 'Do you do end of tenancy cleans?',
        answer:
          'Yes. We carry out pre and post tenancy cleans and deep cleans, which suits landlords, tenants and letting agents.',
      },
      {
        question: 'Can you clean up after flood or fire damage?',
        answer:
          'Yes. We handle flood and fire damage cleaning as well as everyday carpet, hard floor and window cleaning.',
      },
    ],
  },
  {
    slug: 'insurance-work',
    name: 'Insurance work',
    shortName: 'Insurance work',
    summary: 'All aspects of insurance work undertaken across our trades.',
    directAnswer:
      'Home Works Ltd undertakes all aspects of insurance work across Kent and the South East. Because we cover building, roofing, electrical, plumbing and cleaning under one company we can put a property right after damage without you managing several contractors.',
    work: ['All aspects of insurance work undertaken'],
    detail: [
      'Insurance repairs often touch several trades at once. Because we cover building, roofing, electrical, plumbing, decorating and cleaning in one company, we can take on all aspects of insurance work and put a property right without you having to line up separate contractors.',
      'We hold public liability insurance with a £1 million indemnity limit, and we will talk you through the work in plain terms so you know what is being done and why.',
    ],
    faqs: [
      {
        question: 'Do you carry out insurance repair work?',
        answer:
          'Yes. We undertake all aspects of insurance work and can cover several trades on one job, from building and roofing to cleaning.',
      },
      {
        question: 'Are you insured to carry out this work?',
        answer:
          'Yes. Home Works Ltd holds public liability insurance with a £1 million indemnity limit.',
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
