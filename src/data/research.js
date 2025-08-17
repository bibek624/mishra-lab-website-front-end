export const CATEGORIES = ['All', 'Materials', 'Railroad', 'Sustainability']

function toSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function make(id, title, category, startDate) {
  return {
    id,
    slug: toSlug(title),
    title,
    category,
    startDate,
    image: `https://picsum.photos/seed/${id}/800/500`,
    description:
      'Short abstract for this research direction. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  }
}

export const RESEARCH_ITEMS = [
  make('mat-001', 'Materials informatics for composites', 'Materials', '2023-03-15'),
  make('mat-002', 'Nano-structured alloys for lightweight design', 'Materials', '2022-11-02'),
  make('rail-001', 'Track degradation modeling with ML', 'Railroad', '2024-06-20'),
  make('rail-002', 'Real-time rail defect detection', 'Railroad', '2021-07-01'),
  make('sus-001', 'Carbon-aware scheduling for labs', 'Sustainability', '2024-01-05'),
  make('sus-002', 'Circular materials in infrastructure', 'Sustainability', '2020-09-10'),
  make('mat-003', 'Multi-scale simulation pipelines', 'Materials', '2021-02-12'),
  make('rail-003', 'Sensor fusion for rail health', 'Railroad', '2023-12-08'),
  make('sus-003', 'Life-cycle analysis for composites', 'Sustainability', '2022-05-03'),
  make('mat-004', 'High-throughput experimentation', 'Materials', '2019-04-22'),
  make('rail-004', 'Autonomous inspection drones', 'Railroad', '2020-03-09'),
  make('sus-004', 'Energy-efficient lab operations', 'Sustainability', '2018-08-30'),
]

const RESEARCH_DETAILS = {
  'mat-001': {
    sections: [
      { heading: 'Overview', body: 'We leverage data-driven methods to accelerate composite material discovery and optimization. This includes surrogate models and uncertainty-aware design.' },
      { heading: 'Methods', body: 'Active learning, Bayesian optimization, and multi-scale simulations are integrated with high-throughput experiments.' },
    ],
    gallery: ['01','02','03'].map((s)=>`https://picsum.photos/seed/mat-001-${s}/1200/800`),
    members: [
      { name: 'Alex Kim', role: 'Lead Student', photo: 'https://i.pravatar.cc/128?img=5' },
      { name: 'Dr. Mishra', role: 'PI', photo: 'https://i.pravatar.cc/128?img=15' },
      { name: 'Priya Patel', role: 'Contributor', photo: 'https://i.pravatar.cc/128?img=20' },
    ],
    sponsors: [
      { name: 'NSF', logo: 'https://dummyimage.com/120x48/64748b/ffffff&text=NSF' },
      { name: 'ACME Materials', logo: 'https://dummyimage.com/120x48/475569/ffffff&text=ACME' },
    ],
    publications: [
      { id: 'p1', year: 2024, title: 'Data-driven optimization of composite layups', authors: 'A. Kim, B. Mishra', venue: 'Composites Science and Technology', doi: '10.0000/cst.2024.12345', url: 'https://doi.org/10.0000/cst.2024.12345' },
      { id: 'p2', year: 2023, title: 'Uncertainty-aware surrogate models for materials design', authors: 'A. Kim, P. Patel, B. Mishra', venue: 'Materials & Design', doi: '10.0000/mad.2023.67890', url: 'https://doi.org/10.0000/mad.2023.67890' },
    ],
  },
}

// Optional mapping of lead student per research
const LEAD_STUDENTS = {
  // Materials
  'mat-001': 'pd-1',
  'mat-002': 'pd-1',
  'mat-003': 'phd-1',
  'mat-004': 'pd-1',
  // Railroad
  'rail-001': 'msc-1',
  'rail-002': 'msc-1',
  'rail-003': 'msc-1',
  'rail-004': 'msc-1',
  // Sustainability
  'sus-001': 'phd-1',
  'sus-002': 'phd-1',
  'sus-003': 'phd-1',
  'sus-004': 'phd-1',
}

export function getResearchBySlug(slug) {
  const base = RESEARCH_ITEMS.find((i) => i.slug === slug)
  if (!base) return null
  const details = RESEARCH_DETAILS[base.id] || {
    sections: [
      { heading: 'Overview', body: base.description },
    ],
    gallery: ['a','b','c'].map((s)=>`https://picsum.photos/seed/${base.id}-${s}/1200/800`),
    members: [
      { name: 'Bibek Parajuli', role: 'Lead Student', photo: 'https://i.pravatar.cc/128?img=30' },
      { name: 'Dr. Mishra', role: 'PI', photo: 'https://i.pravatar.cc/128?img=15' },
    ],
    sponsors: [
      { name: 'Ingevity', logo: 'https://www.ingevity.com/news/wp-content/uploads/Ingevity-logo-CMYK.jpg' },
    ],
    publications: [
      { id: 'p1', year: new Date(base.startDate).getFullYear(), title: `${base.title} – preliminary results`, authors: 'Team', venue: 'Preprint', doi: '', url: '#' },
    ],
  }
  const leadStudentId = details.leadStudentId || LEAD_STUDENTS[base.id] || null
  return { ...base, ...details, leadStudentId }
}


