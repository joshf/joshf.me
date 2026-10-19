export type Role = {
  company: string;
  href?: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    company: 'Podder',
    role: 'CTO',
    period: '2021 — Present',
    summary: 'Podcast analytics platform: cross-promotion tracking and audience personas.',
    highlights: [
      'Own technical strategy, architecture and delivery. Built the entire platform end to end, including the NestJS API and the React analytics dashboard.',
      'Built cross-promotion tracking at the edge on Cloudflare Workers.',
      'Built LLM-driven audience personas and review insights, plus an in-app AI assistant.',
      'Built Apache Beam pipelines into BigQuery for download and attribution data.',
      'Built an MCP server so AI agents can query the platform.',
    ],
    tags: ['NestJS', 'React', 'Cloudflare Workers', 'BigQuery', 'Apache Beam', 'AI SDK', 'MCP'],
  },
  {
    company: 'Kuupanda',
    href: 'https://kuupanda.com',
    role: 'IT Team Lead & Full-Stack Engineer',
    period: '2020 — Present',
    summary:
      'Agritech commerce platform helping local food producers sell directly to buyers.',
    highlights: [
      'Built producer mini-sites: multi-tenant Next.js websites with custom domains, theming and lead capture.',
      'Built and maintain the customer order form: catalogue, delivery slots, promotions, VAT and checkout, standalone or embedded.',
      'Built the purchase invoices module, including e-invoice intake, accounting codes and bank transaction matching.',
      'Built customer messaging with scheduled, recurring and group messages.',
    ],
    tags: ['React', 'Next.js', 'TypeScript', 'Material UI', 'Tailwind', 'MongoDB'],
  },
  {
    company: 'Stay U-nique',
    role: 'Web Developer',
    period: 'Earlier',
    summary: 'Hospitality tech for tourist apartment rentals.',
    highlights: [
      'Built the guest booking engine in React.',
      'Built a maintenance app for managing issues across apartments.',
    ],
    tags: ['React', 'PHP'],
  },
];
