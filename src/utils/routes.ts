export const ROUTES = {
  skeabrate: 'Skeabrate',
  about: 'About me',
  projects: 'Projects',
  contact: 'Contact',
} as const;

export const NAV_ITEMS = Object.entries(ROUTES)
  .map(([, value]) => value)
  .slice(1);
