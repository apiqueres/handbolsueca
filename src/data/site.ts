export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const siteConfig = {
  name: 'Club Handbol Sueca',
  shortName: 'CH Sueca',
  description: 'Club Handbol Sueca - Passió pel handbol des de Sueca',
  url: 'https://handbolsueca.es',
  logo: '/logosueca.svg',
  founded: 1970,

  contact: {
    email: 'club@handbolsueca.es',
    phone: '662 082 596',
    address: 'Ronda del País Valencià, 23',
    city: '46410 Sueca, València',
  },

  social: {
    facebook: 'https://www.facebook.com/chsueca',
    instagram: 'https://www.instagram.com/chsueca/',
  },

  nav: [
    { label: 'Inici', href: '/' },
    {
      label: 'Club',
      children: [
        { label: 'Història', href: '/club/historia' },
        { label: 'Qui som', href: '/club/qui-som' },
        { label: 'Directiva', href: '/club/directiva' },
        { label: 'Contacte', href: '/club/contacte' },
      ],
    },
    {
      label: 'Equips',
      children: [
        { label: 'Tots els equips', href: '/equips' },
        { label: 'Sènior Masculí', href: '/equips/senior-masculi' },
        { label: 'Juvenil Femení', href: '/equips/juvenil-femeni' },
        { label: 'Cadet Femení', href: '/equips/cadet-femeni' },
        { label: 'Infantil Masculí', href: '/equips/infantil-masculi' },
      ],
    },
    {
      label: 'Events',
      children: [
        { label: 'Tots els events', href: '/events' },
        { label: 'Mediterranean Handball Cup', href: '/events/mediterranean-handball-cup' },
        { label: 'Handbol Platja', href: '/events/handbol-platja' },
      ],
    },
    { label: 'Informació', href: '/informacio' },
    { label: 'Col·laboradors', href: '/colaboradors' },
  ] as NavItem[],
};
