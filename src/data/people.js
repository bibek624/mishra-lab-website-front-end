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
  },
  {
    id: 'pd-1',
    name: 'Alex Kim',
    slug: toSlug('Alex Kim'),
    role: 'Postdoc',
    photo: 'https://i.pravatar.cc/160?img=5',
  },
  {
    id: 'phd-1',
    name: 'Priya Patel',
    slug: toSlug('Priya Patel'),
    role: 'Student',
    degree: 'PhD',
    photo: 'https://i.pravatar.cc/160?img=20',
  },
  {
    id: 'msc-1',
    name: 'Leo Nguyen',
    slug: toSlug('Leo Nguyen'),
    role: 'Student',
    degree: 'MSc',
    photo: 'https://i.pravatar.cc/160?img=7',
  },
  {
    id: 'al-1',
    name: 'Sam Rivera',
    slug: toSlug('Sam Rivera'),
    role: 'Alumni',
    degree: 'PhD',
    graduationYear: 2023,
    photo: 'https://i.pravatar.cc/160?img=11',
  },
]


