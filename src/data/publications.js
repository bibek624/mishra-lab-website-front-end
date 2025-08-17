export const PUBLICATIONS = [
  { id: 'j-2024-01', type: 'Journal', title: 'Data-driven optimization of composite layups', authors: 'A. Kim, B. Mishra', authorIds: ['pd-1', 'pi-1'], date: '2024-05-10', venue: 'Composites Science and Technology', doi: '10.0000/cst.2024.12345' },
  { id: 'c-2024-02', type: 'Conference', title: 'Track degradation modeling with ML', authors: 'J. Doe, B. Mishra', authorIds: ['pi-1'], date: '2024-09-20', venue: 'IEEE ICMLA', doi: '10.0000/icmla.2024.54321' },
  { id: 'j-2023-01', type: 'Journal', title: 'Uncertainty-aware surrogate models for materials design', authors: 'A. Kim, P. Patel, B. Mishra', authorIds: ['pd-1', 'phd-1', 'pi-1'], date: '2023-03-14', venue: 'Materials & Design', doi: '10.0000/mad.2023.67890' },
  { id: 'c-2022-01', type: 'Conference', title: 'Sensor fusion for rail health', authors: 'L. Nguyen, B. Mishra', authorIds: ['msc-1', 'pi-1'], date: '2022-11-02', venue: 'RailSys', doi: '' },
  { id: 'j-2021-01', type: 'Journal', title: 'Life-cycle analysis for composites', authors: 'P. Patel, B. Mishra', authorIds: ['phd-1', 'pi-1'], date: '2021-07-01', venue: 'Sustainable Materials and Technologies', doi: '10.0000/smt.2021.11111' },
]

export function listYears() {
  const years = new Set(PUBLICATIONS.map(p => new Date(p.date).getFullYear()))
  return Array.from(years).sort((a, b) => b - a)
}

export function getPublicationsByAuthorId(authorId) {
  return PUBLICATIONS.filter(p => Array.isArray(p.authorIds) && p.authorIds.includes(authorId))
}

