export const tableFeatures = [
  'Live-edge slabs hand-picked with you at our shop',
  "Solid hardwood, kiln-dried and acclimated for Alberta's dry air",
  'Steel, wood or trestle bases — custom fabricated',
  'Durable hardwax-oil or commercial-grade conversion finishes',
  'Extension leaves, matching benches and chairs available',
];

export const woodSpecies = [
  { name: 'Black Walnut', className: 'wood--walnut' },
  { name: 'White Oak', className: 'wood--oak' },
  { name: 'Hard Maple', className: 'wood--maple' },
  { name: 'Cherry', className: 'wood--cherry' },
];

export const processSteps = [
  { title: 'Consultation', text: 'Free in-home or shop visit. We measure, listen and talk budget.' },
  { title: 'Design & quote', text: '3D drawings, material samples and a fixed, itemized quote.' },
  { title: 'Build', text: 'Crafted in our Alberta shop. We send progress photos along the way.' },
  { title: 'Finish', text: 'Spray-finished in our booth for a smooth, hard-wearing surface.' },
  { title: 'Install', text: 'Our own installers fit, level and clean up. Then we walk it with you.' },
];

// Replace the `wood` class with an `image` path once you have real project photos
export const projects = [
  { title: 'Two-tone shaker kitchen', meta: 'Calgary · Painted maple & white oak', wood: 'wood--paint', size: 'wide' },
  { title: 'Live-edge walnut dining table', meta: 'Canmore · 10 ft, steel base', wood: 'wood--walnut', size: 'tall' },
  { title: 'Mudroom lockers', meta: 'Airdrie', wood: 'wood--oak' },
  { title: 'Floating vanity', meta: 'Edmonton', wood: 'wood--white', light: true },
  { title: 'Basement wet bar', meta: 'Red Deer', wood: 'wood--cherry' },
  { title: 'Boardroom table & reception desk', meta: 'Edmonton · Commercial', wood: 'wood--maple', size: 'wide' },
];

export const albertaPoints = [
  { title: 'Climate-ready construction', text: "Lumber is acclimated to low Alberta humidity and joined to allow seasonal movement — so doors stay true and tabletops don't crack." },
  { title: 'Winter-tough mudrooms & entries', text: 'Moisture-resistant boxes, durable finishes and boot-drying layouts for slush, salt and hockey gear.' },
  { title: 'Basement development experts', text: "Wet bars, media walls and storage that pair with your basement permit and developer's schedule." },
  { title: 'Mountain, cabin & acreage builds', text: 'Rustic and modern millwork for Bow Valley homes, lake cabins and rural properties — we travel.' },
];

export const cities = [
  'Calgary', 'Edmonton', 'Red Deer', 'Airdrie', 'Cochrane', 'Okotoks', 'Chestermere', 'Canmore',
  'Banff', 'St. Albert', 'Sherwood Park', 'Spruce Grove', 'Leduc', 'Lethbridge', 'Medicine Hat',
  'Lacombe', 'Olds', 'Acreages & rural AB',
];

// Sample reviews — replace with real Google reviews
export const testimonials = [
  { text: 'Our kitchen came out better than the drawings. The crew was tidy, on time and the doors still close perfectly after two winters.', name: 'Homeowner', project: 'Kitchen · Calgary' },
  { text: "We picked our walnut slab at the shop and watched it become a table. It's the centre of every family dinner now.", name: 'Homeowner', project: 'Dining table · Cochrane' },
  { text: 'They did our office reception and boardroom on a tight timeline. Professional from quote to install.', name: 'Business owner', project: 'Commercial · Edmonton' },
];

export const faqs = [
  { q: 'How much do custom cabinets cost?', a: "Every project is different, but we give a fixed, itemized quote after your free consultation. Cost depends on size, materials, door style and finish. We're happy to design around a budget." },
  { q: 'How long does a project take?', a: 'Most kitchens take 6–10 weeks from approved design to installation. Vanities and small built-ins are often 3–5 weeks; custom tables 4–8 weeks depending on the slab and finish.' },
  { q: 'Do you handle permits or work with my contractor?', a: "Cabinetry itself doesn't usually need a permit, but we coordinate with your general contractor, plumber and electrician, and work to your renovation or basement-development schedule." },
  { q: 'Do you install countertops?', a: 'Yes. We supply and install quartz, granite, solid surface and butcher-block tops through trusted Alberta fabricators, so you deal with one team.' },
  { q: 'Do you serve areas outside Calgary and Edmonton?', a: 'Yes — we work across Alberta, including the Bow Valley, central Alberta, southern Alberta and rural acreages. Travel may apply for distant locations.' },
  { q: 'What warranty do you offer?', a: "All our work carries a 5-year workmanship warranty, and hardware is covered by the manufacturer's lifetime warranty where applicable." },
  { q: 'Do you offer financing?', a: 'We take a deposit to start and the balance on completion. Ask us about financing options for larger projects.' },
];

export const quoteOptions = {
  cities: ['Calgary', 'Edmonton', 'Red Deer', 'Airdrie', 'Cochrane', 'Okotoks', 'Canmore / Banff', 'St. Albert', 'Sherwood Park', 'Lethbridge', 'Medicine Hat', 'Other Alberta'],
  projectTypes: ['Kitchen', 'Vanity', 'Built-ins', 'Closet', 'Mudroom', 'Table', 'Wet bar', 'Commercial', 'Other'],
  budgets: ['Not sure yet', 'Under $5,000', '$5,000 – $15,000', '$15,000 – $35,000', '$35,000 – $60,000', '$60,000+'],
  timelines: ['Flexible', 'ASAP', '1–3 months', '3–6 months', 'Just planning'],
};
