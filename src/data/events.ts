export interface Event {
  slug: string;
  name: string;
  date: string;
  location: string;
  image: string;
  description: string;
  category: string;
}

export const events: Event[] = [
  {
    slug: 'mediterranean-handball-cup',
    name: 'Mediterranean Handball Cup',
    date: 'Abril 2026',
    location: 'Sueca, València',
    image: '/mediterranean-senior.jpeg',
    description:
      "Torneig internacional de handbol que reuneix equips de tota la Mediterrània. Una setmana d'handbol, cultura i convivència a la nostra ciutat.",
    category: 'Torneig',
  },
  {
    slug: 'handbol-platja',
    name: 'Handbol Platja',
    date: 'Juny 2026',
    location: 'Platja de les Palmeres, Sueca',
    image: '/mediterranean-senior2.jpeg',
    description:
      "Jornada festiva d'handbol platja per a totes les edats. Vine a gaudir del handbol amb els peus a la sorra!",
    category: 'Esportiu',
  },
  {
    slug: 'campus-estiu',
    name: "Campus d'Estiu",
    date: 'Juliol 2026',
    location: 'Pavelló Municipal de Sueca',
    image: '/charlas-colegio1.jpeg',
    description:
      "Campus d'estiu per a xiquets i xiquetes de 6 a 14 anys. Una setmana d'handbol, jocs i diversió amb els entrenadors del club.",
    category: 'Formació',
  },
  {
    slug: 'sopar-anual',
    name: 'Sopar Anual del Club',
    date: 'Juny 2026',
    location: 'Restaurant local, Sueca',
    image: '/ganadores_finalautonomica2025.jpeg',
    description:
      'Sopar de germanor per tancar la temporada. Lliurament de premis, reconeixements i molta festa!',
    category: 'Social',
  },
];
