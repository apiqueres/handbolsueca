export interface Sponsor {
  name: string;
  logo: string;
  url?: string;
}

export const sponsors: Sponsor[] = [
  {
    name: 'Ajuntament de Sueca',
    logo: 'https://placehold.co/200x80/cccccc/666666?text=Ajuntament',
    url: 'https://www.sueca.es',
  },
  {
    name: 'Diputació de València',
    logo: 'https://placehold.co/200x80/cccccc/666666?text=Diputació',
    url: 'https://www.dival.es',
  },
  {
    name: 'Sponsor 1',
    logo: 'https://placehold.co/200x80/cccccc/666666?text=Sponsor+1',
  },
  {
    name: 'Sponsor 2',
    logo: 'https://placehold.co/200x80/cccccc/666666?text=Sponsor+2',
  },
  {
    name: 'Sponsor 3',
    logo: 'https://placehold.co/200x80/cccccc/666666?text=Sponsor+3',
  },
  {
    name: 'Sponsor 4',
    logo: 'https://placehold.co/200x80/cccccc/666666?text=Sponsor+4',
  },
];
