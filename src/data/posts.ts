export type Post = {
  slug: string;
  title: string;
  date: string; // ISO: "2026-02-03"
  excerpt: string;
  tags: string[];
  coverImage?: string; // "/images/..."
  content: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "img"; src: string; alt: string }
  >;
};

export const posts: Post[] = [
  {
    slug: "blog-week-12",
    title: "Blog week 12",
    date: "2026-04-27",
    excerpt:
      "Deze week markeerde de overgang van bouwen naar testen: project afgewerkt, testing voorbereid, tickets opgesteld en de eerste stappen met Playwright gezet.",
    tags: ["#Testing", "#Playwright", "#Trello", "#Tickets", "#QA", "#Stage"],
    content: [
      {
        type: "p",
        text: "Deze week voelt een beetje als het einde van een hoofdstuk en tegelijk het begin van een nieuw. Na weken, of zelfs maanden, werken aan het project, kan ik eindelijk zeggen dat alles afgewerkt is. Alle functionaliteiten zitten erin en er worden geen nieuwe features meer toegevoegd. Dat gaf toch een klein gevoel van voldoening: zo'n \"we did it\"-moment, maar dan in mijn eentje.",
      },
      {
        type: "p",
        text: "Maar zoals altijd in development betekent \"klaar\" niet echt klaar. Integendeel: het volgende belangrijke hoofdstuk is begonnen: testing.",
      },
      {
        type: "p",
        text: "Deze week stond dus volledig in het teken van het voorbereiden van dat testinggedeelte. Ik heb heel wat nieuwe tickets aangemaakt die specifiek gericht zijn op testen: wat moet getest worden, welke flows belangrijk zijn en waar mogelijke risico's zitten. Al deze taken heb ik netjes gestructureerd en toegevoegd in Trello, zodat ik een duidelijk overzicht heb van wat er nog moet gebeuren. Het geeft me rust om alles visueel te zien staan en stap voor stap te kunnen afwerken.",
      },
      {
        type: "p",
        text: "Daarnaast ben ik me beginnen verdiepen in een nieuwe tool: Playwright. Aangezien ik hier nog geen ervaring mee had, was dit in het begin even zoeken. Ik heb eerst wat documentatie doorgenomen en kleine experimenten gedaan om te begrijpen hoe alles werkt. Uiteindelijk is het me gelukt om Playwright te installeren en de eerste stappen te zetten in het effectief gebruiken ervan. Altijd leuk om weer iets nieuws bij te leren, zeker als het meteen toepasbaar is binnen je project.",
      },
      {
        type: "p",
        text: "Wat ook interessant was om te zien: de testen die eerder geschreven waren door mijn stagepartner Milan, werken momenteel niet allemaal meer. Dit komt doordat de code intussen sterk geevolueerd is, waardoor sommige testen verouderd zijn geraakt. Hoewel ik hier deze week nog niet diep ben ingedoken, is het wel duidelijk dat hier nog werk ligt. Volgende week ga ik hier zeker mee aan de slag: bestaande testen updaten, fouten analyseren en zorgen dat alles weer correct draait.",
      },
      {
        type: "p",
        text: "Wat mij vooral benieuwd maakt, is dat dit testinggedeelte toch een beetje buiten mijn comfortzone ligt. Tot nu toe heb ik vooral gewerkt met UI-tests en unit tests, maar nu ga ik dat veel gerichter en gestructureerder aanpakken binnen het volledige project. Het voelt een beetje als een nieuwe uitdaging binnen dezelfde stage, en dat maakt het net interessant.",
      },
      {
        type: "p",
        text: "Als ik terugkijk op deze week, zie ik vooral een shift: van bouwen naar controleren, van creeren naar verfijnen. Het is een andere mindset, maar minstens even belangrijk. Een project kan er nog zo goed uitzien, zonder degelijke testing weet je nooit echt hoe betrouwbaar het is.",
      },
      {
        type: "p",
        text: "Ik kijk er alvast naar uit om volgende week echt in de testing te duiken en alles tot in de puntjes af te werken.",
      },
    ],
  },
];

export const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

export function getLatestPosts(limit = 3) {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
