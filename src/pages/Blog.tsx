import { useMemo, useState } from "react";
import TagFilter from "../components/TagFilter";

const week5Tags = ["#Users", "#CRUD", "#Admin", "#MergeConflicten", "#Jobbeurs", "#Intervisie"];
const week4Tags = ["#Users", "#CRUD", "#Backend", "#Frontend", "#Demo", "#Git"];
const week3Tags = ["#Planning", "#Feedback", "#Trello", "#UserStories", "#Guidelines", "#Branding"];
const week2Tags = ["#TypeScript", "#Webshop", "#Frontend", "#Styling", "#Componenten", "#GameNight"];
const week1Tags = ["#Onboarding", "#UserStories", "#Trello", "#Figma", "#Meetings", "#Feedback"];

export default function Blog() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(
    () =>
      Array.from(new Set([...week5Tags, ...week4Tags, ...week3Tags, ...week2Tags, ...week1Tags])).sort(),
    []
  );

  const hasTagMatch = (weekTags: string[]) =>
    selectedTags.length === 0 || selectedTags.some((tag) => weekTags.includes(tag));

  const showWeek5 = hasTagMatch(week5Tags);
  const showWeek4 = hasTagMatch(week4Tags);
  const showWeek3 = hasTagMatch(week3Tags);
  const showWeek2 = hasTagMatch(week2Tags);
  const showWeek1 = hasTagMatch(week1Tags);
  const hasResults = showWeek5 || showWeek4 || showWeek3 || showWeek2 || showWeek1;

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

      {showWeek5 ? (
        <article className="card latest-card">
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
