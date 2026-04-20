# Club Handbol Sueca - Web Oficial

Web estàtica del **Club Handbol Sueca** construïda amb [Astro](https://astro.build/) i [Tailwind CSS](https://tailwindcss.com/), desplegada a GitHub Pages.

## Requisits

- [Node.js](https://nodejs.org/) 18 o superior
- npm 9 o superior

## Instal·lació i desenvolupament local

```bash
# Clonar el repositori
git clone https://github.com/[usuario]/handbolsueca-web.git
cd handbolsueca-web

# Instal·lar dependències
npm install

# Iniciar servidor de desenvolupament
npm run dev
```

El servidor s'obrirà en `http://localhost:4321`.

## Scripts disponibles

| Comanda | Descripció |
|---------|-----------|
| `npm run dev` | Servidor de desenvolupament amb hot reload |
| `npm run build` | Genera el site estàtic a `./dist` |
| `npm run preview` | Previsualitza el build localment |

## Com editar contingut

Tot el contingut editable es troba en arxius TypeScript dins de `src/data/`:

| Arxiu | Contingut |
|-------|-----------|
| `src/data/site.ts` | Configuració global: nom del club, contacte, xarxes socials, navegació |
| `src/data/teams.ts` | Equips: nom, categoria, entrenador, jugadors, imatges |
| `src/data/events.ts` | Events i activitats del club |
| `src/data/sponsors.ts` | Logos i enllaços dels col·laboradors |

### Exemple: afegir un nou equip

Obri `src/data/teams.ts` i afig un objecte al array `teams`:

```ts
{
  slug: 'infantil-femeni',
  name: 'Infantil Femení',
  category: 'Infantil',
  coach: 'Nom Entrenadora',
  image: '/images/equipos/infantil-femeni.jpg',
  description: 'Descripció del equip...',
  players: [
    { name: 'Jugadora 1', position: 'Portera', number: 1 },
  ],
}
```

### Canviar imatges

1. Col·loca la imatge a `public/images/` (en la subcarpeta adequada)
2. Actualitza la ruta en l'arxiu de dades corresponent
3. Formats recomanats: JPG o WebP, dimensions mínimes indicades als placeholders

## Desplegament a GitHub Pages

### Automàtic (recomanat)

El projecte inclou un workflow de GitHub Actions (`.github/workflows/deploy.yml`) que desplega automàticament a GitHub Pages en cada push a `main`.

**Passos per activar-ho:**

1. Puja el codi a un repositori de GitHub
2. Ves a **Settings → Pages**
3. En "Source", selecciona **GitHub Actions**
4. Fes push a `main` i el desplegament s'executarà automàticament

### Manual

```bash
npm run build
# Puja el contingut de ./dist al servidor
```

## Connectar domini propi

Per usar `handbolsueca.es` com a domini:

1. Crea un arxiu `public/CNAME` amb el contingut:
   ```
   handbolsueca.es
   ```

2. Al registrador de dominis, configura els DNS:
   - **Tipus A** apuntant a les IPs de GitHub Pages:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **Tipus CNAME** per a `www`: `[usuario].github.io`

3. A GitHub, ves a **Settings → Pages** i escriu el domini a "Custom domain"

4. Activa "Enforce HTTPS"

## Formulari de contacte

El formulari de contacte utilitza [Formspree](https://formspree.io/). Per activar-lo:

1. Registra't a Formspree i crea un formulari
2. Obri `src/pages/club/contacte.astro`
3. Substituïx `XXXXXXXX` per l'ID del teu formulari de Formspree

## Estructura del projecte

```
src/
├── components/
│   ├── layout/     → TopBar, Header, Footer, Newsletter
│   ├── sections/   → Seccions de la Home
│   └── ui/         → Components reutilitzables
├── data/           → Contingut editable (equips, events, sponsors)
├── layouts/        → Layout base amb SEO
├── pages/          → Pàgines del site
└── styles/         → Estils globals + Tailwind
```

## Stack tècnic

- **Astro 4** - Framework per a sites estàtics
- **Tailwind CSS 3** - Utilitats CSS
- **AOS** - Animacions al fer scroll
- **Poppins + Inter** - Tipografies (auto-hospedades)

## Llicència

Tots els drets reservats. Club Handbol Sueca.
