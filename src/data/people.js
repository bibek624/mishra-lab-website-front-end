function toSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-').replace(/-+/g, '-')
}

export const PEOPLE = [
  {
    id: 'pi-1',
    name: 'Deb Mishra',
    slug: toSlug('Deb Mishra'),
    role: 'PI',
    photo: 'https://experts.okstate.edu/deb.mishra/thumbnail',
    bio: 'Deb Mishra leads the lab focusing on data-driven engineering for materials, rail systems, and sustainability. His work emphasizes reproducible science and real-world impact.',
    currentAffiliation: {
      organization: 'Oklahoma State University',
      unit: 'School of Engineering',
      title: 'Assistant Professor',
    },
    education: [
      { degree: 'Ph.D.', field: 'Civil Engineering', institution: 'University of X', year: 2019 },
      { degree: 'M.S.', field: 'Civil Engineering', institution: 'Institute of Y', year: 2015 },
      { degree: 'B.E.', field: 'Civil Engineering', institution: 'University of Z', year: 2013 },
    ],
    pastAffiliations: [
      'Research Fellow, Institute of Y',
      'Visiting Researcher, Lab Z',
    ],
    researchIds: [
      'mat-001','mat-002','mat-003','mat-004',
      'rail-001','rail-002','rail-003','rail-004',
      'sus-001','sus-002','sus-003','sus-004',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1581091870627-3f9a9b4c3f95?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1559757175-08fda9f4f7d5?auto=format&fit=crop&w=1200&h=800&q=80',
    ],
  },
  {
    id: 'pd-1',
    name: 'Alex Kim',
    slug: toSlug('Alex Kim'),
    role: 'Postdoc',
    photo: 'https://i.pravatar.cc/160?img=5',
    bio: 'Alex works on uncertainty-aware surrogate models and high-throughput experimentation.',
    currentAffiliation: {
      organization: 'Oklahoma State University',
      unit: 'Research Lab',
      title: 'Postdoctoral Researcher',
    },
    education: [
      { degree: 'Ph.D.', field: 'Materials Science', institution: 'Tech University', year: 2022 },
    ],
    pastAffiliations: ['Tech University Materials Group'],
    researchIds: ['mat-001', 'mat-002'],
    gallery: [
      'https://images.unsplash.com/photo-1581092795360-fd1f5f7121d0?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1581092580491-8c4a4d0d6cba?auto=format&fit=crop&w=1200&h=800&q=80',
    ],
  },
  {
    id: 'phd-1',
    name: 'Priya Patel',
    slug: toSlug('Priya Patel'),
    role: 'Student',
    degree: 'PhD',
    photo: 'https://i.pravatar.cc/160?img=20',
    bio: 'Priya investigates life-cycle analysis for composite materials and circular design.',
    currentAffiliation: {
      organization: 'Oklahoma State University',
      unit: 'Research Lab',
      title: 'PhD Student',
    },
    education: [
      { degree: 'B.Tech', field: 'Civil Engineering', institution: 'University A', year: 2020 },
    ],
    pastAffiliations: [],
    researchIds: [
      'mat-001','mat-002','mat-003','mat-004',
      'rail-001','rail-002','rail-003','rail-004',
      'sus-001','sus-002','sus-003','sus-004',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1584697964331-399418f2dc33?auto=format&fit=crop&w=1200&h=800&q=80',
    ],
  },
  {
    id: 'msc-1',
    name: 'Leo Nguyen',
    slug: toSlug('Leo Nguyen'),
    role: 'Student',
    degree: 'MSc',
    photo: 'https://i.pravatar.cc/160?img=7',
    bio: 'Leo focuses on sensor fusion and track health monitoring.',
    currentAffiliation: {
      organization: 'Oklahoma State University',
      unit: 'Research Lab',
      title: 'MSc Student',
    },
    education: [
      { degree: 'B.S.', field: 'Electrical Engineering', institution: 'University B', year: 2022 },
    ],
    pastAffiliations: [],
    researchIds: [
      'mat-001','mat-002','mat-003','mat-004',
      'rail-001','rail-002','rail-003','rail-004',
      'sus-001','sus-002','sus-003','sus-004',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600267175161-cfaa711b4a0f?auto=format&fit=crop&w=1200&h=800&q=80',
    ],
  },
  {
    id: 'al-1',
    name: 'Sam Rivera',
    slug: toSlug('Sam Rivera'),
    role: 'Alumni',
    degree: 'PhD',
    graduationYear: 2023,
    photo: 'https://i.pravatar.cc/160?img=11',
    bio: 'Sam graduated in 2023 working on energy-efficient lab operations.',
    currentAffiliation: {
      organization: 'Industry R&D',
      unit: '',
      title: 'Research Scientist',
    },
    education: [
      { degree: 'Ph.D.', field: 'Civil Engineering', institution: 'OSU', year: 2023 },
    ],
    pastAffiliations: ['OSU Research Lab'],
    researchIds: ['sus-004'],
    gallery: [
      'https://images.unsplash.com/photo-1589810264340-0ce27bfbf751?auto=format&fit=crop&w=1200&h=800&q=80',
    ],
  },
]

export function getPersonBySlug(slug) {
  return PEOPLE.find(p => p.slug === slug) || null
}


