export interface Player {
  name: string;
  position: string;
  number: number;
}

export interface StaffMember {
  name: string;
  role: string;
}

export interface Team {
  slug: string;
  name: string;
  category: string;
  coach: string;
  image: string;
  description: string;
  federationUrl?: string;
  staff?: StaffMember[];
  players?: Player[];
}

export const teams: Team[] = [
  {
    slug: 'senior-masculi',
    name: 'Sènior Masculí',
    category: 'Sènior',
    coach: 'Salvador Enrique Renart Monton',
    image: '/senior_masculino.jpeg',
    description:
      "Després de dues temporades sense equip, en 2024 es va tornar a fer l'equip des de zero. Campions de Primera Autonòmica 2024-2025, ara competeixen a Segona Nacional.",
    federationUrl: 'https://www.rfebm.com',
    staff: [
      { name: 'Salvador Enrique Renart Monton', role: 'Entrenador' },
      { name: 'Alicia Beltran Gil', role: 'Oficial' },
      { name: 'Luis Perez Bernabeu', role: 'Oficial' },
      { name: 'Alejandro Jose Ramirez Soriano', role: 'Oficial' },
    ],
    players: [
      { name: 'Josep Primo Paris', position: 'Jugador', number: 1 },
      { name: 'Salvador Renart Ruiz', position: 'Jugador', number: 2 },
      { name: 'Dario Escudero Lopez', position: 'Jugador', number: 3 },
      { name: 'Gerard Carbonell Claver', position: 'Jugador', number: 4 },
      { name: 'Cristian Corbin Ortega', position: 'Jugador', number: 6 },
      { name: 'Claudiu Covrig Darvas', position: 'Jugador', number: 8 },
      { name: 'Nicolas Sales Lopez', position: 'Jugador', number: 10 },
      { name: 'Lucas Ferrando Celaya', position: 'Jugador', number: 11 },
      { name: 'Marc Lledo Hervas', position: 'Jugador', number: 13 },
      { name: 'Nadal Iñiguez Muñoz', position: 'Jugador', number: 15 },
      { name: 'Santos-Gabriel Velazco-Bunduc', position: 'Jugador', number: 17 },
      { name: 'Lluis Perez Lorente', position: 'Jugador', number: 19 },
      { name: 'Carles Ramirez Paris', position: 'Jugador', number: 20 },
      { name: 'Vicent Ferri Llopis', position: 'Jugador', number: 29 },
      { name: 'Adria Primo Paris', position: 'Jugador', number: 33 },
      { name: 'Alejandro Piqueres Doñate', position: 'Jugador', number: 35 },
      { name: 'Hugo Alarcon Ferris', position: 'Jugador', number: 43 },
      { name: 'Sergi Ramirez Paris', position: 'Jugador', number: 77 },
      { name: 'Daniel Cespedes Gutierrez', position: 'Jugador', number: 84 },
    ],
  },
  {
    slug: 'juvenil-femeni',
    name: 'Juvenil Femení',
    category: 'Juvenil',
    coach: 'Lucia Fos Cabrera',
    image: '/juvenil_femenino.jpeg',
    description:
      "L'equip juvenil femení del Club Handbol Sueca competeix en la lliga autonòmica. Cada temporada creix en nombre i en ambició, representant la força femenina del handbol a Sueca.",
    staff: [
      { name: 'Lucia Fos Cabrera', role: 'Entrenadora' },
      { name: 'Lluis Perez Lorente', role: 'Oficial' },
    ],
    players: [
      { name: 'Natalia Marques i Pascual', position: 'Jugadora', number: 8 },
      { name: 'Alba Forneli Beltran', position: 'Jugadora', number: 10 },
      { name: 'Arantxa Alemany Santamaria', position: 'Jugadora', number: 12 },
      { name: 'Andreea Rebecca Farcas', position: 'Jugadora', number: 15 },
      { name: 'Paula Palacios Viñoles', position: 'Jugadora', number: 17 },
      { name: 'Beatriz Biendicho Castells', position: 'Jugadora', number: 18 },
      { name: 'Camila Gabotto Antelo', position: 'Jugadora', number: 22 },
      { name: 'Thalia Vilar Romero', position: 'Jugadora', number: 25 },
      { name: 'Daniela Majuelo Casamayor', position: 'Jugadora', number: 28 },
      { name: 'Lucia Ran Yexu', position: 'Jugadora', number: 33 },
      { name: 'Claudia Ventura Estruch', position: 'Jugadora', number: 42 },
      { name: 'Alba de Miguel Martinez', position: 'Jugadora', number: 55 },
    ],
  },
  {
    slug: 'cadet-femeni',
    name: 'Cadet Femení',
    category: 'Cadet',
    coach: 'Juan David Girbes Navarro',
    image: '/cadete_femenino.jpeg',
    description:
      "L'equip cadet femení és una peça clau en la formació de les jugadores del futur. Competeixen amb il·lusió i aprenen valors a través de l'esport.",
    staff: [
      { name: 'Juan David Girbes Navarro', role: 'Oficial' },
      { name: 'Roberto Javier Guillem Melero', role: 'Oficial' },
    ],
    players: [
      { name: 'Nadia Dimitrov Moran', position: 'Jugadora', number: 6 },
      { name: 'Clara Estornell Albert', position: 'Jugadora', number: 7 },
      { name: 'Sara Jorge Staudt', position: 'Jugadora', number: 8 },
      { name: 'Sofia Marrades Escriva', position: 'Jugadora', number: 10 },
      { name: 'Norma Selles Llorca', position: 'Jugadora', number: 12 },
      { name: 'Claudia Marrades Escrivà', position: 'Jugadora', number: 14 },
      { name: 'Elena Lledo Ferrer', position: 'Jugadora', number: 17 },
      { name: 'Olaya Artal Piera', position: 'Jugadora', number: 18 },
      { name: 'Indhira Ferri Cortes', position: 'Jugadora', number: 19 },
      { name: 'Nerea Marrades Escriva', position: 'Jugadora', number: 20 },
      { name: 'Beatriz Marti Reig', position: 'Jugadora', number: 22 },
      { name: 'Emma Vernia Garcia', position: 'Jugadora', number: 45 },
      { name: 'Elena Pantiru', position: 'Jugadora', number: 75 },
    ],
  },
  {
    slug: 'infantil-masculi',
    name: 'Infantil Masculí',
    category: 'Infantil',
    coach: 'Carles Ramirez Paris',
    image: '/infantil_masculino.jpeg',
    description:
      "L'equip infantil masculí del CH Sueca acull xiquets des dels 10 anys. L'objectiu és gaudir del handbol, fer amics i créixer com a esportistes.",
    staff: [
      { name: 'Carles Ramirez Paris', role: 'Oficial' },
      { name: 'Marc Lledo Hervas', role: 'Oficial' },
      { name: 'Felipe Cabello Soler', role: 'Oficial' },
    ],
    players: [
      { name: 'Hugo Sales Landete', position: 'Jugador', number: 1 },
      { name: 'Vega Maldonado Gines', position: 'Jugador', number: 8 },
      { name: 'Marc Vazquez Vendrell', position: 'Jugador', number: 9 },
      { name: 'Iker Cabello Torre', position: 'Jugador', number: 10 },
      { name: 'Guillem Saez Tomas', position: 'Jugador', number: 12 },
      { name: 'Izan Redondo Rodriguez', position: 'Jugador', number: 14 },
      { name: 'Joan Baptista Sanz Marti', position: 'Jugador', number: 16 },
      { name: 'Javier Vilar Gonzalo', position: 'Jugador', number: 27 },
      { name: 'Victor Palazon Martinez', position: 'Jugador', number: 30 },
      { name: 'Jorge Silvestre Piera', position: 'Jugador', number: 45 },
      { name: 'Guillem Vidal Jordan', position: 'Jugador', number: 99 },
    ],
  },
];
