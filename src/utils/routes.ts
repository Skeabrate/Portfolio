export const ROUTES = {
  hero: {
    id: 0,
    label: 'Sebastian',
  },
  about: {
    id: 1,
    label: 'About',
  },
  work: {
    id: 2,
    label: 'Work',
  },
  contact: {
    id: 3,
    label: 'Contact',
  },
} as const;

export const NAV_ITEMS = Object.entries(ROUTES)
  .map(([, value]) => value)
  .slice(1);
