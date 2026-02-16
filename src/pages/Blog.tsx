export default function Blog() {
  return (
    <div className="stack">
      <h1>Blog Posts</h1>

      <article className="card latest-card">
        <div className="post-meta">Blogpost week 2</div>
        <h3 className="post-title">Blog week 2</h3>
        <p className="post-excerpt">
          Tijdens mijn stage bij Brightest heb ik in mijn tweede week gewerkt aan het verder
          uitbouwen van een professionele webshop-frontend in TypeScript. Ik ben gestart vanuit een
          basisproject en heb dit verder ontwikkeld tot een functionele en gestructureerde webshop.
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
          webshopstijl. Hierbij heb ik aandacht besteed aan kleuren, typografie, spacing en moderne
          knoppen met hover-effecten.
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
      </article>

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
          gezeten, aangezien het heel wat schermen waren. We gebruikten Figma als software hiervoor.
        </p>

        <h3 className="post-title">Dag 4</h3>
        <p className="post-excerpt">
          Op dag 4 hebben we de schermen afgemaakt en hebben we twee meetings gehad. De eerste
          meeting was met onze stagementor om te bespreken hoe het gaat in het bedrijf en hoe we ons
          voelen, enzovoort. De tweede meeting was een technische meeting waarbij we vragen konden
          stellen over technische aspecten. Aangezien we nog niet echt zijn begonnen met
          programmeren, hebben we gewoon een update gegeven van de stand van zaken. We hebben hier
          feedback op gekregen en deze dan nog geimplementeerd.
        </p>

        <h3 className="post-title">Dag 5</h3>
        <p className="post-excerpt">
          Op vrijdag heb ik van thuis uit gewerkt. Ik had donderdag al met mijn partner besproken
          dat ik zou werken aan de blogpost-website en de schermen zou afmaken. Aangezien we feedback
          hadden gekregen, moesten er nog wat schermen aangepast worden en deze heb ik dan
          geimplementeerd.
        </p>
      </article>
    </div>
  );
}
