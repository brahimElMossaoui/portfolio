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
    slug: "blog-week-14",
    title: "Blog week 14",
    date: "2026-05-11",
    excerpt:
      "Een afwisselende week met veel testen, een stage-evenement op school, intervisie en het afronden van het project richting presentatie.",
    tags: ["#Testing", "#StageEvent", "#Demo", "#Intervisie", "#Presentatie", "#Stage"],
    content: [
      {
        type: "p",
        text: "Een nieuwe week, een nieuwe blog - en stilaan begint het ook te voelen alsof mijn stage richting zijn finale gaat. Afgelopen week stond opnieuw grotendeels in het teken van testen schrijven, maar deze keer zat er ook een hele leuke en unieke ervaring tussen die mijn week echt speciaal maakte.",
      },
      {
        type: "p",
        text: "Op dinsdag kreeg ik namelijk de kans om mee te gaan naar het stage-evenement dat het bedrijf organiseerde op school. Dat was niet alleen een leuke afwisseling van het dagelijkse werk, maar ook een totaal andere rol voor mij. In plaats van zelf student te zijn die op zoek is naar een stageplek, stond ik deze keer aan de andere kant: ik mocht het bedrijf vertegenwoordigen en andere studenten helpen.",
      },
      {
        type: "p",
        text: "Ik begon meestal met een korte uitleg over hoe mijn stage bij Brightest eruitziet. Daarna gaf ik een demo van het project waar ik de afgelopen weken zo hard aan heb gewerkt. Het was best tof om te zien hoe geinteresseerde studenten reageerden en vragen stelden. Je merkt dan pas echt hoeveel je zelf hebt bijgeleerd, omdat je alles op een duidelijke manier kan uitleggen.",
      },
      {
        type: "p",
        text: "Wat me misschien nog het meeste voldoening gaf, was dat ik andere studenten effectief kon helpen. Ik gaf hen tips over hoe ze best hun zoektocht aanpakken: op tijd beginnen, initiatief tonen, en niet bang zijn om zichzelf te laten zien. Het voelde een beetje alsof ik mijn eigen ervaringen van de voorbije maanden kon doorgeven, en dat maakte het extra waardevol.",
      },
      {
        type: "p",
        text: "Later in de week, op vrijdag, had ik ook nog een intervisiemoment op school. Daar bespraken we hoe onze stages verlopen en kregen we de kans om ervaringen uit te wisselen met andere studenten. Het was interessant om te horen hoe anderen hun stage beleven en om samen na te denken over mogelijke verbeterpunten voor de opleiding. Zo'n momenten zorgen ervoor dat je even kan reflecteren en alles in perspectief kan plaatsen.",
      },
      {
        type: "p",
        text: "De rest van de week stond vooral in het teken van afronden. Ik heb verder gewerkt aan het schrijven en afwerken van testen, en tegelijkertijd ook het project in zijn geheel netjes afgerond. Alles begint stilaan op zijn plaats te vallen, wat een goed gevoel geeft. Zeker met het presentatie-moment dat volgende week op de planning staat, merk ik dat de focus nu ligt op het volledig \"klaarzetten\" van alles.",
      },
      {
        type: "p",
        text: "Wat deze week voor mij typeerde, was de afwisseling: enerzijds diep geconcentreerd bezig zijn met testen en afronden, en anderzijds even uit die technische bubbel stappen en mensen helpen, uitleg geven en ervaringen delen. Die combinatie maakte het een bijzonder aangename en leerrijke week.",
      },
      {
        type: "p",
        text: "Ik kijk nu vooral uit naar volgende week, waar alles samenkomt tijdens het presentatie-moment. Spannend, maar ook iets om trots op te zijn na alles wat ik de voorbije weken heb opgebouwd.",
      },
    ],
  },
  {
    slug: "blog-week-13",
    title: "Blog week 13",
    date: "2026-05-04",
    excerpt:
      "Deze week stond volledig in het teken van grondig testen, met focus op de userpage, accountrollen en het oplossen van een backend buildfout.",
    tags: ["#Testing", "#Userpage", "#Rollen", "#Backend", "#Meetings", "#Stage"],
    content: [
      {
        type: "p",
        text: "Deze week stond volledig in het teken van testen, testen en... nog eens testen. Waar de focus de voorbije weken vooral lag op het bouwen van functionaliteiten, ben ik nu echt diep in het testing-gedeelte gedoken. Het is opvallend hoe anders deze fase aanvoelt: in plaats van nieuwe dingen te creeren, ben ik nu vooral bezig met het controleren, uitdagen en soms zelfs \"breken\" van wat er al gebouwd is.",
      },
      {
        type: "p",
        text: "Tijdens het schrijven van de testen kwam er plots een onverwachte uitdaging op mijn pad: een buildfout in de backend. Zo'n moment haalt je even uit je flow, maar tegelijk hoort het er natuurlijk bij. Ik heb die fout zo snel mogelijk proberen op te lossen, omdat het hele project anders vastloopt. Het gaf wel een goed gevoel om even terug in de code te duiken en het probleem effectief te kunnen fixen. Het zijn net die kleine \"crisismomentjes\" die het werk afwisselend en interessant houden.",
      },
      {
        type: "p",
        text: "Voorlopig ben ik me vooral aan het focussen op het testen van de userpage. Daarbij kijk ik niet alleen of alles werkt, maar ook of alles correct wordt weergegeven voor de verschillende accountrollen. Ik test dit dus voor alle drie de rollen afzonderlijk: wat ziet een admin, wat ziet een gewone gebruiker, en zijn er geen zaken zichtbaar die eigenlijk niet zichtbaar mogen zijn? Dit maakt het testen een stuk complexer, maar ook realistischer. Het dwingt me om echt na te denken vanuit het perspectief van de eindgebruiker.",
      },
      {
        type: "p",
        text: "Wat ik merk, is dat testen schrijven een soort puzzel is. Je probeert alle mogelijke scenario's te bedenken: wat als iemand iets verkeerd invoert? Wat als een bepaalde data ontbreekt? Wat als een gebruiker probeert iets te doen waarvoor hij geen rechten heeft? Het is soms zoeken naar de juiste aanpak, maar elke geslaagde test voelt als een kleine overwinning.",
      },
      {
        type: "p",
        text: "Naast al het technische werk was er gelukkig ook ruimte voor wat ontspanning. Het was weer gezellig met de andere stagiaires, en de sfeer zat er goed in. Vooral tijdens het schoterkas spelen werd het verrassend spannend. Er ontstond een gezonde competitie waarbij iedereen natuurlijk wilde winnen. Het zijn die momenten die ervoor zorgen dat de stage niet alleen leerrijk is, maar ook gewoon leuk blijft.",
      },
      {
        type: "p",
        text: "Ook deze week had ik opnieuw mijn vaste meetings met mijn stage mentor, technische begeleider en de project owner. Deze verliepen zoals gewoonlijk vlot. Ik heb opnieuw waardevolle feedback gekregen waar ik verder mee aan de slag kan. Het is fijn om te merken dat mijn werk opgevolgd wordt en dat ik steeds gerichter kan verbeteren.",
      },
      {
        type: "p",
        text: "Als ik deze week in een woord zou moeten samenvatten, dan is het \"grondigheid\". Alles draait momenteel rond het zeker maken dat wat gebouwd is, ook echt goed werkt in elke mogelijke situatie. Het vraagt geduld en aandacht voor detail, maar het is een cruciale stap richting een kwalitatief eindproduct.",
      },
      {
        type: "p",
        text: "Ik ben benieuwd wat volgende week zal brengen, maar een ding is zeker: ik blijf verder bouwen aan de betrouwbaarheid van het project, test per test.",
      },
    ],
  },
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
