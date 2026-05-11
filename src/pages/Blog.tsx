import { useMemo, useState } from "react";
import TagFilter from "../components/TagFilter";

const week14Tags = ["#Testing", "#StageEvent", "#Demo", "#Intervisie", "#Presentatie", "#Stage"];
const week13Tags = ["#Testing", "#Userpage", "#Rollen", "#Backend", "#Meetings", "#Stage"];
const week12Tags = ["#Testing", "#Playwright", "#Trello", "#Tickets", "#QA", "#Stage"];
const week11Tags = ["#Zelfstandigheid", "#Feedback", "#Features", "#Planning", "#Meetings", "#Stage"];
const week10Tags = ["#Testing", "#Feedback", "#Security", "#Demo", "#Tickets", "#Stage"];
const week9Tags = ["#Meeting", "#Technisch", "#Database", "#Team", "#Ontwikkeling", "#Stage"];
const week8Tags = ["#Feedback", "#Paginatie", "#Admin", "#UX", "#Optimalisatie", "#Features"];
const week7Tags = ["#Bugfixes", "#Testing", "#Automation", "#Meetings", "#Planning", "#Teamwork"];
const week6Tags = ["#Frontend", "#Backend", "#UX", "#Bugs", "#BulkActions", "#Validatie"];
const week5Tags = ["#Users", "#CRUD", "#Admin", "#MergeConflicten", "#Jobbeurs", "#Intervisie"];
const week4Tags = ["#Users", "#CRUD", "#Backend", "#Frontend", "#Demo", "#Git"];
const week3Tags = ["#Planning", "#Feedback", "#Trello", "#UserStories", "#Guidelines", "#Branding"];
const week2Tags = ["#TypeScript", "#Webshop", "#Frontend", "#Styling", "#Componenten", "#GameNight"];
const week1Tags = ["#Onboarding", "#UserStories", "#Trello", "#Figma", "#Meetings", "#Feedback"];

export default function Blog() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(
    () =>
      Array.from(
        new Set([
          ...week14Tags,
          ...week13Tags,
          ...week12Tags,
          ...week11Tags,
          ...week10Tags,
          ...week9Tags,
          ...week8Tags,
          ...week7Tags,
          ...week6Tags,
          ...week5Tags,
          ...week4Tags,
          ...week3Tags,
          ...week2Tags,
          ...week1Tags,
        ])
      ).sort(),
    []
  );

  const hasTagMatch = (weekTags: string[]) =>
    selectedTags.length === 0 || selectedTags.some((tag) => weekTags.includes(tag));

  const showWeek14 = hasTagMatch(week14Tags);
  const showWeek13 = hasTagMatch(week13Tags);
  const showWeek12 = hasTagMatch(week12Tags);
  const showWeek11 = hasTagMatch(week11Tags);
  const showWeek10 = hasTagMatch(week10Tags);
  const showWeek9 = hasTagMatch(week9Tags);
  const showWeek8 = hasTagMatch(week8Tags);
  const showWeek7 = hasTagMatch(week7Tags);
  const showWeek6 = hasTagMatch(week6Tags);
  const showWeek5 = hasTagMatch(week5Tags);
  const showWeek4 = hasTagMatch(week4Tags);
  const showWeek3 = hasTagMatch(week3Tags);
  const showWeek2 = hasTagMatch(week2Tags);
  const showWeek1 = hasTagMatch(week1Tags);
  const hasResults =
    showWeek14 ||
    showWeek13 ||
    showWeek12 ||
    showWeek11 ||
    showWeek10 ||
    showWeek9 ||
    showWeek8 ||
    showWeek7 ||
    showWeek6 ||
    showWeek5 ||
    showWeek4 ||
    showWeek3 ||
    showWeek2 ||
    showWeek1;

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((existing) => existing !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="stack">
      <h1>Blog Posts</h1>

      <TagFilter
        tags={allTags}
        selected={selectedTags}
        onToggle={toggleTag}
        onClear={() => setSelectedTags([])}
      />

      {!hasResults ? (
        <article className="card">
          <p className="post-excerpt">
            Geen resultaten voor de geselecteerde tags. Probeer een andere tagcombinatie of klik op
            reset.
          </p>
        </article>
      ) : null}

      {showWeek14 ? (
        <article className="card latest-card">
          <div className="post-meta">Blogpost week 14</div>
          <h3 className="post-title">Blog week 14</h3>
          <p className="post-excerpt">
            Een nieuwe week, een nieuwe blog - en stilaan begint het ook te voelen alsof mijn
            stage richting zijn finale gaat. Afgelopen week stond opnieuw grotendeels in het teken
            van testen schrijven, maar deze keer zat er ook een hele leuke en unieke ervaring
            tussen die mijn week echt speciaal maakte.
          </p>
          <p className="post-excerpt">
            Op dinsdag kreeg ik namelijk de kans om mee te gaan naar het stage-evenement dat het
            bedrijf organiseerde op school. Dat was niet alleen een leuke afwisseling van het
            dagelijkse werk, maar ook een totaal andere rol voor mij. In plaats van zelf student te
            zijn die op zoek is naar een stageplek, stond ik deze keer aan de andere kant: ik mocht
            het bedrijf vertegenwoordigen en andere studenten helpen.
          </p>
          <p className="post-excerpt">
            Ik begon meestal met een korte uitleg over hoe mijn stage bij Brightest eruitziet.
            Daarna gaf ik een demo van het project waar ik de afgelopen weken zo hard aan heb
            gewerkt. Het was best tof om te zien hoe geinteresseerde studenten reageerden en vragen
            stelden. Je merkt dan pas echt hoeveel je zelf hebt bijgeleerd, omdat je alles op een
            duidelijke manier kan uitleggen.
          </p>
          <p className="post-excerpt">
            Wat me misschien nog het meeste voldoening gaf, was dat ik andere studenten effectief
            kon helpen. Ik gaf hen tips over hoe ze best hun zoektocht aanpakken: op tijd beginnen,
            initiatief tonen, en niet bang zijn om zichzelf te laten zien. Het voelde een beetje
            alsof ik mijn eigen ervaringen van de voorbije maanden kon doorgeven, en dat maakte het
            extra waardevol.
          </p>
          <p className="post-excerpt">
            Later in de week, op vrijdag, had ik ook nog een intervisiemoment op school. Daar
            bespraken we hoe onze stages verlopen en kregen we de kans om ervaringen uit te
            wisselen met andere studenten. Het was interessant om te horen hoe anderen hun stage
            beleven en om samen na te denken over mogelijke verbeterpunten voor de opleiding.
            Zo&apos;n momenten zorgen ervoor dat je even kan reflecteren en alles in perspectief
            kan plaatsen.
          </p>
          <p className="post-excerpt">
            De rest van de week stond vooral in het teken van afronden. Ik heb verder gewerkt aan
            het schrijven en afwerken van testen, en tegelijkertijd ook het project in zijn geheel
            netjes afgerond. Alles begint stilaan op zijn plaats te vallen, wat een goed gevoel
            geeft. Zeker met het presentatie-moment dat volgende week op de planning staat, merk ik
            dat de focus nu ligt op het volledig &quot;klaarzetten&quot; van alles.
          </p>
          <p className="post-excerpt">
            Wat deze week voor mij typeerde, was de afwisseling: enerzijds diep geconcentreerd
            bezig zijn met testen en afronden, en anderzijds even uit die technische bubbel stappen
            en mensen helpen, uitleg geven en ervaringen delen. Die combinatie maakte het een
            bijzonder aangename en leerrijke week.
          </p>
          <p className="post-excerpt">
            Ik kijk nu vooral uit naar volgende week, waar alles samenkomt tijdens het
            presentatie-moment. Spannend, maar ook iets om trots op te zijn na alles wat ik de
            voorbije weken heb opgebouwd.
          </p>
          <div className="tags">
            {week14Tags.map((tag) => (
              <span key={tag} className="tag tag-static">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ) : null}

      {showWeek13 ? (
        <article className="card latest-card">
          <div className="post-meta">Blogpost week 13</div>
          <h3 className="post-title">Blog week 13</h3>
          <p className="post-excerpt">
            Deze week stond volledig in het teken van testen, testen en... nog eens testen. Waar
            de focus de voorbije weken vooral lag op het bouwen van functionaliteiten, ben ik nu
            echt diep in het testing-gedeelte gedoken. Het is opvallend hoe anders deze fase
            aanvoelt: in plaats van nieuwe dingen te creeren, ben ik nu vooral bezig met het
            controleren, uitdagen en soms zelfs &quot;breken&quot; van wat er al gebouwd is.
          </p>
          <p className="post-excerpt">
            Tijdens het schrijven van de testen kwam er plots een onverwachte uitdaging op mijn
            pad: een buildfout in de backend. Zo&apos;n moment haalt je even uit je flow, maar
            tegelijk hoort het er natuurlijk bij. Ik heb die fout zo snel mogelijk proberen op te
            lossen, omdat het hele project anders vastloopt. Het gaf wel een goed gevoel om even
            terug in de code te duiken en het probleem effectief te kunnen fixen. Het zijn net die
            kleine &quot;crisismomentjes&quot; die het werk afwisselend en interessant houden.
          </p>
          <p className="post-excerpt">
            Voorlopig ben ik me vooral aan het focussen op het testen van de userpage. Daarbij
            kijk ik niet alleen of alles werkt, maar ook of alles correct wordt weergegeven voor de
            verschillende accountrollen. Ik test dit dus voor alle drie de rollen afzonderlijk: wat
            ziet een admin, wat ziet een gewone gebruiker, en zijn er geen zaken zichtbaar die
            eigenlijk niet zichtbaar mogen zijn? Dit maakt het testen een stuk complexer, maar ook
            realistischer. Het dwingt me om echt na te denken vanuit het perspectief van de
            eindgebruiker.
          </p>
          <p className="post-excerpt">
            Wat ik merk, is dat testen schrijven een soort puzzel is. Je probeert alle mogelijke
            scenario&apos;s te bedenken: wat als iemand iets verkeerd invoert? Wat als een
            bepaalde data ontbreekt? Wat als een gebruiker probeert iets te doen waarvoor hij geen
            rechten heeft? Het is soms zoeken naar de juiste aanpak, maar elke geslaagde test voelt
            als een kleine overwinning.
          </p>
          <p className="post-excerpt">
            Naast al het technische werk was er gelukkig ook ruimte voor wat ontspanning. Het was
            weer gezellig met de andere stagiaires, en de sfeer zat er goed in. Vooral tijdens het
            schoterkas spelen werd het verrassend spannend. Er ontstond een gezonde competitie
            waarbij iedereen natuurlijk wilde winnen. Het zijn die momenten die ervoor zorgen dat
            de stage niet alleen leerrijk is, maar ook gewoon leuk blijft.
          </p>
          <p className="post-excerpt">
            Ook deze week had ik opnieuw mijn vaste meetings met mijn stage mentor, technische
            begeleider en de project owner. Deze verliepen zoals gewoonlijk vlot. Ik heb opnieuw
            waardevolle feedback gekregen waar ik verder mee aan de slag kan. Het is fijn om te
            merken dat mijn werk opgevolgd wordt en dat ik steeds gerichter kan verbeteren.
          </p>
          <p className="post-excerpt">
            Als ik deze week in een woord zou moeten samenvatten, dan is het
            &quot;grondigheid&quot;. Alles draait momenteel rond het zeker maken dat wat gebouwd
            is, ook echt goed werkt in elke mogelijke situatie. Het vraagt geduld en aandacht voor
            detail, maar het is een cruciale stap richting een kwalitatief eindproduct.
          </p>
          <p className="post-excerpt">
            Ik ben benieuwd wat volgende week zal brengen, maar een ding is zeker: ik blijf verder
            bouwen aan de betrouwbaarheid van het project, test per test.
          </p>
          <div className="tags">
            {week13Tags.map((tag) => (
              <span key={tag} className="tag tag-static">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ) : null}

      {showWeek12 ? (
        <article className="card latest-card">
          <div className="post-meta">Blogpost week 12</div>
          <h3 className="post-title">Blog week 12</h3>
          <p className="post-excerpt">
            Deze week voelt een beetje als het einde van een hoofdstuk en tegelijk het begin van
            een nieuw. Na weken, of zelfs maanden, werken aan het project, kan ik eindelijk zeggen
            dat alles afgewerkt is. Alle functionaliteiten zitten erin en er worden geen nieuwe
            features meer toegevoegd. Dat gaf toch een klein gevoel van voldoening: zo&apos;n
            &quot;we did it&quot;-moment, maar dan in mijn eentje.
          </p>
          <p className="post-excerpt">
            Maar zoals altijd in development betekent &quot;klaar&quot; niet echt klaar. Integendeel:
            het volgende belangrijke hoofdstuk is begonnen: testing.
          </p>
          <p className="post-excerpt">
            Deze week stond dus volledig in het teken van het voorbereiden van dat testinggedeelte.
            Ik heb heel wat nieuwe tickets aangemaakt die specifiek gericht zijn op testen: wat
            moet getest worden, welke flows belangrijk zijn en waar mogelijke risico&apos;s zitten.
            Al deze taken heb ik netjes gestructureerd en toegevoegd in Trello, zodat ik een
            duidelijk overzicht heb van wat er nog moet gebeuren. Het geeft me rust om alles
            visueel te zien staan en stap voor stap te kunnen afwerken.
          </p>
          <p className="post-excerpt">
            Daarnaast ben ik me beginnen verdiepen in een nieuwe tool: Playwright. Aangezien ik
            hier nog geen ervaring mee had, was dit in het begin even zoeken. Ik heb eerst wat
            documentatie doorgenomen en kleine experimenten gedaan om te begrijpen hoe alles
            werkt. Uiteindelijk is het me gelukt om Playwright te installeren en de eerste stappen
            te zetten in het effectief gebruiken ervan. Altijd leuk om weer iets nieuws bij te
            leren, zeker als het meteen toepasbaar is binnen je project.
          </p>
          <p className="post-excerpt">
            Wat ook interessant was om te zien: de testen die eerder geschreven waren door mijn
            stagepartner Milan, werken momenteel niet allemaal meer. Dit komt doordat de code
            intussen sterk geevolueerd is, waardoor sommige testen verouderd zijn geraakt. Hoewel
            ik hier deze week nog niet diep ben ingedoken, is het wel duidelijk dat hier nog werk
            ligt. Volgende week ga ik hier zeker mee aan de slag: bestaande testen updaten, fouten
            analyseren en zorgen dat alles weer correct draait.
          </p>
          <p className="post-excerpt">
            Wat mij vooral benieuwd maakt, is dat dit testinggedeelte toch een beetje buiten mijn
            comfortzone ligt. Tot nu toe heb ik vooral gewerkt met UI-tests en unit tests, maar nu
            ga ik dat veel gerichter en gestructureerder aanpakken binnen het volledige project.
            Het voelt een beetje als een nieuwe uitdaging binnen dezelfde stage, en dat maakt het
            net interessant.
          </p>
          <p className="post-excerpt">
            Als ik terugkijk op deze week, zie ik vooral een shift: van bouwen naar controleren,
            van creeren naar verfijnen. Het is een andere mindset, maar minstens even belangrijk.
            Een project kan er nog zo goed uitzien, zonder degelijke testing weet je nooit echt hoe
            betrouwbaar het is.
          </p>
          <p className="post-excerpt">
            Ik kijk er alvast naar uit om volgende week echt in de testing te duiken en alles tot
            in de puntjes af te werken.
          </p>
          <div className="tags">
            {week12Tags.map((tag) => (
              <span key={tag} className="tag tag-static">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ) : null}

      {showWeek11 ? (
        <article className="card latest-card">
          <div className="post-meta">Blogpost week 11</div>
          <h3 className="post-title">Blog week 11</h3>
          <p className="post-excerpt">
            Deze week stond volledig in het teken van zelfstandigheid en verdieping. Waar ik de
            weken voordien nog samenwerkte met mijn stagepartner, was ik deze week volledig op
            mezelf aangewezen. Dat bracht enerzijds een extra uitdaging met zich mee, maar gaf me
            anderzijds ook de kans om mijn eigen tempo te bepalen en mijn persoonlijke aanpak verder
            te ontwikkelen.
          </p>
          <p className="post-excerpt">
            Een groot deel van mijn tijd ging naar het verwerken van de feedback die we de donderdag
            ervoor hadden ontvangen. Ik merkte dat het bekijken van die feedback met een frisse blik
            me hielp om gerichter te werken en beter te begrijpen waar de prioriteiten lagen. In
            plaats van alles tegelijk te willen aanpakken, heb ik bewust gekozen om me eerst te
            focussen op het ontwikkelen van nieuwe extra functionaliteiten. Dit gaf me niet alleen
            nieuwe energie, maar zorgde er ook voor dat ik creatief kon nadenken over hoe ik het
            project verder kon uitbreiden.
          </p>
          <p className="post-excerpt">
            Het ontwikkelen van deze extra&apos;s was zonder twijfel het meest interessante deel van
            mijn week. Ik kreeg de ruimte om nieuwe ideeën uit te testen en dingen te bouwen die
            echt een meerwaarde kunnen bieden. Soms liep ik tegen kleine obstakels aan, maar juist
            die momenten zorgden ervoor dat ik nieuwe oplossingen moest zoeken en bijleerde. Het gaf
            me een goed gevoel om te merken dat ik steeds zelfstandiger problemen kan analyseren en
            oplossen.
          </p>
          <p className="post-excerpt">
            De feedback op de bestaande onderdelen heb ik bewust nog even laten liggen. Ik wil deze
            in de komende week grondig aanpakken, zodat ik er voldoende tijd en aandacht aan kan
            besteden. Op die manier kan ik ervoor zorgen dat alles niet alleen werkt, maar ook
            kwalitatief sterk en gebruiksvriendelijk is.
          </p>
          <p className="post-excerpt">
            Daarnaast had ik deze week opnieuw mijn vaste meetings: met mijn stage mentor, de
            technische begeleider en de project owner. Deze momenten blijven enorm waardevol. Ze
            geven me niet alleen richting, maar zorgen er ook voor dat ik mijn voortgang kan
            toelichten en gerichte feedback krijg. Het is ook motiverend om te zien dat er
            interesse is in wat ik doe en dat mijn werk effectief opgevolgd wordt.
          </p>
          <p className="post-excerpt">
            Wat deze week voor mij vooral duidelijk maakte, is hoe belangrijk structuur en planning
            zijn wanneer je alleen werkt. Zonder directe samenwerking moet je zelf je focus bewaken
            en ervoor zorgen dat je niet afdwaalt. Tegelijk gaf het me ook een gevoel van
            verantwoordelijkheid en trots: dit project is nu echt &quot;van mij&quot; om verder uit
            te bouwen.
          </p>
          <p className="post-excerpt">
            Al bij al was het een productieve en leerrijke week, waarin ik niet alleen technisch
            gegroeid ben, maar ook op vlak van zelfstandigheid en probleemoplossend denken. Ik kijk
            ernaar uit om volgende week de feedback verder te verwerken en alles samen te brengen
            tot een nog sterker geheel.
          </p>
          <div className="tags">
            {week11Tags.map((tag) => (
              <span key={tag} className="tag tag-static">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ) : null}

      {showWeek10 ? (
        <article className="card latest-card">
          <div className="post-meta">Blogpost week 10</div>
          <h3 className="post-title">Blog week 10</h3>
          <p className="post-excerpt">
            Afgelopen week stond volledig in het teken van testen en finetunen van mijn project.
            Ik heb me vooral gefocust op het feedbackgedeelte en alles wat al ontwikkeld was eens
            grondig onder de loep genomen. Het was eigenlijk het moment om even stil te staan bij:
            werkt alles zoals het hoort?
          </p>
          <p className="post-excerpt">
            Concreet heb ik gecontroleerd of alle gebruikers de juiste rechten hebben en of elke
            functionaliteit effectief doet wat ze moet doen. Daarnaast heb ik ook gekeken naar de
            beveiliging, zoals passwordvalidatie en andere checks. Het gaf me een goed beeld van
            hoe stabiel het project momenteel is, maar ook waar er nog kleine verbeterpunten zitten.
          </p>
          <p className="post-excerpt">
            Donderdag was een belangrijke dag, want toen hadden we onze laatste meeting met mijn
            technische begeleider, de project owner en mijn stagepartner Milan. Voor Milan was het
            trouwens zijn laatste stagedag op kantoor, wat het toch een beetje een speciaal moment
            maakte. Tijdens deze meeting hebben we ook een demo gegeven van het project.
          </p>
          <p className="post-excerpt">
            Het was echt fijn om te zien hoeveel we al bereikt hebben. De reactie was positief en
            dat gaf toch wel een extra motivatieboost. Natuurlijk kwam er ook feedback uit de
            meeting, maar dat is alleen maar goed. Ik heb die meteen omgezet in concrete tickets,
            zodat ik er gestructureerd mee aan de slag kan.
          </p>
          <p className="post-excerpt">
            Op dit moment ben ik dus bezig met het verwerken van die feedback en het verder
            verbeteren van het project. Stap voor stap komt alles meer samen, en dat is leuk om te
            zien.
          </p>
          <div className="tags">
            {week10Tags.map((tag) => (
              <span key={tag} className="tag tag-static">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ) : null}

      {showWeek9 ? (
        <article className="card latest-card">
          <div className="post-meta">Blogpost week 9</div>
          <h3 className="post-title">Blog week 9</h3>
          <p className="post-excerpt">
            Afgelopen week was een productieve en gezellige week waarin ik zowel inhoudelijk als
            sociaal verder ben gegroeid binnen het project en het team.
          </p>
          <p className="post-excerpt">
            Op woensdag had ik een belangrijke meeting, inclusief een technische bespreking.
            Tijdens deze sessie hebben we niet alleen de huidige stand van zaken doorgenomen, maar
            ook gekeken naar mogelijke uitbreidingen van het project. Het was waardevol om samen na
            te denken over extra functionaliteiten die we kunnen toevoegen om het eindresultaat nog
            sterker te maken.
          </p>
          <p className="post-excerpt">
            Daarnaast heb ik tijdens deze meeting ook hulp gekregen bij een specifiek technisch
            onderdeel, namelijk hoe ik een image kan toevoegen aan de database. Dit gaf me meer
            inzicht en vertrouwen om hier zelfstandig verder mee aan de slag te gaan.
          </p>
          <p className="post-excerpt">
            Naast het inhoudelijke werk was er ook ruimte voor sociaal contact. Ik heb beter
            kennisgemaakt met mijn collega&apos;s, wat zorgde voor een fijne en ontspannen sfeer.
            Tussendoor hebben we zelfs een potje shotterkas gespeeld, wat zorgde voor wat extra
            teamspirit en plezier tijdens de werkdag.
          </p>
          <p className="post-excerpt">
            Verder heb ik de rest van de week besteed aan het verder ontwikkelen van het project.
            Ik heb stappen gezet in de implementatie en ben dichter bij het realiseren van de
            gestelde doelen gekomen.
          </p>
          <p className="post-excerpt">
            Kortom, het was een gebalanceerde week met zowel technische vooruitgang als leuke
            momenten met het team.
          </p>
          <div className="tags">
            {week9Tags.map((tag) => (
              <span key={tag} className="tag tag-static">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ) : null}

      {showWeek8 ? (
        <article className="card latest-card">
          <div className="post-meta">Blogpost week 8</div>
          <h3 className="post-title">Blog week 8</h3>
          <p className="post-excerpt">
            Op maandag begon de week zoals gewoonlijk met een rustige opstart: een kop koffie en
            een kort babbeltje met het team. Daarna volgde onze wekelijkse meeting, waarin we
            elkaar een update gaven over de vooruitgang van de voorbije week. Tijdens deze meeting
            werd de progressie ook besproken met de stagementor, die waar nodig bijstuurde en extra
            feedback gaf. Daarnaast werd er vooruitgeblikt naar de komende weken: wat er nog
            verwacht wordt van ons als team, maar ook wat er individueel van ons verwacht wordt.
            Nadien ben ik verder gegaan met het implementeren van de feedback die ik had gekregen
            op mijn pull request. Intussen is ons project inhoudelijk volledig afgerond volgens de
            vooropgestelde vereisten van het bedrijf.
          </p>
          <p className="post-excerpt">
            Op dinsdag ben ik verder gegaan met het ontwikkelen en verwerken van feedback. Mijn
            focus lag vooral op het implementeren van paginatie op de adminpagina. Hierbij heb ik
            ervoor gezorgd dat grote hoeveelheden data overzichtelijk worden weergegeven, met
            functionaliteiten zoals navigatie tussen pagina&apos;s, het beperken van het aantal
            items per pagina en het verbeteren van de gebruiksvriendelijkheid voor de
            eindgebruiker.
          </p>
          <p className="post-excerpt">
            Woensdag stond vooral in het teken van verder ontwikkelen, met weinig meetings. Er was
            wel een wekelijkse meeting rond mijn persoonlijke stageprogressie. Tijdens dit gesprek
            werd besproken hoe ik me voel binnen de stage, waar ik eventueel tegenaan loop en hoe
            mijn groei verloopt. Dit moment biedt ook ruimte om feedback te geven en te ontvangen,
            zodat mijn leerproces optimaal blijft verlopen.
          </p>
          <p className="post-excerpt">
            Donderdag begonnen we opnieuw met een koffie en een kort babbeltje, waarna ik verder
            werkte aan de laatste tickets om het project volledig af te ronden. Rond de middag
            hadden we een technische meeting, waarin we bespraken welke &quot;nice-to-have&quot;
            functionaliteiten we nog kunnen toevoegen. Denk hierbij aan extra validaties, kleine
            UX-verbeteringen, performantie-optimalisaties en eventueel bijkomende features die het
            project nog sterker maken binnen de resterende tijd van mijn stage.
          </p>
          <p className="post-excerpt">
            Op vrijdag ben ik gestart met het opstellen van nieuwe tickets voor deze extra
            functionaliteiten. Vervolgens ben ik rustig begonnen met de implementatie ervan, waarbij
            ik stapsgewijs nieuwe features toevoeg, code optimaliseer en ervoor zorg dat alles goed
            getest en geintegreerd wordt binnen het bestaande project.
          </p>
          <div className="tags">
            {week8Tags.map((tag) => (
              <span key={tag} className="tag tag-static">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ) : null}

      {showWeek7 ? (
        <article className="card">
          <div className="post-meta">Blogpost week 7</div>
          <h3 className="post-title">Blog week 7</h3>
          <p className="post-excerpt">
            De voorbije week stond vooral in het teken van het oplossen en implementeren van bugs.
            We hebben hier veel tijd in geinvesteerd om ervoor te zorgen dat alles stabieler en
            betrouwbaarder werkt. Het is duidelijk dat dit een cruciale stap is in de verdere
            ontwikkeling van ons project.
          </p>
          <p className="post-excerpt">
            Naast het technische werk besteden we ook dagelijks aandacht aan het onderhouden van
            onze teamdynamiek. Dit doen we op een leuke manier: een potje tafelvoetbal! Het zorgt
            niet alleen voor ontspanning, maar versterkt ook de samenwerking en sfeer binnen het
            team.
          </p>
          <p className="post-excerpt">
            Tijdens de meeting van maandag hebben we een belangrijke knoop doorgehakt: we hebben
            besproken wanneer we onze eindpresentatie zullen inplannen. Dit geeft ons een duidelijke
            deadline om naartoe te werken en helpt ons om de komende weken goed te structureren.
          </p>
          <p className="post-excerpt">
            Op donderdag hebben we verder ingezoomd op de automation binnen het project. Daarbij
            hebben we afgesproken welk deel ik op mij zal nemen. Dit zorgt voor meer duidelijkheid
            in de taakverdeling en maakt het makkelijker om gericht vooruitgang te boeken.
          </p>
          <p className="post-excerpt">
            Daarnaast hebben we deze week ook veel getest. We hebben het project grondig onder de
            loep genomen om eventuele fouten of problemen op te sporen. Door uitgebreid te testen,
            krijgen we beter inzicht in wat goed werkt en waar nog verbeteringen nodig zijn.
          </p>
          <p className="post-excerpt">
            Kortom, het was een productieve week waarin we zowel technisch als team mooie
            stappen hebben gezet. Op naar de volgende fase!
          </p>
          <div className="tags">
            {week7Tags.map((tag) => (
              <span key={tag} className="tag tag-static">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ) : null}

      {showWeek6 ? (
        <article className="card">
          <div className="post-meta">Blogpost week 6</div>
          <h3 className="post-title">Blog week 6</h3>
          <p className="post-excerpt">
            Afgelopen week hebben we grote stappen gezet in de verdere ontwikkeling van de
            webapplicatie. De focus lag vooral op het volledig koppelen van de frontend met de
            backend en het verder verbeteren van de gebruikerservaring. Daarnaast hebben we ook
            verschillende bugs opgelost en nieuwe functionaliteiten toegevoegd.
          </p>
          <p className="post-excerpt">
            Op maandag begon de week met een meeting waarin we kort bespraken waar we momenteel
            stonden in het project en welke onderdelen nog verder uitgewerkt moesten worden. Na
            deze meeting ben ik aan de slag gegaan met het verder koppelen van de frontend aan de
            backend. Concreet betekende dit dat de users- en admins-beheerpagina&apos;s volledig
            verbonden werden met de backend. Hierdoor werken de CRUD-functionaliteiten nu volledig
            zoals verwacht. Het was een belangrijke stap, omdat dit ervoor zorgt dat de applicatie
            nu echt met live data werkt in plaats van met tijdelijke of testdata.
          </p>
          <p className="post-excerpt">
            Op dinsdag lag de focus voornamelijk op het correct instellen van rollen en rechten
            binnen de applicatie. We hebben ervoor gezorgd dat een superadmin alle gegevens kan
            bekijken en ook kan filteren per instantie. Een admin daarentegen ziet enkel de users
            die tot zijn eigen instantie behoren. Door deze scheiding is het systeem niet alleen
            overzichtelijker, maar ook veiliger en beter georganiseerd.
          </p>
          <p className="post-excerpt">
            Tijdens woensdag hebben we verschillende UX-verbeteringen doorgevoerd. Zo hebben we
            onder andere een bevestigingspopup toegevoegd wanneer een gebruiker verwijderd wordt,
            zodat dit niet per ongeluk kan gebeuren. Daarnaast verschijnen succesmeldingen nu
            rechtsonder in beeld wanneer een actie succesvol werd uitgevoerd. Ook hebben we de
            knoppen en de algemene layout van bepaalde pagina&apos;s verbeterd en de users
            overzichtelijker weergegeven in duidelijke kolommen. Deze kleine verbeteringen maken
            het gebruik van de applicatie een stuk aangenamer.
          </p>
          <p className="post-excerpt">
            Op donderdag hadden we opnieuw een meeting waarin we de vooruitgang van de week
            bespraken. Na de meeting heb ik verder gewerkt aan het toevoegen van
            bulkfunctionaliteiten. Zo hebben we een functie toegevoegd om snel meerdere users aan
            te maken via een &quot;fast create users&quot;-optie. Daarnaast hebben we ook een
            mogelijkheid toegevoegd om alle users van een geselecteerde instantie in een keer te
            verwijderen, uiteraard met een duidelijke waarschuwing zodat dit niet per ongeluk
            gebeurt.
          </p>
          <p className="post-excerpt">
            Op vrijdag hebben we ons verder gericht op het verbeteren van de instances en de
            bugs-module. Voor de instances hebben we een mogelijkheid toegevoegd om een instantie te
            enablen of disablen. Enkel instanties die enabled zijn, kunnen nu gekozen worden bij
            het registreren van nieuwe users. Dit zorgt voor meer controle over welke instanties
            actief gebruikt kunnen worden.
          </p>
          <p className="post-excerpt">
            Daarnaast hebben we de bugs-module verder gekoppeld aan de backend. Een nieuwe bug uit
            de backend werd ook in de frontend geimplementeerd en we hebben een automatische
            synchronisatie toegevoegd zodat ontbrekende bug-configuraties automatisch worden
            aangemaakt. Ook hebben we een probleem opgelost waarbij soms dubbele bug-entries konden
            verschijnen.
          </p>
          <p className="post-excerpt">
            Naast deze nieuwe functionaliteiten hebben we tijdens de week ook verschillende
            technische problemen opgelost, zoals parsingproblemen, hydration errors, API-call
            issues, rate-limit gedrag en enkele validatieproblemen. Door deze fixes werkt de
            applicatie nu stabieler en betrouwbaarder.
          </p>
          <p className="post-excerpt">
            Kort samengevat was het een productieve week waarin de applicatie opnieuw een stuk
            completer en gebruiksvriendelijker is geworden. De koppeling tussen frontend en backend
            is nu grotendeels afgerond en verschillende onderdelen van het systeem werken nu
            volledig geintegreerd samen.
          </p>
          <div className="tags">
            {week6Tags.map((tag) => (
              <span key={tag} className="tag tag-static">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ) : null}

      {showWeek5 ? (
        <article className="card">
          <div className="post-meta">Blogpost week 5</div>
          <h3 className="post-title">Blog week 5</h3>
          <p className="post-excerpt">
            Deze week was een beetje anders dan normaal. Ik ben de week begonnen op kantoor. Daar
            heb ik voornamelijk gewerkt aan de CRUD-functionaliteiten van de users.
          </p>
          <p className="post-excerpt">
            Tijdens het werken kwam ik ook enkele mergeconflicten tegen, waardoor een deel van de
            code herschreven moest worden. Dit heb ik dan ook aangepakt zodat alles opnieuw correct
            samenwerkte.
          </p>
          <p className="post-excerpt">
            Later op de dag heb ik ook de blogpost geschreven en deze vervolgens online gezet. In
            de namiddag had ik nog een meeting met de projectmanager (PM). Tijdens deze meeting
            hebben we kort besproken hoe alles verloopt en waar ik momenteel mee bezig ben.
          </p>
         
          <p className="post-excerpt">
            Op dinsdag ben ik verder gegaan met de CRUD-functionaliteiten van de users. Ik heb hier
            verder aan gewerkt en uiteindelijk deze taak volledig afgewerkt.
          </p>
          <p className="post-excerpt">
            Woensdag was er een jobbeurs. Ik ben daar naartoe geweest tussen 14u en 15u.
            Persoonlijk vond ik het niet zo nuttig, omdat bijna geen enkel bedrijf vacatures open
            had staan voor juniors. We hebben een volledige ronde gedaan langs de verschillende
            stands en zijn daarna terug naar huis vertrokken.
          </p>
          <p className="post-excerpt">
            Donderdag was geen kantoordag, omdat we een intervisiemoment op school hadden. Tijdens
            dit moment hebben we met enkele medeleerlingen besproken hoe onze stage verloopt, wat
            we geleerd hebben en welke technologieen we gebruiken.
          </p>
          <p className="post-excerpt">
            Op vrijdag ben ik opnieuw verder gaan werken aan de applicatie. Ik ben gestart met het
            begin van de admin CRUD-functionaliteiten en heb hier alvast een eerste deel van kunnen
            uitwerken.
          </p>
          <div className="week5-gallery">
            <img src="/images/img1.jpg" alt="Week 5 afbeelding 1" />
            <img src="/images/image2.jpg" alt="Week 5 afbeelding 2" />
          </div>
          <div className="tags">
            {week5Tags.map((tag) => (
              <span key={tag} className="tag tag-static">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ) : null}

      {showWeek4 ? (
        <article className="card">
          <div className="post-meta">Blogpost week 4</div>
          <h3 className="post-title">Blog week 4</h3>
          <p className="post-excerpt">
            Deze week heb ik vooral gewerkt aan het gedeelte rond de users. Ik heb hier alle
            CRUD-operaties voor ontwikkeld.
          </p>
          <p className="post-excerpt">
            Maandag ben ik begonnen met een update van de blogpost. Toen mijn collega's aankwamen,
            hebben we een korte check-up gedaan om te bespreken hoe alles verloopt en wat we die
            week gingen doen. Daarna zijn we verder aan de slag gegaan met de ontwikkeling van de
            webshop. De frontend was deze week volledig afgewerkt, waardoor we de week goed konden
            starten. Iedereen werkte met dezelfde versie en had een goede basis om verder op te
            bouwen.
          </p>
          <p className="post-excerpt">
            Dinsdag heb ik van thuis uit gewerkt. Ik ben verder gegaan met het ontwikkelen van de
            create user-functionaliteit. Maandag had ik hier al grotendeels de backend voor gemaakt,
            en dinsdag ben ik begonnen met het verbinden van de backend met de frontend.
          </p>
          <p className="post-excerpt">
            Woensdag ben ik gestart met de backend voor het verwijderen van users. Nadat dit klaar
            was, heb ik de backend gekoppeld aan de frontend, zodat de delete-functionaliteit
            volledig werkte.
          </p>
          <p className="post-excerpt">
            Donderdag hadden we een technische meeting met de product owner en de technical
            supporter. Tijdens deze meeting hebben we een demo gegeven van wat er al ontwikkeld was.
            Beide heren waren tevreden met de vooruitgang, wat een goede motivatie gaf om verder te
            werken. Na de meeting zijn we verder gegaan met het ontwikkelen. Ik ben toen begonnen
            met de update-functionaliteit voor users. De backend hiervan heb ik nog kunnen afwerken.
          </p>
          <p className="post-excerpt">
            Vrijdag ben ik gestart met het koppelen van deze update-functionaliteit aan de frontend.
            Daarnaast heb ik ook nog de get-functionaliteit voor users aangemaakt. Daarmee waren
            alle CRUD operaties voor users klaar voor deze week.
          </p>
          <p className="post-excerpt">
            Het was een heel leerzame week. Ik had in het begin wat moeite met commits maken en
            deze correct te pushen. Met behulp van online documentatie en tutorials heb ik hier
            meer over opgezocht, waardoor ik er nu veel beter mee kan werken.
          </p>
          <div className="tags">
            {week4Tags.map((tag) => (
              <span key={tag} className="tag tag-static">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ) : null}

      {showWeek3 ? (
        <article className="card">
          <div className="post-meta">Blogpost week 3</div>
          <h3 className="post-title">Blog week 3</h3>
          <p className="post-excerpt">
            Deze week stond vooral in het teken van vooruitgang boeken, feedback verwerken en onze
            projectstructuur verder verfijnen.
          </p>
          <p className="post-excerpt">
            Aan het begin van de week heb ik de blogpost afgewerkt. Het was leuk en leerzaam om te
            zien wat er allemaal in de voorgaande week is gedaan. Soms kan dit ook een belletje
            doen rinkelen dat er eventueel te weinig is gedaan, of het kan een geruststelling zijn
            als je goed op schema zit.
          </p>
          <p className="post-excerpt">
            Kort daarna vond er een meeting plaats waarin we voor de eerste keer konden tonen wat
            we tot nu toe hebben ontwikkeld. Dit was een waardevol moment, omdat we gerichte
            feedback kregen op zowel de functionaliteit als de algemene aanpak. De meeting gaf ons
            niet alleen bevestiging van wat goed werkte, maar ook concrete verbeterpunten waarmee we
            verder aan de slag konden.
          </p>
          <p className="post-excerpt">
            Na de meeting heb ik de ontvangen feedback verwerkt en geïmplementeerd. Hierbij lag de
            focus op het verbeteren van de gebruiksvriendelijkheid, het verfijnen van bestaande
            onderdelen en het wegwerken van kleine inconsistenties. Deze iteratie zorgde ervoor dat
            het project beter aansluit bij de verwachtingen en een meer afgewerkt gevoel geeft.
          </p>
          <p className="post-excerpt">
            Daarnaast heb ik ons Trello-board geüpdatet om het overzicht en de planning te
            verbeteren. Ik heb extra user stories toegevoegd, zodat de resterende taken duidelijker
            gedefinieerd zijn en het team een beter zicht heeft op de volgende stappen. Dit helpt
            om prioriteiten scherper te stellen en efficiënter samen te werken.
          </p>
          <p className="post-excerpt">
            Later in de week ontvingen we ook de bedrijfsguidelines met betrekking tot kleuren en
            logo's. Op basis daarvan heb ik de nodige aanpassingen doorgevoerd om de visuele
            identiteit correct te implementeren. Dit was een belangrijke stap om het project
            consistenter en professioneler te maken en beter te laten aansluiten bij de huisstijl
            van het bedrijf.
          </p>
          <p className="post-excerpt">
            Al bij al was het een productieve week waarin we niet alleen vooruitgang hebben geboekt,
            maar ook de kwaliteit, structuur en visuele consistentie van het project merkbaar hebben
            verbeterd.
          </p>
          <div className="tags">
            {week3Tags.map((tag) => (
              <span key={tag} className="tag tag-static">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ) : null}

      {showWeek2 ? (
        <article className="card">
          <div className="post-meta">Blogpost week 2</div>
          <h3 className="post-title">Blog week 2</h3>
          <p className="post-excerpt">
            Tijdens mijn stage bij Brightest heb ik in mijn tweede week gewerkt aan het verder
            uitbouwen van een professionele webshop-frontend in TypeScript. Ik ben gestart vanuit
            een basisproject en heb dit verder ontwikkeld tot een functionele en gestructureerde
            webshop.
          </p>
          <p className="post-excerpt">
            De applicatie bevat een overzichtelijke productpagina met productcards, een detailpagina
            per product en een werkend winkelmandje waarin gebruikers producten kunnen toevoegen en
            het totaalbedrag kunnen bekijken. Daarnaast heb ik gezorgd voor duidelijke navigatie
            tussen de verschillende onderdelen van de website.
          </p>
          <p className="post-excerpt">
            Een groot deel van mijn werk bestond uit het volledig herwerken van de styling via een
            globale CSS. Ik heb het design aangepast naar een warme, uitnodigende en commerciele
            webshopstijl. Hierbij heb ik aandacht besteed aan kleuren, typografie, spacing en
            moderne knoppen met hover-effecten.
          </p>
          <p className="post-excerpt">
            Ook heb ik het project logisch opgebouwd met herbruikbare componenten, zodat de code
            overzichtelijk en schaalbaar blijft. Door gebruik te maken van TypeScript is de code
            bovendien typeveilig en betrouwbaarder.
          </p>
          <p className="post-excerpt">
            Deze week heb ik dus niet alleen de functionaliteit verbeterd, maar ook de volledige
            gebruikerservaring en professionele uitstraling van de webshop versterkt.
          </p>
          <p className="post-excerpt">
            Daarnaast was er deze week een game night op het bedrijf waar ik aan heb deelgenomen. Er
            waren pizza's en verschillende games om te spelen. Hoewel er niet veel mensen aanwezig
            waren, was het toch gezellig en leuk om mee te maken.
          </p>
          <div className="tags">
            {week2Tags.map((tag) => (
              <span key={tag} className="tag tag-static">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ) : null}

      {showWeek1 ? (
        <article className="card">
          <div className="post-meta">Blogpost week 1</div>
          <h3 className="post-title">Dag 1</h3>
          <p className="post-excerpt">
            De eerste dag in het bedrijf was super aangenaam. We werden goed verwelkomd en voelden
            meteen de goede sfeer. We hebben een korte introductie gekregen van het bedrijf, hoe de
            stage zal verlopen en wat de verwachtingen zijn. Daarna hebben we een plekje genomen en
            zijn we begonnen met het bespreken van hoe en wat we alles gaan aanpakken.
          </p>

          <h3 className="post-title">Dag 2</h3>
          <p className="post-excerpt">
            De tweede dag zijn we rustig aan begonnen met het neerschrijven van de user stories, het
            aanmaken van een Trello en alles daarop te zetten. We hebben ook de GitHub-repo gekregen
            van het bedrijf. In het begin konden we niet pushen en hier hebben we dan samen met onze
            technische mentor aan gewerkt.
          </p>

          <h3 className="post-title">Dag 3</h3>
          <p className="post-excerpt">
            Op dag 3 zijn we begonnen met het maken van de beeldschermen. Hier hebben we even aan
            gezeten, aangezien het heel wat schermen waren. We gebruikten Figma als software
            hiervoor.
          </p>

          <h3 className="post-title">Dag 4</h3>
          <p className="post-excerpt">
            Op dag 4 hebben we de schermen afgemaakt en hebben we twee meetings gehad. De eerste
            meeting was met onze stagementor om te bespreken hoe het gaat in het bedrijf en hoe we
            ons voelen, enzovoort. De tweede meeting was een technische meeting waarbij we vragen
            konden stellen over technische aspecten. Aangezien we nog niet echt zijn begonnen met
            programmeren, hebben we gewoon een update gegeven van de stand van zaken. We hebben hier
            feedback op gekregen en deze dan nog geimplementeerd.
          </p>

          <h3 className="post-title">Dag 5</h3>
          <p className="post-excerpt">
            Op vrijdag heb ik van thuis uit gewerkt. Ik had donderdag al met mijn partner besproken
            dat ik zou werken aan de blogpost-website en de schermen zou afmaken. Aangezien we
            feedback hadden gekregen, moesten er nog wat schermen aangepast worden en deze heb ik
            dan geimplementeerd.
          </p>
          <div className="tags">
            {week1Tags.map((tag) => (
              <span key={tag} className="tag tag-static">
                {tag}
              </span>
            ))}
          </div>
        </article>
      ) : null}
    </div>
  );
}
